/**
 * Shared media pipeline logic: loading config, style, manifest and lock; composing prompts;
 * computing input hashes and asset status. Pure functions over explicit inputs.
 * Owner-run tooling only. Nothing under src/ imports this directory (tested).
 */
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

export interface MediaConfig {
	model: string;
	endpoint: string;
	params: {
		quality: string;
		output_format: string;
		output_compression: number;
		background: string;
		moderation: string;
		n: 1;
	};
	max_per_run: number;
	seed: null;
	output_dir: string;
	pricing_per_million_tokens: { text_input: number; image_input: number; image_output: number };
	estimate_usd_per_image: Record<string, number>;
}

export interface EraStyle {
	plate_era: '1890s' | '1920s' | '1950s' | '1980s' | 'present';
	preamble: string;
}

export interface MediaStyle {
	global_suffix: string;
	eras: Record<string, EraStyle>;
	aspects: Record<'portrait' | 'landscape' | 'square', string>;
}

export interface FragmentEntry {
	id: string;
	type: string;
	era: string;
	aspect: 'portrait' | 'landscape' | 'square';
	alt: string;
	subject: string;
}

export interface ManifestEntry extends FragmentEntry {
	used_by: string[];
	prompt: string;
}

export interface Manifest {
	assets: ManifestEntry[];
}

export interface LockEntry {
	inputHash: string;
	sha256: string;
	file: string;
	model: string;
	generatedAt: string;
}

export type Lock = Record<string, LockEntry>;

export const ROOT = new URL('../../', import.meta.url).pathname;

export function loadYaml<T>(path: string): T {
	return parse(readFileSync(path, 'utf8')) as T;
}

export function loadConfig(root = ROOT): MediaConfig {
	return loadYaml<MediaConfig>(join(root, 'media/config.yaml'));
}

export function loadStyle(root = ROOT): MediaStyle {
	return loadYaml<MediaStyle>(join(root, 'media/style.yaml'));
}

export function loadManifest(root = ROOT): Manifest {
	return loadYaml<Manifest>(join(root, 'media/manifest.yaml'));
}

export function loadLock(root = ROOT): Lock {
	const path = join(root, 'media/lock.json');
	return existsSync(path) ? (JSON.parse(readFileSync(path, 'utf8')) as Lock) : {};
}

function oneLine(s: string): string {
	return s.replace(/\s+/g, ' ').trim();
}

/** The full prompt as sent: era preamble, subject, global suffix. */
export function composePrompt(style: MediaStyle, era: string, subject: string): string {
	const e = style.eras[era];
	if (!e) throw new Error(`Unknown era ${era}`);
	return [oneLine(e.preamble), oneLine(subject), oneLine(style.global_suffix)].join('\n\n');
}

export function sizeFor(style: MediaStyle, aspect: FragmentEntry['aspect']): string {
	const size = style.aspects[aspect];
	if (!size) throw new Error(`Unknown aspect ${aspect}`);
	return size;
}

export function requestBody(config: MediaConfig, entry: ManifestEntry, size: string) {
	return {
		model: config.model,
		prompt: entry.prompt,
		size,
		quality: config.params.quality,
		output_format: config.params.output_format,
		output_compression: config.params.output_compression,
		background: config.params.background,
		moderation: config.params.moderation,
		n: 1
	};
}

/** Hash of everything that determines the request: prompt, model id and parameters. */
export function inputHash(config: MediaConfig, entry: ManifestEntry, size: string): string {
	return createHash('sha256').update(JSON.stringify(requestBody(config, entry, size))).digest('hex');
}

export function sha256File(path: string): string {
	return createHash('sha256').update(readFileSync(path)).digest('hex');
}

export function promptHash(prompt: string): string {
	return createHash('sha256').update(prompt).digest('hex');
}

export function outputPath(root: string, config: MediaConfig, id: string): string {
	return join(root, config.output_dir, `${id}.${config.params.output_format}`);
}

export type AssetStatus = 'missing' | 'stale' | 'locked';

/**
 * missing: no committed file.
 * stale: a file exists but its lock entry is absent, records a different prompt, model or
 *        parameters, or does not match the file's sha256. Stale assets are reported and left
 *        alone until the owner regenerates them by id.
 * locked: lock entry and file both match. Never regenerated.
 */
export function assetStatus(
	root: string,
	config: MediaConfig,
	style: MediaStyle,
	entry: ManifestEntry,
	lock: Lock
): AssetStatus {
	const file = outputPath(root, config, entry.id);
	if (!existsSync(file)) return 'missing';
	const locked = lock[entry.id];
	if (!locked) return 'stale';
	if (locked.inputHash !== inputHash(config, entry, sizeFor(style, entry.aspect))) return 'stale';
	if (locked.sha256 !== sha256File(file)) return 'stale';
	return 'locked';
}

export function estimateUsd(config: MediaConfig, size: string): number {
	return config.estimate_usd_per_image[size] ?? Math.max(...Object.values(config.estimate_usd_per_image));
}

export function actualUsd(
	config: MediaConfig,
	usage: {
		input_tokens_details?: { text_tokens?: number; image_tokens?: number };
		output_tokens?: number;
	} | null
): number | null {
	if (!usage) return null;
	const p = config.pricing_per_million_tokens;
	const text = usage.input_tokens_details?.text_tokens ?? 0;
	const image = usage.input_tokens_details?.image_tokens ?? 0;
	const out = usage.output_tokens ?? 0;
	return (text * p.text_input + image * p.image_input + out * p.image_output) / 1_000_000;
}
