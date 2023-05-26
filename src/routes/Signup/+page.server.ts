import { fail, redirect } from '@sveltejs/kit';
import { auth } from '../../hooks.server';
import bcrypt from 'bcrypt';
// import type { RequestEvent } from '../$types';

export const actions = {
	signup: async ({ request, locals }) => {
		const data = await request.formData();
		const saltRounds = 10;
		const { email, password, name } = JSON.parse(data.get('user') as any);
		console.log('Email: ', email, '\n', 'User Name: ', name);

		// const username = form.get('username');
		// const password = form.get('password');

		// // check for empty values
		if (typeof email !== 'string' || typeof password !== 'string' || typeof name !== 'string') {
			return fail(400);
		}

		try {
			const user = await auth.createUser({
				primaryKey: {
					providerId: 'email',
					providerUserId: email,
					password
				},
				attributes: {
					email,
					password: bcrypt.hashSync(password, saltRounds),
					name
				}
			});
			console.log(password);
			const session = await auth.createSession(user.userId);
			locals.auth.setSession(session);
			if (session.userId) {
				// console.log(session.userId);
				throw redirect(302, '/');
			} else {
				return {
					message: 'Registration Failed'
				};
			}
		} catch {
			// username taken
			return fail(400);
		}
	}
};
