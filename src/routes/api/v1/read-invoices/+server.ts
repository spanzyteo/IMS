import { json } from '@sveltejs/kit';

export async function GET({ url: { searchParams }, locals }) {
	try {
		let { user, session } = await locals.auth.validateUser();
		let invoice = user?.invoices;
		if (invoice == undefined) {
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
