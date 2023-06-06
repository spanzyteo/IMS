import { redirect, type RequestEvent } from '@sveltejs/kit';
import type { Category } from './[invoiceId]/+page.server';
import { readFileSync, writeFileSync } from 'fs';

export async function load({ fetch, params, locals }: RequestEvent) {
	const { user, session } = await locals.auth.validateUser();
	let inv;
	let invoices = [];
	try {
		inv = readFileSync(`./src/lib/${user.userId}.json`, 'utf-8');
		if (inv != null) {
			invoices = JSON.parse(inv);
		} else {
			inv = '';
			invoices = [];
		}
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
	} catch (e) {
		if (e.code === 'ENOENT') {
			inv = writeFileSync(`./src/lib/${user.userId}.json`, '[]');
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
		console.log(e);
	}
}
