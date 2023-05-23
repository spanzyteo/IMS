import auth from '$lib/auth.json';

export async function load({ fetch, params }) {
	let authorisation_c = auth;
	return {
		auth_c: authorisation_c
	};
}
