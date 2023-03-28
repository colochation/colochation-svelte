<script lang='ts'>
	import Housework from './Housework.svelte';
	import Grocerylist from './Grocerylist.svelte';
	import Guests from './Guests.svelte';
	import { time } from './time';
	// noinspection TypeScriptCheckImport
	import type { PageData } from './$types';

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


</script>

<header>
	<span id='cat'>🐈</span>
	<div>
		<span>{dateFormatter.format($time).toUpperCase()}</span>
		<span>{clockFormatter.format($time)}</span>
	</div>
</header>

<main>
	<Housework tasks={data.chores} />
	<Grocerylist groceryList={data.groceries} />
	<Guests guests={data.guests} />
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
