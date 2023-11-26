import type { Handle } from '@sveltejs/kit';
import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';
import adapter from '@lucia-auth/adapter-mongoose';
import mongoose, { Query } from 'mongoose';
import { dev } from '$app/environment';
import * as dotenv from 'dotenv';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { createTRPCHandle } from 'trpc-sveltekit';
import { sequence } from '@sveltejs/kit/hooks';
import { v4 as uuid } from 'uuid';

let uuidv4 = uuid();
let name = `User-${uuidv4}`;
let name1 = `User-${uuidv4}`;
let name2 = `User-${uuidv4}`;
let name3 = `User-${uuidv4}`;
let name4 = `User-${uuidv4}`;
let name5 = `User-${uuidv4}`;
let name6 = `User-${uuidv4}`;
console.log(name, name1, name2, name3, name4, name5, name6);
dotenv.config();

// async function connectToDB() {
// 	if (dev) {
// 		await mongoose
// 			.connect(`${process.env.MONGO_URL}`)
// 			.then(() => console.log('Connected To Local Database.'))
// 			.catch((e) => {
// 				console.log(`Connection to Local Database Failed: ${e}`);
// 			});
// 	} else {
// 		await mongoose
// 			.connect(`${process.env.DOTENV_KEY}`)
// 			.then(() => console.log('Connected To Online Database.'))
// 			.catch((e) => {
// 				if (e instanceof Query) {
// 					console.log(`Connection to Online Database Failed: Network Error`);
// 				}
// 			});
// 	}
// }
async function connectToDB() {
	await mongoose
		.connect(`${process.env.DOTENV_KEY}`)
		.then(() => console.log('Connected To Online Database.'))
		.catch((e) => {
			if (e instanceof Query) {
				console.log(`Connection to Online Database Failed: Network Error`);
			}
		});
}
connectToDB();

const userSchema = new mongoose.Schema(
	{
		name: String,
		password: String,
		email: String,
		business_name: String,
		inventory: Array,
		invoices: Array,
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
			email: userData.email,
			business_name: userData.business_name
		};
	}
});

export type Auth = typeof auth;
async function luciaHandle({ event, resolve }: any) {
	event.locals.auth = auth.handleRequest(event);
	return await resolve(event);
}

export const handle: Handle = sequence(luciaHandle, createTRPCHandle({ router, createContext }));
