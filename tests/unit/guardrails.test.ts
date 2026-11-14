/**
 * Guardrails on the owner-run media generator: it is reachable only from the owner's shell, makes
 * no network call without --execute, and nothing in the build, site, CI or hooks invokes it.
 */
import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, relative } from 'node:path';
import { describe, expect, it } from 'vitest';
import { parseArgs, run, UsageError } from '../../tools/media/generate.ts';

const ROOT = new URL('../../', import.meta.url).pathname;

function walk(dir: string): string[] {
	const skip = new Set(['node_modules', '.git', '.svelte-kit', 'build', '.netlify', 'test-results', 'playwright-report', 'static']);
	return readdirSync(dir).flatMap((f) => {
		if (skip.has(f)) return [];
		const p = join(dir, f);
		return statSync(p).isDirectory() ? walk(p) : [p];
	});
}

const files = walk(ROOT).map((p) => relative(ROOT, p));
const read = (f: string) => readFileSync(join(ROOT, f), 'utf8');

/** Paths permitted to name the generator: the owner-facing README, the generator itself, and this test. */
const ALLOWED = (f: string) =>
	f === 'README.md' || f.startsWith('tools/media/') || f === 'scripts/generate-media' || f === 'tests/unit/guardrails.test.ts';

function runQuiet(argv: string[], fetchSpy?: typeof fetch) {
	const lines: string[] = [];
	return run(argv, {
		root: ROOT,
		env: {},
		fetch: fetchSpy,
		log: (l) => lines.push(l),
		now: () => new Date('2026-11-14T00:00:00Z')
	}).then((code) => ({ code, out: lines.join('\n') }));
}

