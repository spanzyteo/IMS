import { redirect, type RequestEvent } from '@sveltejs/kit';

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
	console.log(user);
	const details = await fetch(`/api/v1/read-invoice-data?inv=${params.invoiceId}`);
	if (user != null) {
		const invoice = await details.json();
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
