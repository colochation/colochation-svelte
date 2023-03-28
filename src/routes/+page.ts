import type { PageLoad } from './$types';
import { api } from './api';

export const load = (async ({ fetch }) => {
	const resChores = await fetch(api.chores);

	const resGroceryList = await fetch(api.groceries);
	return { chores: await resChores.json(), groceries: await resGroceryList.json() };
}) as PageLoad;
