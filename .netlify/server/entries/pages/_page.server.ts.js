import { r as redirect, f as fail } from "../../chunks/index2.js";
import { auth } from "../../chunks/hooks.server.js";
const load = async ({ locals }) => {
  const { user, session } = await locals.auth.validateUser();
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
    await auth.invalidateSession(session.sessionId);
    locals.auth.setSession(null);
    if (session === null) {
      return {
        success: true,
        url: "/Login"
      };
    }
  }
};
export {
  actions,
  load
};
