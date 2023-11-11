import type { Cookies } from '@sveltejs/kit';
import * as logic from './logic';
import * as session from './session';
import type { User } from './schema';

export function checkCredentials(email: string, password: string) {
	const user = logic.getUserByEmail().get({ email });
	if (user && passwordIsValid(user, password)) {
		return { isAuth: true, user };
	} else {
		return { isAuth: false, user };
	}
}

export function passwordIsValid(user: User, password: string) {
	return user.password === password;
}

export function login(user: User, cookies: Cookies) {
	cookies.set('session_id', user.id.toString());
	session.createNewSession(user.id, user.email!);
}

export async function signUp(email: string, password: string) {
	const newUser = await logic.createNewUser(email, password);
	return newUser[0];
}
