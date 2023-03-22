<script lang='ts'>
	import GuestCard from './GuestCard.svelte';
	import type { Guest, GuestsGroupedByDay } from './guest.entity';

	function today(): Date {
		return new Date(new Date().setMinutes(0));
	};

	function tomorrow(): Date {
		return new Date(today().setDate(today().getDate() + 1));
	}

	function inOneWeek(): Date {
		return new Date(today().setDate(today().getDate() + 7));
	}

	let guests: Guest[] = [
		{ name: 'Léa <3', when: new Date(today().setHours(18)) },
		{ name: 'Charles', when: new Date(tomorrow().setHours(18)) },
		{ name: 'Sananes', when: new Date(tomorrow().setHours(23)) },
		{ name: '?', when: new Date(inOneWeek().setHours(18)) },
		{ name: '?', when: new Date(inOneWeek().setHours(23)) }
	];
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

<section>
	<h1><span class='icon'>🍻</span> Invités</h1>
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
</section>

<style>
    section {
        height: 100%;
        display: flex;
        flex-direction: column;
        background: linear-gradient(163.44deg, rgba(211, 82, 201, 0.3) 1.85%, rgba(28, 228, 255, 0.3) 95.81%);
        border-radius: 3px;
        min-width: 400px;
        padding: 20px 25px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    h1 {
        font-weight: bold;
        font-size: 20px;
        margin: 0;
        display: flex;
        align-items: center;
    }

    h2 {
        font-weight: normal;
        font-size: 14px;
        margin: 0;
        margin-top: 30px;
    }

    .icon {
        font-size: 40px;
        margin-right: 10px;
    }
</style>


