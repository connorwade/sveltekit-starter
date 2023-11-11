import { db } from './db';
import { users } from './schema';
import { eq, sql } from 'drizzle-orm';

export function getUsers() {
	return db.select().from(users).all();
}

export function getUserById(id: number) {
	return db.select().from(users).where(eq(users.id, id));
}

export function getUserByEmail() {
	return db
		.select()
		.from(users)
		.where(eq(users.email, sql.placeholder('email')))
		.prepare();
}

export function createNewUser(email: string, password: string) {
	return db
		.insert(users)
		.values({ email, password })
		.returning({ id: users.id, email: users.email });
}
