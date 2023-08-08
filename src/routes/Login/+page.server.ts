import type { Actions } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '../../hooks.server';
import type { PageServerLoad } from '../$types';
import { LuciaError } from 'lucia-auth';
import { initTRPC } from '@trpc/server';
import { userSession } from '$lib/trpc/router';
import { createContext, type Context } from '$lib/trpc/context';

const t = initTRPC.context<Context>().create();

export const load: PageServerLoad = async (context) => {
	// console.log(context);
	const ctx = await createContext(context);
	// console.log('ctx in load function:', await ctx.auth.validateUser());
	// console.log(userSession);
	// const locals = event.locals.auth;
	// const { user, session } = await locals.validateUser();
	// console.log(await locals.validateUser());
	// if (session && session.userId && user && user.userId) {
	// 	throw redirect(302, '/');
	// }
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
