<script lang='ts'>
	import GuestCard from './GuestCard.svelte';
	import type { Guest, GuestsGroupedByDay } from './guest.type';
	import Column from './Column.svelte';

	export let guests: Guest[] = [];

	function today(): Date {
		return new Date(new Date().setMinutes(0));
	};

	function tomorrow(): Date {
		return new Date(today().setDate(today().getDate() + 1));
	}

	const formatter = new Intl.DateTimeFormat('fr-FR', {
		weekday: 'long',
		month: 'long',
		day: 'numeric'
	});

	let displayed = groupBySameDay(guests);

	function groupBySameDay(guests: Guest[]): GuestsGroupedByDay {
		const grouped = {};
		guests.forEach(guest => {
			const day = formatter.format(guest.when);
			if (!grouped[day]) {
				grouped[day] = [];
			}
			grouped[day].push(guest);
		});
		return grouped;
	}

	function formatDay(day: string) {
		switch (day) {
			case formatter.format(today()):
				return 'AUJOURD\'HUI';
			case formatter.format(tomorrow()):
				return 'DEMAIN';
			default:
				return day.toUpperCase();
		}
	}
</script>

<Column
	icon='🍻'
	title='Invités'
>
	{#each Object.entries(displayed) as [day, guests]}
		<h2>{formatDay(day)}</h2>
		<ul>
			{#each guests as guest}
				<li>
					<GuestCard guest={guest} />
				</li>
			{/each}
		</ul>
	{/each}
</Column>

<style>
    h2 {
        font-weight: normal;
        font-size: 14px;
        margin: 0;
        margin-top: 30px;
    }
</style>

