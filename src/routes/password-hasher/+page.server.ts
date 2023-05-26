import type { Actions } from '../$types';
import bcrypt from 'bcrypt';
export const actions: Actions = {
	hashit: async ({ request }) => {
		let data = await request.formData();
		let password = data.get('pass');
		let saltRounds = 10;
		let hashed = bcrypt.hashSync(password, saltRounds);
		let compared = bcrypt.compareSync(password, hashed);
		return {
			compared,
			hashed
		};
	}
};
