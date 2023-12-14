import fs from 'fs';
export async function PUT({ request }) {
	const res = await request.json();
	// Test Data Source
	const newId = res.newId;
	let newBalance;
	let newPaid;
	const filePath = './src/lib/invoices.json'; // Provide the path to your JSON file
	const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

	// Find the index of the object with the matching ID in the array
	const itemIndex = jsonData.findIndex((item: any) => item.id === newId);

	// Update the balance value
	if (itemIndex !== -1) {
		newPaid = jsonData[itemIndex].paid + res.newBalance;
		newBalance = jsonData[itemIndex].balance - res.newBalance;
		jsonData[itemIndex].lastUpdatedAt = new Date().toLocaleString();
		jsonData[itemIndex].paid = newPaid;
		jsonData[itemIndex].balance = newBalance;
	}

	// Write the updated JSON back to the file
	fs.writeFileSync(filePath, JSON.stringify(jsonData));

	return new Response(jsonData[itemIndex].balance);
}
