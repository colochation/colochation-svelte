import type { PageLoad } from './$types';
import { api } from '../api';

export const load = (async ({ fetch }) => {
	const chores = await fetch(api.chores);
	return {
		chores: await chores.json()
	};
}) as PageLoad;
