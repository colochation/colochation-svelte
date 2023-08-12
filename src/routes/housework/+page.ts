import type { PageLoad } from './$types';
import { api } from '../api';
import type { housework } from '../housework.type';

export const load = (async ({ fetch }) => {
	const chores = await fetch(api.chores);
	type responseType = Promise<{title: string, isToDo: boolean, assigned: string}>;
	return {
		chores: await chores.json()
	};
}) as PageLoad;
