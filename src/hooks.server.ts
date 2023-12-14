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

dotenv.config();
let uuidv4 = uuid();

async function connectToDB() {
	if (dev) {
		await mongoose
			/* There are two environment variables you can use, if you have mongodb installed on your system, use mongosh on your terminal and create a database called lucia-auth-users, else youd have to use the online version which would require an internet connection but would be easier to use.
			You can then use either the environment variable MONGO_URL_LOCAL or MONGO_URL_ONLINE in the development stage
			 */
			.connect(`${process.env.MONGO_URL_ONLINE}`)
			.then(() => console.log('Connected To Local Database.'))
			.catch((e) => {
				console.log(`Connection to Local Database Failed: ${e}`);
			});
	} else {
		await mongoose
			.connect(`${process.env.MONGO_URL}`)
			.then(() => console.log('Connected To Online Database.'))
			.catch((e) => {
				if (e instanceof Query) {
					console.log(`Connection to Online Database Failed: Network Error`);
				}
			});
	}
}
connectToDB();

interface Invoice {
	id: string;
	customer_name: string;
	items: { name: string; quantity: number; price: number }[];
}

interface Inventory {
	name: string;
	quantity: number;
	price: number;
	desc: string;
}
interface UserData {
	id: string;
	name: string;
	email: string;
	business_name: string;
	invoices: Invoice[];
	inventory: Inventory[];
	// Add other properties and their types as needed
}

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
			business_name: userData.business_name,
			invoices: userData.invoices,
			inventory: userData.inventory
		};
	}
});

export type Auth = typeof auth;
async function luciaHandle({ event, resolve }: any) {
	event.locals.auth = auth.handleRequest(event);
	return await resolve(event);
}

export const handle: Handle = sequence(luciaHandle, createTRPCHandle({ router, createContext }));
