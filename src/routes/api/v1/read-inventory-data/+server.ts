import { readFileSync } from 'fs';
import { json } from '@sveltejs/kit';
import { User } from '../../../../hooks.server.js';
export async function GET({ url: { searchParams } }) {
	let user = await User.findOne({ _id: searchParams.get('id') });
	try {
		// let data = readFileSync(`./src/lib/inventory.json`, 'utf-8');
		// let res = JSON.parse(JSON.stringify(data));
		return json(user);
	} catch (error) {
		// If an error occurred, return an error response
		return {
			status: 500,
			body: { message: 'Error Getting data' }
		};
	}
}
