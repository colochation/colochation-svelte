import type { PageLoad } from './$types';
import { api } from '../api';
import type { housework } from '../housework.type';

export const load = (async ({ fetch }) => {
	const response = await fetch(api.chores);
	return {
		chores: (await response.json()).filter((t: housework) => t.toDo === true)
	};
}) as PageLoad;
