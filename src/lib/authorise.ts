import { redirect, fail } from '@sveltejs/kit';

export async function ensureLogin(page: { session: any }) {
	try {
		if (page.session.userId) {
			console.log('User Is Logged In');
		} else {
			console.log('User is Logged Out');
			throw redirect(302, '/Login');
		}
	} catch {
		return fail(500);
	}
}
