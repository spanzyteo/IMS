import { r as redirect } from "../../../../chunks/index2.js";
import { readFileSync } from "fs";
async function load({
  fetch,
  params,
  locals
}) {
  const { user, session } = await locals.auth.validateUser();
  if (user != null) {
    const invoiceId = params.invoiceId;
    const id = readFileSync(`./src/lib/${user.userId}-invoice.json`, "utf-8");
    const invoices = JSON.parse(id);
    const invoice = invoices.find((inv) => inv.id === invoiceId);
    if (user && session) {
      return {
        invoice: invoice || null,
        // return the invoice if found, or null if not found
        name: user.business_name
      };
    } else {
      throw redirect(302, "/Login");
    }
  } else {
    throw redirect(302, "/Login");
  }
}
export {
  load
};
