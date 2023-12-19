import { redirect, type RequestEvent } from '@sveltejs/kit';

export async function load({ fetch, locals }: RequestEvent) {
	const { user, session } = await locals.auth.validateUser();

	if (user != null) {
		let invoices = await fetch('/api/v1/read-invoices');
		let inv = await invoices.json();
		// console.log(inv);
		try {
			if (user && session) {
				return {
					invoice: inv, // return the invoice if found
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
