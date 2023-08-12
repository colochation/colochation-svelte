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

	function newChoreCreated(event: CustomEvent<housework>) {
		tasks = [newTask, ...tasks];
	}

	function creationError(event: CustomEvent<Response>) {
		// TODO handle error
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
{#if !showDialog}
	<OpenAddHouseworkButton on:click={onClickCta} ></OpenAddHouseworkButton>
{/if}

<AddHouseWorkDialog
	bind:showDialog
	bind:task={newTask}
	on:created={newChoreCreated}
	on:error={creationError}
></AddHouseWorkDialog>


<style>
	h1 {
			font-size: 25px;
			margin-left: 20px;
			font-weight: bold;
	}

	.icon {
			font-size: 50px;
	}
</style>
