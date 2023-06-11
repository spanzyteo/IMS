import type { Actions } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '../hooks.server';
import type { PageServerLoad } from './$types';
import { isLoggedIn } from '../stores/stores';

import { ensureLogin } from '$lib/authorise';
export const load: PageServerLoad = async ({ locals }) => {
	const { user, session } = await locals.auth.validateUser();
	// console.log(user, session);
	if (session && session.userId) {
		return {
			user,
			session
		};
	} else {
		throw redirect(302, '/Login');
	}
};

export const actions: Actions = {
	logout: async ({ locals }) => {
		const { session } = await locals.auth.validateUser();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove cookie
		if (session === null) {
			return {
				success: true,
				url: '/Login'
			};
		}
	}
};
