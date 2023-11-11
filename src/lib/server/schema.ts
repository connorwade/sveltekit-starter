import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { sqliteTable, text, integer, uniqueIndex } from 'drizzle-orm/sqlite-core';

// export const countries = sqliteTable(
// 	'countries',
// 	{
// 		id: integer('id').primaryKey(),
// 		name: text('name')
// 	},
// 	(countries) => ({
// 		nameIdx: uniqueIndex('nameIdx').on(countries.name)
// 	})
// );

// export const cities = sqliteTable('cities', {
// 	id: integer('id').primaryKey(),
// 	name: text('name'),
// 	countryId: integer('country_id').references(() => countries.id)
// });

export const users = sqliteTable('users', {
	id: integer('id').primaryKey(),
	email: text('email').unique(),
	password: text('password'),
	createdAt: integer('created_at', { mode: 'timestamp' }),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
});

export type User = InferSelectModel<typeof users>;
export type InsertUser = InferInsertModel<typeof users>;
