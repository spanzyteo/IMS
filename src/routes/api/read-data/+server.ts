import { readFileSync } from 'fs';
export async function GET() {
	try {
		let data = readFileSync(`./src/lib/invoices.json`, 'utf-8');
		let res = JSON.parse(data);
		return new Response(JSON.stringify(res));
	} catch (error) {
		// If an error occurred, return an error response
		return {
			status: 500,
			body: { message: 'Error adding data' }
		};
	}
}
