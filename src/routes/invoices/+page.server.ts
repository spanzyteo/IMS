import type { RequestEvent } from '@sveltejs/kit';
import invoices from '$lib/invoices.json';
import type { Category } from './[invoiceId]/+page.server';

export async function load({ fetch, params }: RequestEvent): Promise<{ invoice: Category[] }> {
	return {
		invoice: invoices as Category[] // return the invoice if found, or null if not found
	};
}
