<script lang='ts'>
	import { onMount, tick } from 'svelte';
	import { readable } from 'svelte/store';
	import Column from './Housework.svelte';

	onMount(async () => {
		await tick();
	});

	const time = readable(new Date(), function start(set) {
		const interval = setInterval(() => {
			set(new Date());
		}, 1_000); // each second

		return function stop() {
			clearInterval(interval);
		};
	});

	const formatter = new Intl.DateTimeFormat('fr', {
		hour12: false,
		hour: 'numeric',
		minute: '2-digit'
	});

	function today(local: string): string {
		const today = new Date();
		return `${today.toLocaleString(local, { weekday: 'long' })}
		${today.getDate()}
		${today.toLocaleString(local, { month: 'long' })}
		${today.getFullYear()}`;
	}
</script>

<header>
	<span id='cat'>🐈</span>
	<div>
		<span>{today('fr-FR').toUpperCase()}</span>
		<span>{formatter.format($time)}</span>
	</div>
</header>

<main>
	<Column></Column>
	<Column></Column>
	<Column></Column>
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
