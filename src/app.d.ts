// See https://svelte.dev/docs/kit/types#app.d.ts
declare global {
	namespace App {
		interface Error {
			message: string;
		}
		interface Locals {
			secretary: boolean;
		}
		interface PageData {
			title?: string;
			description?: string;
		}
	}
}

export {};
