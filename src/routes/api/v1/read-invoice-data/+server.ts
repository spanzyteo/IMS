import { readFileSync } from 'fs';
import { json } from '@sveltejs/kit';
import { User } from '../../../../hooks.server.js';
export async function GET({ url: { searchParams }, locals }) {
	try {
		let { user, session } = await locals.auth.validateUser();
		console.log('User: ', user);
		let invoice = user?.invoices.find((inv: any) => inv.id === searchParams.get('inv'));
		if (invoice == undefined || invoice.length <= 0) {
			return json({ message: 'No Invoice Found' });
		} else {
			return json(invoice);
		}
	} catch (error) {
		// If an error occurred, return an error response
		return json({
			status: 500,
			message: 'An Error Occured'
		});
	}
}
