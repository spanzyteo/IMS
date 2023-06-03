import { redirect, fail } from '@sveltejs/kit';

export async function ensureLogin(page: { session: any }) {
	try {
		if (!page.session) {
			// console.log(page.session);
			throw redirect(302, '/Login');
		} else {
			console.log('User is Logged in');
		}
	} catch {
		return fail(500);
	}
}
