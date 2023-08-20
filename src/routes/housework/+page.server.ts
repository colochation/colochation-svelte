import type { Actions } from './$types';
import { api } from '../api';
import { fail } from '@sveltejs/kit';
import type { housework } from '../housework.type';

export const actions = {
    create: async ({ cookies, request }) => {
		const data = await request.formData();
		const task: Partial<housework> = { title: data.get('title')?.toString() || '', assigned: data.get('assigned')?.toString() || '' };

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
    update: async ({ cookies, request }) => {
        const data = await request.formData();
        const task: housework = {
						id: data.get('id')?.toString() || '',
						title: data.get('title')?.toString() || '',
						assigned: data.get('assigned')?.toString() || '',
						toDo: true
				};

        const response = await fetch(api.chores, {
            method: 'PUT',
            body: JSON.stringify(task),
            headers: { 'Content-Type': 'application/json;charset=UTF-8' }
        });

        if (response.status !== 200) { // OK
            return fail(response.status, { error: await response.json() });
        }

        return { success: true, updated: await response.json() };
    },
    done: async ({ cookies, request }) => {
        const data = await request.formData();
				const id = data.get('id');
        const response = await fetch(`${api.chores}/${id}`,
						{
							method: 'PATCH',
							headers: {'Content-Type': 'application/json;charset=UTF-8'}
						})
        if(response.status !== 200) { // OK
            return fail(response.status, {error: await response.json()})
        }

        return { success: true, done: await response.json() }
    }
} satisfies Actions;
