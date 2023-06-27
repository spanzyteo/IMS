import { f as fail } from "../../../chunks/index2.js";
import { auth } from "../../../chunks/hooks.server.js";
import bcrypt from "bcrypt";
const actions = {
  signup: async ({ request, locals }) => {
    const data = await request.formData();
    const saltRounds = 10;
    const { email, password, name, business } = JSON.parse(data.get("user"));
    if (typeof email !== "string" || typeof password !== "string" || typeof business !== "string" || typeof name !== "string") {
      return fail(400);
    }
    try {
      const user = await auth.createUser({
        primaryKey: {
          providerId: "email",
          providerUserId: email,
          password
        },
        attributes: {
          email,
          password: bcrypt.hashSync(password, saltRounds),
          name,
          business_name: business
        }
      });
      const session = await auth.createSession(user.userId);
      locals.auth.setSession(session);
      if (session.userId) {
        return {
          session,
          success: true,
          url: "/",
          message: "Registration Successful. Redirecting..."
        };
      } else {
        return {
          success: false,
          message: "Registration Failed"
        };
      }
    } catch {
      return fail(400);
    }
  }
};
export {
  actions
};
