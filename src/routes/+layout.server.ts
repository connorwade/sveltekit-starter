import type { LayoutServerLoad } from './$types';
import * as db from '$lib/server/db';

export const load = (async ({ locals }) => {
	let signedIn = locals.user?.isAuth;
	signedIn ??= false;

	return {
		signedIn
	};
}) satisfies LayoutServerLoad;
