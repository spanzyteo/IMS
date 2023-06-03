import invoices from '$lib/invoices.json';

export async function load({ fetch, locals }: any) {
	const { user, session } = await locals.auth.validateUser();
	let url = '/api/read-data';
	let res = await fetch(url);
	let response = await res.json();
	if (session && user) {
		return {
			session,
			user,
			response
		};
	} else {
		return {
			response
		};
	}
}
