import { redirect, type RequestEvent } from '@sveltejs/kit';
import invoices from '$lib/invoices.json';
import type { Category } from './[invoiceId]/+page.server';

export async function load({ fetch, params, locals }: RequestEvent) {
	const { user, session } = await locals.auth.validateUser();
	if (user && session) {
		// console.log(user, session);
		return {
			invoice: invoices as Category[], // return the invoice if found, or null if not found
			user,
			session
		};
	} else {
		throw redirect(302, '/Login');
	}
}
