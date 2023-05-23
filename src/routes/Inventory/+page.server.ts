import inventory from '$lib/inventory.json';

export async function load({ fetch }) {
	let url = '/api/read-inventory-data';
	let res = await fetch(url);
	let response = await res.json();
	return {
		data: response
	};
}

export const actions = {
	default: async ({ request }) => {
		try {
			const data = await request.json();
			const { name, quantity, description, price } = JSON.parse(data.get('inventoryItem') as any);
		} catch (e) {
			throw new Error(`${e}`);
		}
	}
};
