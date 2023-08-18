import { r as redirect } from "../../../chunks/index2.js";
import { existsSync, readFileSync } from "fs";
async function load({ fetch, params, locals }) {
  const { user, session } = await locals.auth.validateUser();
  if (user != null) {
    let inv = "";
    let invoices = [];
    let filepath = `./src/lib/${user.userId}-invoice.json`;
    try {
      if (existsSync(filepath)) {
        inv = readFileSync(`./src/lib/${user.userId}-invoice.json`, "utf-8");
        if (inv.trim() === "") {
          invoices = [];
        } else {
          invoices = JSON.parse(inv);
        }
      } else {
        inv = "";
        invoices = [];
      }
      if (user && session) {
        return {
          invoice: invoices,
          // return the invoice if found, or null if not found
          user,
          session
        };
      } else {
        throw redirect(302, "/Login");
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  } else {
    throw redirect(302, "/Login");
  }
}
export {
  load
};
