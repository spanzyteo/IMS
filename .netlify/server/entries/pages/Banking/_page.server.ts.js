import { existsSync, readFileSync } from "fs";
import { r as redirect } from "../../../chunks/index2.js";
async function load({ fetch, locals }) {
  const { user, session } = await locals.auth.validateUser();
  if (user != null) {
    let filePath = `./src/lib/${user.userId}-invoice.json`;
    let content = [];
    let response = content;
    if (existsSync(filePath)) {
      const fileContent = readFileSync(filePath, "utf-8");
      if (fileContent.trim() === "") {
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
  } else {
    throw redirect(302, "/Login");
  }
}
export {
  load
};
