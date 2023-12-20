import invoices from '$lib/invoices.json';
import { redirect } from '@sveltejs/kit';
import fs from 'fs';
import type { PageServerLoad } from './$types.js';
import { dev } from '$app/environment';
import { User } from '../../../hooks.server.js';

export const load: PageServerLoad = async ({ locals }) => {
	const { user, session } = await locals.auth.validateUser();
	let inventory;
	if (session && user) {
		return {
			inventory,
			session,
			user
		};
	} else {
		throw redirect(302, '/Login');
	}
};

export const actions = {
	saveSimple: async ({ request, locals }) => {
		const data = await request.formData();
		const { user, session } = await locals.auth.validateUser();
		const { id, customer_name, date, balance, paid, total, items, userId } = JSON.parse(
			data.get('invoice') as any
		);
		let message = '';
		let url = '';
		const invoice = {
			lastUpdatedAt: new Date().toLocaleString(),
			customer_name,
			id,
			date,
			items,
			balance: parseFloat(balance),
			paid: parseFloat(paid),
			total: parseFloat(total)
		};
		try {
			await User.findById(user.userId).updateMany({}, { $push: { invoices: invoice } });
			console.log('Invoice saved successfully');
			message = 'Invoice Saved Successfully';
			url = `/invoices/${id}`;
			return {
				success: true,
				message,
				url
			};
		} catch (error) {
			console.log('Error: ', error);
			message = 'Invoice Not Saved';
			return { message };
		}
	}
};
