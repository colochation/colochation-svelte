import type { PageLoad } from './$types';
import { api } from './api';
import type { Guest } from './guest.type';

type GuestResponse = { name: string; when: string };

export const load = (async ({ fetch }) => {
	const chores = await fetch(api.chores);
	const groceries = await fetch(api.groceries);
	const guests = await fetch(api.guests).then((res) => res.json());
	const guestsParsed: Guest[] = guests.map((guest: GuestResponse) => {
		return { name: guest.name, when: new Date(guest.when) };
	});

	return {
		chores: await chores.json(),
		groceries: await groceries.json(),
		guests: guestsParsed.sort((A: Guest, B: Guest) => B.when.getDate() - A.when.getDate())
	};
}) as PageLoad;
