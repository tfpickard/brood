/**
 * Feature flags for Phase 2 features. All default to off. A flag is on only when its
 * environment variable is exactly "on".
 */
export const FLAG_NAMES = ['FLAG_MEMBERS', 'FLAG_REMARKS', 'FLAG_LISTS', 'FLAG_FOLLOWING'] as const;
export type FlagName = (typeof FLAG_NAMES)[number];
export type Flags = Record<FlagName, boolean>;

export function readFlags(env: Record<string, string | undefined>): Flags {
	return Object.fromEntries(FLAG_NAMES.map((name) => [name, env[name] === 'on'])) as Flags;
}
