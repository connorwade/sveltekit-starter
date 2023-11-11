import { redirect, type Handle } from '@sveltejs/kit';
import * as session from '$lib/server/session';
const unProtectedRoutes = ['/login', '/signup'];

export const handle: Handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get('session_id');

	if (!sessionId && !unProtectedRoutes.includes(event.url.pathname)) {
		throw redirect(303, '/login');
	}

	const sessionUser = session.getSession(Number(sessionId));

	if (sessionUser) {
		event.locals.user = sessionUser;
	}

	if (!event.locals.user?.isAuth && !unProtectedRoutes.includes(event.url.pathname)) {
		throw redirect(303, '/login');
	}

	return resolve(event);
};
