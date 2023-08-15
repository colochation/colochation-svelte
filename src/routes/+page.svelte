<script lang='ts'>
	import Housework from './Housework.svelte';
	import Grocerylist from './Grocerylist.svelte';
	import Guests from './Guests.svelte';
	import type { Guest as GuestType } from './guest.type';
	import { time } from './time';
	// noinspection TypeScriptCheckImport
	import type { PageData } from './$types';
	import type { housework } from './housework.type';
	import * as api from './api'
	import type { grocerylistItem } from './grocery-list.type';

	const clockFormatter = new Intl.DateTimeFormat('fr', {
		hour12: false,
		hour: '2-digit',
		minute: '2-digit'
	});

	const dateFormatter = new Intl.DateTimeFormat('fr', {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
	
	export let data: PageData;

	let tasks: housework[] = data.chores;
	let groceries: grocerylistItem[] = data.groceries;
	let guests: GuestType[] = data.guests;

	async function refresh() {
		changeEmoji();
		[tasks, groceries, guests] = await Promise
			.all([api.getChores(),api.getGroceries(), api.getGuests()])

	}
	setInterval(refresh, 5_000)

	const emojies = ['🐈', '🐅', '🦓', '🐆', '🦒', '🦇', '🦦', '🦥']
	let emoji = '🐈';
	function changeEmoji() {
		emoji = emojies[Math.floor(Math.random() * emojies.length)]
	}


</script>

<header>
	<span id='cat'>{emoji}</span>
	<div>
		<span>{dateFormatter.format($time).toUpperCase()}</span>
		<span>{clockFormatter.format($time)}</span>
	</div>
</header>

<main>
	<Housework bind:tasks={tasks} />
	<Grocerylist groceryList={groceries} />
	<Guests guests={guests} />
</main>

<style>
    header {
        display: flex;
        align-items: center;
        padding: 0 40px;
        font-size: 50px;
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
