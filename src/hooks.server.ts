import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';
import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';
import adapter from '@lucia-auth/adapter-mongoose';
import mongoose from 'mongoose';
import { dev } from '$app/environment';
import { isLoggedIn } from './stores/stores';
import * as dotenv from 'dotenv';
dotenv.config();
async function connectToDB() {
	await mongoose
		.connect(`${process.env.MONGO_URI}`)
		.then((res) => console.log('Connected To Database.'))
		.catch((e) => {
			console.log(`Connection to Database Failed.`);
		});
}
connectToDB();

const userSchema = new mongoose.Schema(
	{
		name: String,
		password: String,
		email: String,
		_id: {
			type: String
		}
		// here you can add custom fields for your user
		// e.g. name, email, username, roles, etc.
	},
	{
		_id: false
	}
);

export const Session = mongoose.model(
	'auth_session',
	new mongoose.Schema(
		{
			_id: {
				type: String
			},
			user_id: {
				type: String,
				required: true
			},
			active_expires: {
				type: Number,
				required: true
			},
			idle_expires: {
				type: Number,
				required: true
			}
		},
		{ _id: false }
	)
);
export const Key = mongoose.model(
	'auth_key',
	new mongoose.Schema(
		{
			_id: {
				type: String
			},
			user_id: {
				type: String,
				required: true
			},
			hashed_password: String,
			primary_key: {
				type: Boolean,
				required: true
			},
			expires: Number
		},
		{ _id: false }
	)
);
export const User = mongoose.model('auth_user', userSchema);
export const auth = lucia({
	adapter: adapter(mongoose),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	transformDatabaseUser: (userData) => {
		return {
			userId: userData.id,
			username: userData.name,
			email: userData.email
		};
	}
});

export type Auth = typeof auth;
let validator;
export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	return await resolve(event);
};
