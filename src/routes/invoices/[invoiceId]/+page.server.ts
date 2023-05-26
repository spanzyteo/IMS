import { redirect, type RequestEvent } from '@sveltejs/kit';
import invoices from '$lib/invoices.json';
import { readFileSync, writeFileSync } from 'fs';

export interface Category {
	id?: string;
	customer_name?: string;
	items?: { name: string; quantity: number; price: number }[];
}

export async function load({
	fetch,
	params,
	locals
}: RequestEvent): Promise<{ invoice: Category | null }> {
	const { user, session } = await locals.auth.validateUser();
	const invoiceId = params.invoiceId as string; // get the invoice id from the URL parameter
	const invoice = invoices.find((inv: Category) => inv.id === invoiceId); // find the invoice in the JSON file by id
	if (user && session) {
		return {
			invoice: invoice || null // return the invoice if found, or null if not found
		};
	} else {
		throw redirect(302, '/Login');
	}
}
