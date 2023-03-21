<script lang="ts">
	import { onMount } from 'svelte';
	import { tick } from 'svelte';
	import { readable } from 'svelte/store';
	import Column from './Column.svelte'

	onMount(async () => {
		await tick()
	});

	const time = readable(new Date(), function start(set) {
		const interval = setInterval(() => {
			set(new Date());
		}, 1000);

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
		const today = new Date()
		return `${today.toLocaleString(local, { weekday: 'long' })}
		${today.getDate()}
		${today.toLocaleString(local, { month: 'long' })}
		${today.getFullYear()}`
	}
</script>

<header>
	<div>
		<span>🐈</span><span>{today('fr-FR').toUpperCase()}</span>
	</div>
	<span>{formatter.format($time)}</span>
</header>

<main>
	<Column></Column>
	<Column></Column>
	<Column></Column>
</main>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
		font-size: 64px;
		font-weight: bold;
		font-family: Inter,sans-serif;
	}

	main {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
	}
</style>
