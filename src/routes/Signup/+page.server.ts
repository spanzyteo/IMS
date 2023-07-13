import { fail, redirect } from '@sveltejs/kit';
import { auth } from '../../hooks.server';
import { LuciaError } from 'lucia-auth';

import bcrypt from 'bcrypt';
// import type { RequestEvent } from '../$types';

export const load = async ({ locals }) => {
	const { user, session }: any = await locals.auth.validateUser();

	if (user) {
		if (user.userId) {
			let message =
				'User Already Logged In. If you want to create a new account, kindly logout of this current account. Redirecting to home...';
			console.log(message);
			return {
				message,
				url: '/'
			};
		}
	} else {
		console.log('No User Logged In');
		return {
			message: 'No User Logged In'
		};
	}
};

export const actions = {
	signup: async ({ request, locals }) => {
		const data = await request.formData();
		const saltRounds = 10;
		const { email, password, name, business } = JSON.parse(data.get('user') as any);

		// const username = form.get('username');
		// const password = form.get('password');

		// // check for empty values
		if (
			typeof email !== 'string' ||
			typeof password !== 'string' ||
			typeof business !== 'string' ||
			typeof name !== 'string'
		) {
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
					name,
					business_name: business
				}
			});
			// console.log(password);
			const session = await auth.createSession(user.userId);
			locals.auth.setSession(session);
			if (session.userId) {
				return {
					session,
					success: true,
					url: '/',
					message: 'Registration Successful. Redirecting...'
				};
			} else {
				return {
					success: false,
					message: 'Registration Failed'
				};
			}
		} catch (e) {
			if (e instanceof LuciaError) {
				console.log(e.message);
				return {
					message: `User with name: ${name} and email: ${email} Already exists.`,
					status: 400
				};
			}
		}
	}
};
