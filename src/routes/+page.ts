import type { PageLoad } from './$types';
import * as api from './api';
import type { Guest } from './guest.type';

type GuestResponse = { name: string; when: string };

export const load = (async ({ fetch }) => {
	return {
		chores: await api.getChores(),
		groceries: await api.getGroceries(),
		guests: await api.getGuests()
	};
}) as PageLoad;
