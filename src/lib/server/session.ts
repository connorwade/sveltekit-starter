export let store = new Map<
	`ID:${number}`,
	{ id: number; email: string; isAuth: boolean; createdAt: Date }
>();

export function createNewSession(id: number, email: string) {
	store.set(`ID:${id}`, {
		id,
		email,
		isAuth: true,
		createdAt: new Date()
	});
}

export function removeSession(id: number) {
	store.delete(`ID:${id}`);
}

export function getSession(id: number) {
	return store.get(`ID:${id}`);
}
