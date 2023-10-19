import type { Actions } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '../../hooks.server';
import type { PageServerLoad } from '../$types';
import { LuciaError } from 'lucia-auth';
// import { initTRPC } from '@trpc/server';
// import { userSession } from '$lib/trpc/router';

// const t = initTRPC.context<Context>().create();

export const load: PageServerLoad = async ({ locals }) => {
	const { user, session } = await locals.auth.validateUser();
	if (session) {
		throw redirect(302, '/');
	}

	return {
		user,
		session
	};
};

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const data = await request.formData();
		const { email, password } = JSON.parse(data.get('info') as any);
		// check for empty values
		if (typeof email !== 'string' || typeof password !== 'string') return fail(400);
		// console.log('Key: ', key, 'Session: ', session);
		let key;
		let session;

		try {
			key = await auth.useKey('email', email, password);
			session = await auth.createSession(key.userId);
			locals.auth.setSession(session);
		} catch (e) {
			if (e instanceof LuciaError) {
				console.log('Error: ', e.message);
				let errmessage: any = '';
				errmessage = 'Email Or Password Incorrect';
				return fail(400, { message: errmessage });
			}
		}
		if (key?.userId) {
			// console.log('User ID: ', key.userId);
			return {
				url: '/',
				status: 200,
				success: true
			};
		}
	}
};
