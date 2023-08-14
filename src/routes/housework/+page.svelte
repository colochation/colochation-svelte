<script lang="ts">
	// noinspection TypeScriptCheckImport
	import type { PageData, ActionData } from './$types';
	import type { housework } from '../housework.type';
	import MobileHouseworkCard from './MobileHouseworkCard.svelte';
	import OpenAddHouseworkButton from './OpenAddHouseworkButton.svelte';
	import AddHouseWorkDialog from './AddHouseWorkDialog.svelte';
  import { flip } from 'svelte/animate';

	export let data: PageData;
	export let tasks: housework[] = data.chores;
	export let form: ActionData;

	let showDialog = false;
	function emptyTask(): housework {
        return {
            id: '',
						title: '',
						toDo: true,
						assigned: ''
		}
	};
	let newTask = emptyTask();
	function onClickCta() {
		showDialog = true
	}

	function newChoreCreated(event: CustomEvent<housework>) {
		const createdTask: housework = event.detail;
		tasks = [structuredClone(createdTask), ...tasks];
		newTask = emptyTask();
	}

	function creationError(event: CustomEvent<Response>) {
		// TODO handle error
		console.log(event.detail);
	}

	function removeTask(event: CustomEvent<housework>) {
        const id = event?.detail.id;
        tasks = tasks.filter(t => t.id !== id);
	}

  function doneError(event: CustomEvent<Response>) {
      // TODO handle error
      console.log(event);
  }
</script>


<h1><span class='icon'>🧹</span> Tâches ménagères</h1>
<ul>
	{#if showDialog}
		<li><MobileHouseworkCard task={newTask} /></li>
	{/if}
	{#each tasks as task (task)}
		<li animate:flip>
			<MobileHouseworkCard
				task={task}
				on:done={removeTask}
				on:error={doneError}
		/>
		</li>
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
