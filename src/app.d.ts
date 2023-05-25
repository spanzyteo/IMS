// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface Platform {}
		// interface Locals {}
		interface Locals {
			auth: import('lucia-auth').AuthRequest;
		}
		interface Category {
			id?: string;
			customer_name?: string;
			items?: { name: string; quantity: number; price: number }[];
		}
	}
}
/// <reference types="lucia-auth" />
declare global {
	namespace Lucia {
		type Auth = import('$lib/lucia').Auth;
		type UserAttributes = {};
	}
}
export {};
