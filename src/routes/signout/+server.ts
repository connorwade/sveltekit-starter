import type { RequestHandler } from './$types';
import * as session from '$lib/server/session';
import { redirect } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ cookies, locals }) => {
	cookies.delete('session_id', { path: '/' });
	session.removeSession(locals.user!.id);

	throw redirect(303, '/login');
};
