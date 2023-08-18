import { redirect, fail } from '@sveltejs/kit';

export async function ensureLogin(page) {
	if (page) {
		console.log('User Is Logged In');
	} else {
		console.log("User Is'nt Logged In");
	}
}
