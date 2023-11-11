import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import Database from 'better-sqlite3';

const sqlite = new Database(':memory:');
export const db = drizzle(sqlite);

// We have to migrate in code for temporary :memory: use
migrate(db, { migrationsFolder: 'drizzle' });
