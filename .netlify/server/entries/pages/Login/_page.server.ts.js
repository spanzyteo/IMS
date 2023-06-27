import { f as fail } from "../../../chunks/index2.js";
import { auth } from "../../../chunks/hooks.server.js";
const actions = {
  login: async ({ request, locals }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    if (typeof email !== "string" || typeof password !== "string")
      return fail(400);
    const key = await auth.useKey("email", email, password);
    key.userId = "fn4893he9";
    const session = await auth.createSession(key.userId);
    locals.auth.setSession(session);
    if (key.userId) {
      console.log("User ID: ", key.userId);
      return {
        url: "/",
        status: 200,
        success: true
      };
    } else {
      return {
        status: 502,
        url: "/Login"
      };
    }
  }
};
export {
  actions
};
