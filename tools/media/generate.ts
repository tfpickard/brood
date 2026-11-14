/**
 * Owner-run media generator for the American Brood Society archive.
 *
 *   scripts/generate-media                          dry run: report only, no network
 *   scripts/generate-media --id plate-aiken-marker  dry run for named assets
 *   scripts/generate-media --all-missing --max 10   dry run for up to 10 missing assets
 *   ... --execute                                   actually send the requests
 *
 * Rules: one request per asset, one attempt, no retries, no variations, no fallback model.
 * Every call is appended to media/ledger.jsonl. Locked assets are never regenerated.
 * Nothing in the site, build, CI or hooks invokes or imports this file (tested).
 */
import { appendFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import {
	actualUsd,
	assetStatus,
	estimateUsd,
	inputHash,
	loadConfig,
	loadLock,
	loadManifest,
	loadStyle,
	outputPath,
	promptHash,
	requestBody,
	ROOT,
	sha256File,
	sizeFor,
	type Lock,
	type ManifestEntry
} from './lib.ts';

export interface Deps {
	root: string;
	env: Record<string, string | undefined>;
	/** Only consulted on --execute. */
	fetch?: typeof globalThis.fetch;
	log: (line: string) => void;
	now: () => Date;
}

export interface Options {
	ids: string[];
	allMissing: boolean;
	max: number | null;
	execute: boolean;
	help: boolean;
}

export class UsageError extends Error {}

export function parseArgs(argv: string[]): Options {
	const opts: Options = { ids: [], allMissing: false, max: null, execute: false, help: false };
	for (let i = 0; i < argv.length; i++) {
		const a = argv[i];
		if (a === '--id') {
			const v = argv[++i];
			if (!v || v.startsWith('--')) throw new UsageError('--id requires an asset id.');
			opts.ids.push(v);
		} else if (a === '--all-missing') {
			opts.allMissing = true;
		} else if (a === '--max') {
			const v = argv[++i];
			if (!v || !/^\d+$/.test(v) || Number(v) < 1) {
				throw new UsageError('--max requires a positive integer.');
			}
			opts.max = Number(v);
		} else if (a === '--execute') {
			opts.execute = true;
		} else if (a === '--help' || a === '-h') {
			opts.help = true;
		} else {
			throw new UsageError(`Unknown argument: ${a}`);
		}
	}
	if (opts.allMissing && opts.max === null) throw new UsageError('--all-missing requires --max N.');
	if (opts.allMissing && opts.ids.length) {
		throw new UsageError('Use either --id or --all-missing, not both.');
	}
	if (opts.max !== null && !opts.allMissing)
		throw new UsageError('--max applies only to --all-missing.');
	return opts;
}

const HELP = `Usage: scripts/generate-media [--id ID]... | [--all-missing --max N] [--execute]
Dry run by default. Nothing is sent without --execute.`;

/** Generation runs only from the owner's local shell, never in CI or a deploy. */
const FORBIDDEN_ENV = ['CI', 'NETLIFY', 'CONTEXT', 'BUILD_ID', 'DEPLOY_ID', 'GITHUB_ACTIONS'];

export async function run(argv: string[], deps: Deps): Promise<number> {
	let opts: Options;
	try {
		opts = parseArgs(argv);
	} catch (e) {
		deps.log((e as Error).message);
		deps.log(HELP);
		return 2;
	}
	if (opts.help) {
		deps.log(HELP);
		return 0;
	}

	const config = loadConfig(deps.root);
	const style = loadStyle(deps.root);
	const manifest = loadManifest(deps.root);
	const lock = loadLock(deps.root);
	const byId = new Map(manifest.assets.map((a) => [a.id, a]));

	const statuses = manifest.assets.map((a) => ({
		a,
		s: assetStatus(deps.root, config, style, a, lock)
	}));
	const count = (s: string) => statuses.filter((x) => x.s === s).length;

	let selected: ManifestEntry[] = [];
	if (opts.ids.length) {
		const unknown = opts.ids.filter((id) => !byId.has(id));
		if (unknown.length) {
			deps.log(`Unknown asset id(s): ${unknown.join(', ')}`);
			return 2;
		}
		selected = [...new Set(opts.ids)].map((id) => byId.get(id) as ManifestEntry);
		const locked = statuses.filter((x) => opts.ids.includes(x.a.id) && x.s === 'locked');
		if (locked.length) {
			deps.log(
				`Refused: locked assets are never regenerated: ${locked.map((x) => x.a.id).join(', ')}`
			);
			deps.log('Edit an asset’s prompt to make it stale before regenerating it by id.');
			return 2;
		}
	} else if (opts.allMissing) {
		selected = statuses
			.filter((x) => x.s === 'missing')
			.map((x) => x.a)
			.slice(0, opts.max ?? 0);
	}

	const ceiling = config.max_per_run;
	if ((opts.max ?? 0) > ceiling || selected.length > ceiling) {
		deps.log(`Refused: the per-run ceiling is ${ceiling} assets (media/config.yaml max_per_run).`);
		return 2;
	}

	const estimate = selected.reduce(
		(sum, a) => sum + estimateUsd(config, sizeFor(style, a.aspect)),
		0
	);
	deps.log(`Model: ${config.model}`);
	deps.log(
		`Manifest: ${manifest.assets.length} assets; ${count('locked')} locked, ${count('stale')} stale, ${count('missing')} missing.`
	);
	for (const x of statuses.filter((x) => x.s === 'stale')) deps.log(`  stale: ${x.a.id}`);
	deps.log(`Selected: ${selected.length}`);
	for (const a of selected) deps.log(`  ${a.id}  ${sizeFor(style, a.aspect)}`);
	deps.log(`Estimated cost: $${estimate.toFixed(2)}`);

	if (!opts.execute) {
		deps.log('Dry run. Nothing was sent. Add --execute to generate the selected assets.');
		return 0;
	}

	const forbidden = FORBIDDEN_ENV.filter((k) => deps.env[k]);
	if (forbidden.length) {
		deps.log(
			`Refused: generation runs only from the owner’s local shell (found ${forbidden.join(', ')}).`
		);
		return 3;
	}
	const key = deps.env.OPENAI_API_KEY;
	if (!key) {
		deps.log('Refused: OPENAI_API_KEY is not set in this shell.');
		return 3;
	}
	if (!deps.fetch) {
		deps.log('Refused: no fetch implementation.');
		return 3;
	}
	if (selected.length === 0) {
		deps.log('Nothing selected.');
		return 0;
	}

	const ledgerPath = join(deps.root, 'media/ledger.jsonl');
	const lockPath = join(deps.root, 'media/lock.json');
	const nextLock: Lock = { ...lock };
	let failures = 0;

	for (const asset of selected) {
		const size = sizeFor(style, asset.aspect);
		const body = requestBody(config, asset, size);
		const started = deps.now().toISOString();
		const { prompt: _prompt, ...params } = body;
		void _prompt;
		const record = {
			timestamp: started,
			asset: asset.id,
			model: config.model,
			params,
			promptHash: promptHash(asset.prompt)
		};
		try {
			// One request, one attempt. No retry on any outcome.
			const res = await deps.fetch(config.endpoint, {
				method: 'POST',
				headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
				body: JSON.stringify(body)
			});
			const json = (await res.json()) as {
				data?: { b64_json?: string; revised_prompt?: string }[];
				usage?: Parameters<typeof actualUsd>[1];
				error?: { message?: string };
			};
			const b64 = json.data?.[0]?.b64_json;
			if (!res.ok || !b64) {
				failures++;
				appendFileSync(
					ledgerPath,
					JSON.stringify({
						...record,
						result: 'failed',
						status: res.status,
						error: json.error?.message ?? 'no image returned',
						cost: actualUsd(config, json.usage ?? null)
					}) + '\n'
				);
				deps.log(`  failed: ${asset.id} (${res.status})`);
				continue;
			}
			const file = outputPath(deps.root, config, asset.id);
			mkdirSync(dirname(file), { recursive: true });
			writeFileSync(file, Buffer.from(b64, 'base64'));
			const sha = sha256File(file);
			nextLock[asset.id] = {
				inputHash: inputHash(config, asset, size),
				sha256: sha,
				file: relative(deps.root, file),
				model: config.model,
				generatedAt: started
			};
			writeFileSync(lockPath, JSON.stringify(sortKeys(nextLock), null, '\t') + '\n');
			appendFileSync(
				ledgerPath,
				JSON.stringify({
					...record,
					result: 'ok',
					sha256: sha,
					revisedPrompt: json.data?.[0]?.revised_prompt ?? null,
					usage: json.usage ?? null,
					cost: actualUsd(config, json.usage ?? null)
				}) + '\n'
			);
			deps.log(`  ok: ${asset.id}`);
		} catch (e) {
			failures++;
			appendFileSync(
				ledgerPath,
				JSON.stringify({ ...record, result: 'error', error: (e as Error).message }) + '\n'
			);
			deps.log(`  error: ${asset.id}: ${(e as Error).message}`);
		}
	}
	deps.log(
		`Done. ${selected.length - failures} generated, ${failures} failed. See media/ledger.jsonl.`
	);
	return failures ? 1 : 0;
}

function sortKeys(lock: Lock): Lock {
	return Object.fromEntries(Object.entries(lock).sort(([a], [b]) => a.localeCompare(b)));
}

/** Entry point when run from the shell shim. */
export async function main(argv: string[]): Promise<number> {
	const execute = argv.includes('--execute');
	return run(argv, {
		root: ROOT,
		env: process.env,
		// The network is reachable only on an explicit --execute.
		fetch: execute ? globalThis.fetch : undefined,
		log: (l) => console.log(l),
		now: () => new Date()
	});
}
