import * as logic from '$lib/server/logic';
import { fail, type Actions, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();

		if (email && password) {
			try {
				await logic.createNewUser(email, password);
				throw redirect(303, '/login');
			} catch (err) {
				return fail(400, { errorMessage: 'Internal Server Error' });
			}
		} else {
			return fail(400, { errorMessage: 'Missing email or password' });
		}
	}
};
