import { redirect, type RequestEvent } from '@sveltejs/kit';
import type { Category } from './[invoiceId]/+page.server';
import { readFileSync, existsSync } from 'fs';
import { dev } from '$app/environment';

export async function load({ fetch, params, locals }: RequestEvent) {
	const { user, session } = await locals.auth.validateUser();

	if (user != null) {
		let inv = '';
		let invoices = [];
		let filepath = `./src/lib/${user.userId}-invoice.json`;
		if (dev) {
			filepath = `./src/lib/${user.userId}-invoice.json`;
		} else {
			filepath = `/app/data/${user.userId}-invoice.json`;
		}
		try {
			if (existsSync(filepath)) {
				if (dev) {
					inv = readFileSync(`./src/lib/${user.userId}-invoice.json`, 'utf-8');
				} else {
					inv = readFileSync(`/app/data/${user.userId}-invoice.json`, 'utf-8');
				}
				if (inv.trim() === '') {
					invoices = [];
				} else {
					invoices = JSON.parse(inv);
				}
			} else {
				inv = '';
				invoices = [];
			}
			if (user && session) {
				return {
					invoice: invoices as Category[], // return the invoice if found, or null if not found
					user,
					session
				};
			} else {
				throw redirect(302, '/Login');
			}
		} catch (e) {
			console.log('Error: ', e);
		}
	} else {
		throw redirect(302, '/Login');
	}
}
