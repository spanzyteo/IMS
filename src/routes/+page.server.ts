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
