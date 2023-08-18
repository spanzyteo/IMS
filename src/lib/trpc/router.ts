import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
// import delay from 'delay';
import { auth } from '../../hooks.server';
import { LuciaError } from 'lucia-auth';
import { fail } from '@sveltejs/kit';

export const t = initTRPC.context<Context>().create();

interface UserData {
	user: Object;
	session: Object;
}
export let userSession = { user: {}, session: {} };
interface LoginInput {
	email: string;
	password: string;
}

interface LoginOutput {
	url?: string | URL;
	status: number;
	message?: string;
	success?: boolean;
}

export const router = t.router({
	greeting: t.procedure.query(async () => {
		console.log(`Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`);
		// await delay(500); // 👈 simulate an expensive operation
		return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
	}),
	login: t.procedure
		.input((v) => v as LoginInput)
		.output((v) => v as LoginOutput)
		.query(async ({ input, ctx }) => {
			let key;
			let session;
			try {
				key = await auth.useKey('email', input.email, input.password);
				session = await auth.createSession(key.userId);
				ctx.auth.setSession(session);
				userSession = (await ctx.auth.validateUser()) as UserData;
				// console.log('User: ', await ctx.auth.validateUser());
				// console.log('Session Set:', await auth.getSession(session.sessionId));
				// console.log('User Key: ', key, 'Session Key: ', session);
			} catch (e) {
				if (e instanceof LuciaError) {
					console.log('Error: ', e.message);
					let errmessage: any = '';
					errmessage = 'Email Or Password Incorrect';
					return fail(400, { message: errmessage });
				}
			}
			if (!key?.userId) {
				return fail(400, { message: 'Invalid user identity specified.' });
			} else {
				return {
					url: '/',
					status: 200,
					success: true
				};
			}
			// console.log('User ID: ', key.userId);
		})
});

export type Router = typeof router;
