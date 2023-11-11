// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				id: number;
				email: string;
				isAuth: boolean;
				createdAt: Date;
			} | null;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
