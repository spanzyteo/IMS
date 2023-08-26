import { r as redirect, f as fail } from "../../chunks/index2.js";
import { a as auth } from "../../chunks/hooks.server.js";
const load = async ({ locals }) => {
  const { user, session } = locals.auth.validateUser();
  if (session && session.userId) {
    return {
      user,
      session
    };
  } else {
    throw redirect(302, "/Login");
  }
};
const actions = {
  logout: async ({ locals }) => {
    const { session } = await locals.auth.validateUser();
    if (!session)
      return fail(401);
    try {
      await auth.invalidateSession(session.sessionId);
      locals.auth.setSession(null);
      return {
        success: true,
        url: "/Login"
      };
    } catch (e) {
      console.log(e);
      return fail(400, { message: "An Error Occured !.", success: false });
    }
  }
};
export {
  actions,
  load
};
