<script lang="ts">
	// noinspection TypeScriptCheckImport
	import type { PageData } from './$types';
	import type { housework } from '../housework.type';
	import MobileHouseworkCard from './MobileHouseworkCard.svelte';
	import OpenAddHouseworkButton from './OpenAddHouseworkButton.svelte';
	import AddHouseWorkDialog from './AddHouseWorkDialog.svelte';

	export let data: PageData;
	export let tasks: housework[] = data.chores;

	let showDialog = false;
	let newTask: housework = { title: '', assigned: '', toDo: true }
	function onClickCta(event: CustomEvent) {
		showDialog = true
	}
</script>


<h1><span class='icon'>🧹</span> Tâches ménagères</h1>
<ul>
	{#if showDialog}
		<li><MobileHouseworkCard task={newTask} /></li>
	{/if}
	{#each tasks as task}
		<li><MobileHouseworkCard task={task} /></li>
	{/each}
</ul>
<OpenAddHouseworkButton on:click={onClickCta} ></OpenAddHouseworkButton>
<AddHouseWorkDialog
	bind:showDialog
	bind:task={newTask}
></AddHouseWorkDialog>


<style>
	h1 {
			font-size: 30px;
			margin-left: 20px;
	}

	.icon {
			font-size: 50px;
	}
</style>