describe('the media generator', () => {
	it('is referenced by nothing but the README and itself', () => {
		const offenders = files.filter(
			(f) => !ALLOWED(f) && /generate-media|tools\/media\/generate|media\/generate\.ts/.test(read(f))
		);
		expect(offenders).toEqual([]);
	});

	it('is not chained from any package script, hook or build step', () => {
		const pkg = JSON.parse(read('package.json')) as { scripts: Record<string, string> };
		for (const [name, cmd] of Object.entries(pkg.scripts)) {
			expect(`${name}: ${cmd}`).not.toMatch(/generate-media|tools\/media|openai/i);
		}
		for (const f of ['netlify.toml', 'svelte.config.js', 'vite.config.ts', 'playwright.config.ts']) {
			if (existsSync(join(ROOT, f))) expect(read(f), f).not.toMatch(/generate-media|tools\/media|openai/i);
		}
		const hookish = files.filter((f) => /^(\.github|\.husky|\.githooks)\//.test(f));
		for (const f of hookish) expect(read(f), f).not.toMatch(/generate-media|tools\/media/);
		expect(existsSync(join(ROOT, '.git/hooks/pre-commit'))).toBe(false);
		expect(pkg.scripts.postinstall).toBeUndefined();
	});

	it('is never imported by the site, and no OpenAI client is used anywhere in it', () => {
		const site = files.filter((f) => f.startsWith('src/') || f.startsWith('netlify/') || f.startsWith('content/'));
		for (const f of site) {
			const text = read(f);
			expect(text, f).not.toMatch(/tools\/media|generate-media/);
			expect(text, f).not.toMatch(/from ['"]openai['"]|require\(['"]openai['"]\)|api\.openai\.com|OPENAI_API_KEY/);
		}
		const pkg = JSON.parse(read('package.json')) as Record<string, Record<string, string>>;
		const deps = { ...pkg.dependencies, ...pkg.devDependencies };
		expect(Object.keys(deps).filter((d) => /openai/i.test(d))).toEqual([]);
	});

	it('keeps the OpenAI key out of every deployed environment', () => {
		const env = read('.env.example');
		expect(env).toMatch(/OPENAI_API_KEY: LOCAL SHELL ONLY\. NEVER SET ON NETLIFY/);
		expect(env).not.toMatch(/^OPENAI_API_KEY=/m);
		expect(read('netlify.toml')).not.toMatch(/OPENAI/);
	});

	it('makes zero network calls in a dry run, in process', async () => {
		let calls = 0;
		const spy = (async () => {
			calls++;
			throw new Error('network');
		}) as unknown as typeof fetch;
		for (const argv of [[], ['--id', 'plate-aiken-marker'], ['--all-missing', '--max', '5']]) {
			const { code } = await runQuiet(argv, spy);
			expect(code).toBe(0);
		}
		expect(calls).toBe(0);
	});

	it('makes zero network calls when run from the shell with the network mocked', () => {
		const dir = mkdtempSync(join(tmpdir(), 'abs-net-'));
		const record = join(dir, 'calls.log');
		const preload = join(dir, 'deny-network.mjs');
		writeFileSync(
			preload,
			`import { appendFileSync } from 'node:fs';
import net from 'node:net'; import tls from 'node:tls'; import http from 'node:http'; import https from 'node:https';
const deny = (what) => () => { appendFileSync(${JSON.stringify(record)}, what + '\\n'); throw new Error('network denied: ' + what); };
globalThis.fetch = deny('fetch');
net.connect = deny('net.connect'); net.createConnection = deny('net.createConnection'); tls.connect = deny('tls.connect');
http.request = deny('http.request'); http.get = deny('http.get'); https.request = deny('https.request'); https.get = deny('https.get');
`
		);
		for (const argv of [[], ['--id', 'plate-newport-vesper'], ['--all-missing', '--max', '3']]) {
			const r = spawnSync(process.execPath, ['--import', preload, join(ROOT, 'scripts/generate-media'), ...argv], {
				cwd: ROOT,
				encoding: 'utf8',
				env: { PATH: process.env.PATH ?? '', HOME: process.env.HOME ?? '' }
			});
			expect(r.status, r.stderr).toBe(0);
			expect(r.stdout).toMatch(/Dry run\. Nothing was sent\./);
		}
		expect(existsSync(record) ? readFileSync(record, 'utf8') : '').toBe('');
	});

	it('refuses --all-missing without --max', async () => {
		expect(() => parseArgs(['--all-missing'])).toThrow(UsageError);
		const { code, out } = await runQuiet(['--all-missing']);
		expect(code).toBe(2);
		expect(out).toMatch(/requires --max/);
	});

	it('refuses to exceed the configured ceiling', async () => {
		const over = await runQuiet(['--all-missing', '--max', '26']);
		expect(over.code).toBe(2);
		expect(over.out).toMatch(/ceiling is 25/);
		const many = Array.from({ length: 26 }, () => 0);
		const manifest = (await import('../../tools/media/lib.ts')).loadManifest();
		const ids = manifest.assets.slice(0, many.length).flatMap((a) => ['--id', a.id]);
		const byId = await runQuiet(ids);
		expect(byId.code).toBe(2);
	});

	it('has no unbounded mode and no retry, loop or fallback options', () => {
		for (const flag of ['--all', '--retry', '--variations', '--loop', '--fallback', '--upscale']) {
			expect(() => parseArgs([flag]), flag).toThrow(UsageError);
		}
		const src = read('tools/media/generate.ts');
		expect(src).not.toMatch(/retry\s*\(|maxRetries|while\s*\(\s*true/);
	});

	it('refuses to execute outside the owner’s shell or without a key', async () => {
		const lines: string[] = [];
		let calls = 0;
		const deps = {
			root: ROOT,
			log: (l: string) => lines.push(l),
			now: () => new Date(),
			fetch: (async () => {
				calls++;
				throw new Error('x');
			}) as unknown as typeof fetch
		};
		expect(await run(['--id', 'plate-aiken-marker', '--execute'], { ...deps, env: { CI: 'true', OPENAI_API_KEY: 'x' } })).toBe(3);
		expect(await run(['--id', 'plate-aiken-marker', '--execute'], { ...deps, env: { NETLIFY: 'true', OPENAI_API_KEY: 'x' } })).toBe(3);
		expect(await run(['--id', 'plate-aiken-marker', '--execute'], { ...deps, env: {} })).toBe(3);
		expect(calls).toBe(0);
	});
});
