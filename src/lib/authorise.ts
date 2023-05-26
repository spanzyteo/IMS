import { redirect, fail } from '@sveltejs/kit';
import { isLoggedIn } from '../stores/stores';

export async function ensureLogin(page) {
	console.log(page.session);
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
