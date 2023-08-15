import { env } from '$env/dynamic/public';
import type { housework } from './housework.type';
import type { grocerylistItem } from './grocery-list.type';
import type { Guest } from './guest.type';

type GuestResponse = { name: string; when: string };

const base = env.PUBLIC_API_BASE_URL;
export const api = {
	base: base,
	chores: base + '/chores',
	chores_to_do: base + '/chores?todo=true',
	groceries: base + '/groceries',
	guests: base + '/guests'
};


export async function getChores(): Promise<housework[]> {
	const response = await fetch(api.chores_to_do);
	return await response.json();
}

export async function getGroceries(): Promise<grocerylistItem[]> {
	const response = await fetch(api.groceries);
	return await response.json();
}

export async function getGuests(): Promise<Guest[]> {
	const guests = await fetch(api.guests).then((res) => res.json());
	return guests
		.map((guest: GuestResponse) => ({ name: guest.name, when: new Date(guest.when)}))
		.sort((A: Guest, B: Guest) => A.when.getDate() - B.when.getDate());
}
