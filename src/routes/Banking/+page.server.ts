import invoices from '$lib/invoices.json';
import { writeFileSync, readFileSync, existsSync } from 'fs';

export async function load({ fetch, locals }: any) {
	const { user, session } = await locals.auth.validateUser();
	let filePath = `./src/lib/${user.userId}.json`;
	let response;
	if (existsSync(filePath)) {
		const fileContent = readFileSync(filePath, 'utf-8');
		if (fileContent.trim() === '') {
			response = [];
		} else {
			response = JSON.parse(fileContent);
		}
	} else {
		response = [];
	}
	if (session && user) {
		return {
			session,
			user,
			response
		};
	} else {
		return {
			response
		};
	}
}
