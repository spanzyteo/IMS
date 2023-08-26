import type { Actions } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '../hooks.server';
import type { PageServerLoad } from './$types';
// import { isLoggedIn } from '../stores/stores';
// import { ensureLogin } from '$lib/authorise';
// import { userSession } from '$lib/trpc/router';

export const load: PageServerLoad = async ({ locals }) => {
	const { user, session } = locals.auth.validateUser();
	console.log(user, session);
	if (!session || !session.userId) {
		throw redirect(302, '/Login');
	}

	return {
		user,
		session
	};
};

export const actions: Actions = {
	logout: async ({ locals }) => {
		const { session } = await locals.auth.validateUser();
		if (!session) return fail(401);
		try {
			await auth.invalidateSession(session.sessionId); // invalidate session
			locals.auth.setSession(null); // remove cookie
			return {
				success: true,
				url: '/Login'
			};
		} catch (e) {
			console.log(e);
			return fail(400, { message: 'An Error Occured !.', success: false });
		}
	}
};
