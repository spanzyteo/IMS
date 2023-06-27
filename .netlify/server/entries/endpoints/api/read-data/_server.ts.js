import { readFileSync } from "fs";
async function GET() {
  try {
    let data = readFileSync(`./src/lib/invoices.json`, "utf-8");
    let res = JSON.parse(data);
    return new Response(JSON.stringify(res));
  } catch (error) {
    return {
      status: 500,
      body: { message: "Error adding data" }
    };
  }
}
export {
  GET
};
