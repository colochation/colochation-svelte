<script lang="ts">
	// noinspection TypeScriptCheckImport
	import type { PageData } from './$types';
	import type { housework } from '../housework.type';
	import MobileHouseworkCard from './MobileHouseworkCard.svelte';
	import AddHouseworkCta from './AddHouseworkCta.svelte';
	import AddHouseWorkDialog from './AddHouseWorkDialog.svelte';

	export let data: PageData;
	let newTask: housework | null = null;
	export let tasks: housework[] = data.chores;

	let showDialog = false;
	function onClickCta(event: CustomEvent) {
		showDialog = true
	}
</script>


<h1><span class='icon'>🧹</span> Tâches ménagères</h1>
<ul>
	{#each tasks as task}
		<li>
			<MobileHouseworkCard task={task} />
		</li>
	{/each}
</ul>
<AddHouseworkCta on:click={onClickCta} ></AddHouseworkCta>
<AddHouseWorkDialog bind:showDialog></AddHouseWorkDialog>


<style>
	h1 {
			font-size: 30px;
			margin-left: 20px;
	}

	.icon {
			font-size: 50px;
	}
</style>
