import type { Actions } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '../../hooks.server';
import type { PageServerLoad } from '../$types';
import { isLoggedIn } from '../../stores/stores';

export const load: PageServerLoad = async ({ locals }) => {
	const { user, session } = await locals.auth.validateUser();
	// console.log(user, session);
	if (session && session.userId && user && user.userId) {
		throw redirect(302, '/');
	}
};

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const data = await request.formData();
		const { email, password } = JSON.parse(data.get('user') as any);
		// check for empty values
		if (typeof email !== 'string' || typeof password !== 'string') return fail(400);
		try {
			const key = await auth.useKey('email', email, password);
			const session = await auth.createSession(key.userId);
			// console.log('Key: ', key, 'Session: ', session);
			locals.auth.setSession(session);
			if (key.userId && session.userId) {
				console.log(key.userId, session.userId);
				throw redirect(302, '/');
			}
		} catch {
			// invalid username/password
			return fail(400);
		}
	}
};
