<script lang='ts'>
	import { readable } from 'svelte/store';
	import Housework from './Housework.svelte';
	import Grocerylist from './Grocerylist.svelte';
	import Guests from './Guests.svelte';
	import type { Guest } from './guest.type';
	import type { grocerylistItem } from './grocery-list.type';
	import type { housework } from './housework.type';

	const time = readable(new Date(), function start(set) {
		const interval = setInterval(() => {
			set(new Date());
		}, 1_000); // each second

		return function stop() {
			clearInterval(interval);
		};
	});
	const clockFormatter = new Intl.DateTimeFormat('fr', {
		hour12: false,
		hour: '2-digit',
		minute: '2-digit'
	});

	const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});

	function today(): Date {
		return new Date(new Date().setMinutes(0));
	};

	function tomorrow(): Date {
		return new Date(today().setDate(today().getDate() + 1));
	}

	function inOneWeek(): Date {
		return new Date(today().setDate(today().getDate() + 7));
	}

	const guests: Guest[] = [
		{ name: 'Léa', when: new Date(today().setHours(18)) },
		{ name: 'Charles', when: new Date(tomorrow().setHours(18)) },
		{ name: 'Sananes', when: new Date(tomorrow().setHours(23)) },
		{ name: '?', when: new Date(inOneWeek().setHours(18)) },
		{ name: '?', when: new Date(inOneWeek().setHours(23)) }
	];

	const groceryList: grocerylistItem[] = [
		{ name: 'Chips', checked: false },
		{ name: 'Bières', checked: false }
	];

	const houseworks: housework[] = [
		{
			title: 'Faire la vaisselle',
			status: 'to_do',
			assigned: 'Nathan'
		},
		{
			title: 'Nettoyer la salle de bain',
			status: 'in_progress',
			assigned: 'Nathan'
		},
		{
			title: 'Passer l\'aspirateur',
			status: 'done',
			assigned: 'Theo'
		}
	];

</script>

<header>
	<span id='cat'>🐈</span>
	<div>
		<span>{dateFormatter.format(new Date()).toUpperCase()}</span>
		<span>{clockFormatter.format($time)}</span>
	</div>
</header>

<main>
	<Housework tasks={houseworks} />
	<Grocerylist groceryList={groceryList} />
	<Guests guests={guests} />
</main>

<style>
    header {
        display: flex;
        align-items: center;
        padding: 0 40px;
        font-size: 64px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    header > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    #cat {
        font-size: 1.5em;
        margin-right: 35px;
    }

    main {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 1rem;
        height: 80%;
    }
</style>
