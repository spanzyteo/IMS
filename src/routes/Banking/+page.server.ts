import invoices from '$lib/invoices.json';

export async function load({ fetch }) {
	let url = '/api/read-data';
	let res = await fetch(url);
	let response = await res.json();
	return {
		response: response
	};
}
