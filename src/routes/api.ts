import { env } from '$env/dynamic/public';

const base = env.PUBLIC_API_BASE_URL;
export const api = {
	base: base,
	chores: base + '/chores',
	groceries: base + '/groceries',
	guests: base + '/guests'
};
