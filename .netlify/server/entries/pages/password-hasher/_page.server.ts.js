import bcrypt from "bcrypt";
const actions = {
  hashit: async ({ request }) => {
    let data = await request.formData();
    let password = data.get("pass");
    let saltRounds = 10;
    let hashed = bcrypt.hashSync(password, saltRounds);
    let compared = bcrypt.compareSync(password, hashed);
    return {
      compared,
      hashed
    };
  }
};
export {
  actions
};
