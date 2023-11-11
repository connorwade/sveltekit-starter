import * as logic from '$lib/server/logic';
import * as auth from '$lib/server/auth';
import { fail, type Actions, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();

		if (email && password) {
			const { user, isAuth } = auth.checkCredentials(email, password);
			if (user && isAuth) {
				auth.login(user, cookies);
				throw redirect(303, '/');
			} else {
				return fail(401, { errorMessage: 'Bad credentials' });
			}
		} else {
			return fail(400, { errorMessage: 'Missing email or password' });
		}
	}
};
