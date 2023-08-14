import type { Actions } from './$types';
import { api } from '../api';
import { fail } from '@sveltejs/kit';

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
		const task = {title: data.get('title'), assigned: data.get('assigned')}

		const response = await fetch(api.chores, {
			method: 'POST',
			body: JSON.stringify(task),
			headers: {'Content-Type': 'application/json;charset=UTF-8'}
		})

		if(response.status !== 201) { // CREATED
			return fail(response.status, {error: await response.json()})
		}

		return { success: true, created: await response.json() }
	},
} satisfies Actions;
