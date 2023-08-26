import { r as redirect, f as fail } from "../../../chunks/index2.js";
import { a as auth, L as LuciaError } from "../../../chunks/hooks.server.js";
import { initTRPC } from "@trpc/server";
initTRPC.context().create();
const load = async ({ locals }) => {
  const { user, session } = await locals.auth.validateUser();
  if (session && session.userId && user && user.userId) {
    throw redirect(302, "/");
  }
};
const actions = {
  login: async ({ request, locals }) => {
    const data = await request.formData();
    const { email, password } = JSON.parse(data.get("info"));
    if (typeof email !== "string" || typeof password !== "string")
      return fail(400);
    let key;
    let session;
    try {
      key = await auth.useKey("email", email, password);
      session = await auth.createSession(key.userId);
      locals.auth.setSession(session);
    } catch (e) {
      if (e instanceof LuciaError) {
        console.log("Error: ", e.message);
        let errmessage = "";
        errmessage = "Email Or Password Incorrect";
        return fail(400, { message: errmessage });
      }
    }
    if (key?.userId) {
      return {
        url: "/",
        status: 200,
        success: true
      };
    }
  }
};
export {
  actions,
  load
};
