import fs from "fs";
async function PUT({ request }) {
  const res = await request.json();
  const newId = res.newId;
  let newBalance;
  let newPaid;
  const filePath = "./src/lib/invoices.json";
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const itemIndex = jsonData.findIndex((item) => item.id === newId);
  if (itemIndex !== -1) {
    newPaid = jsonData[itemIndex].paid + res.newBalance;
    newBalance = jsonData[itemIndex].balance - res.newBalance;
    jsonData[itemIndex].lastUpdatedAt = (/* @__PURE__ */ new Date()).toLocaleString();
    jsonData[itemIndex].paid = newPaid;
    jsonData[itemIndex].balance = newBalance;
  }
  fs.writeFileSync(filePath, JSON.stringify(jsonData));
  return new Response(jsonData[itemIndex].balance);
}
export {
  PUT
};
