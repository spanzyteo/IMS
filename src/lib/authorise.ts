import { redirect, fail } from '@sveltejs/kit';

export async function ensureLogin(page) {
	try {
		if (page != null) {
			console.log('User Is Logged In');
		} else {
			console.log('User is Logged Out');
			throw redirect(302, '/Login');
		}
	} catch {
		return fail(500);
	}
}
