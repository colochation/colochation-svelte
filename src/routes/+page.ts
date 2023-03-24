import type { PageLoad } from './$types';
import { api } from './api';

export const load = (async ({ fetch }) => {
	const res = await fetch(api.chores);
	const chores = await res.json();

	return { chores };
}) as PageLoad;
