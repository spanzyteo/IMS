import { readFileSync } from 'fs';
export async function GET() {
	try {
		let data = readFileSync(`./src/lib/inventory.json`, 'utf-8');
		let res = JSON.parse(JSON.stringify(data));
		return new Response(res);
	} catch (error) {
		// If an error occurred, return an error response
		return {
			status: 500,
			body: { message: 'Error adding data' }
		};
	}
}
