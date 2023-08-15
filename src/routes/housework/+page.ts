import type { PageLoad } from './$types';
import * as api from '../api';
import type { housework } from '../housework.type';

export const load = (async ({ fetch }) => {
	return {
		chores: await api.getChores()
	};
}) as PageLoad;
