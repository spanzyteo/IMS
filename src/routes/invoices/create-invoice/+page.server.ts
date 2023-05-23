import invoices from '$lib/invoices.json';
import { redirect } from '@sveltejs/kit';
import fs from 'fs';

export const actions = {
	save: async ({ request }) => {
		try {
			const data = await request.formData();
			const customer_name = data.get('name');
			const id = data.get('id');
			const date = data.get('date');
			const balance = data.get('bal');
			const paid = data.get('paid');
			const total = data.get('total');
			const itemName = data.getAll('items[name][]');
			const itemQuan = data.getAll('items[quantity][]');
			const itemPrice = data.getAll('items[price][]');
			const items = itemName.map((name, index) => ({
				name,
				quantity: parseFloat(itemQuan[index]),
				price: parseFloat(itemPrice[index])
			}));
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
			let inv = [...invoices, invoice];
			await fs.writeFile('./src/lib/invoices.json', JSON.stringify(inv), 'utf-8', (err) => {
				if (err) {
					console.error(err);
					return { success: false };
				}
				console.log('Invoice saved successfully');
				return { success: true };
			});
			return { success: true, message: 'Invoice Saved Successfully', url: `/invoices/${id}` };
		} catch (error) {
			console.error(error);
			return { success: false, message: 'Invoice Not saved' };
		}
	},

	saveSimple: async ({ request }) => {
		try {
			const data = await request.formData();
			const { id, customer_name, date, balance, paid, total, items } = JSON.parse(
				data.get('invoice') as any
			);

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
			let inv = [...invoices, invoice];
			await fs.writeFile('./src/lib/invoices.json', JSON.stringify(inv), 'utf-8', (err) => {
				if (err) {
					console.error(err);
					throw redirect(307, `/invoices/${id}`);
					return { success: false };
				}
				console.log('Invoice saved successfully');
				return { success: true, message: 'Invoice saved successfully' };
			});
		} catch (error) {
			console.error(error);
			return { success: false, message: 'Invoice Not saved' };
		}
	}
};
