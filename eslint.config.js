import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

export default ts.config(
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		rules: {
			'no-undef': 'off',
			// The site is served at the root with no configured base path, so plain hrefs are correct.
			'svelte/no-navigation-without-resolve': 'off'
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		}
	},
	{
		// Pages and endpoints reach data only through the server service modules.
		files: ['src/routes/**/*'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['$lib/server/db', '$lib/server/db/*', 'postgres'],
							message: 'Routes use the service modules in $lib/server, never the database directly.'
						},
						{
							group: ['**/tools/media/**', 'openai'],
							message: 'The media generator is an owner-run tool and is never imported by the site.'
						}
					]
				}
			]
		}
	},
	{
		ignores: [
			'build/',
			'.svelte-kit/',
			'.netlify/',
			'node_modules/',
			'static/',
			'test-results/',
			'playwright-report/'
		]
	}
);
