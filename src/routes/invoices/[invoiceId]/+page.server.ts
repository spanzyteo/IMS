import { redirect, type RequestEvent } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { readFileSync } from 'fs';

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
	if (user != null) {
		const invoiceId = params.invoiceId as string; // get the invoice id from the URL parameter
		let id = user.findOne;
		// const invoices = JSON.parse(id);
		const invoice = invoices.find((inv: Category) => inv.id === invoiceId); // find the invoice in the JSON file by id
		if (user && session) {
			return {
				invoice: invoice || null, // return the invoice if found, or null if not found
				name: user.business_name
			};
		} else {
			throw redirect(302, '/Login');
		}
	} else {
		throw redirect(302, '/Login');
	}
}
