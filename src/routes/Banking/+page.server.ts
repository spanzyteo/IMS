import invoices from '$lib/invoices.json';
import { writeFileSync, readFileSync, existsSync } from 'fs';

export async function load({ fetch, locals }: any) {
	const { user, session } = await locals.auth.validateUser();
	// console.log('User ', user, '\n', 'Session: ', session);
	let filePath = `./src/lib/${user.userId}-invoice.json`;
	let content = [];
	let response = content;
	// Check if file exists
	if (existsSync(filePath)) {
		// If file exists, equate it to variable called "fileContent"
		const fileContent = readFileSync(filePath, 'utf-8');
		//Use .trim method on filecontent to check if it's empty, if it is,set response to empty arrat else parse fileContent as JSON to response
		if (fileContent.trim() === '') {
			content = [];
			response = content;
		} else {
			content = JSON.parse(fileContent);
			response = content;
		}
	} else {
		response = content;
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
