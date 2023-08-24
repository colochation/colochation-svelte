<script lang="ts">
	// noinspection TypeScriptCheckImport
	import type { PageData, ActionData } from './$types';
	import type { housework } from '../housework.type';
	import MobileHouseworkCard from './MobileHouseworkCard.svelte';
	import OpenAddHouseworkButton from './OpenAddHouseworkButton.svelte';
	import AddHouseWorkDialog from './AddHouseWorkDialog.svelte';
  import { flip } from 'svelte/animate';
  import type { ActionResult } from '@sveltejs/kit';

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
	let dialogTask = emptyTask();
	function openDialogCreateMode() {
		showDialog = true
	}

	function openDialogUpdateMode(task: housework) {
		dialogTask = task
		showDialog = true
	}

	function newChoreCreated(event: CustomEvent<housework>) {
		const createdTask: housework = event.detail;
		tasks = [structuredClone(createdTask), ...tasks];
		dialogTask = emptyTask();
	}

  function choreUpdated(event: CustomEvent<housework>) {
      const updatedTask: housework = event.detail;
      tasks = updateTaskInArray(updatedTask);
  }

  function updateTaskInArray(updated: housework): housework[] {
			const arrayWithoutOldTask = tasks.filter(t => t.id !== updated.id)
			return [structuredClone(updated), ... arrayWithoutOldTask]
	}

	function saveError(result: CustomEvent<ActionResult>) {
		// TODO handle error
		console.log(result);
	}

	function removeTask(event: CustomEvent<housework>) {
        const id = event?.detail.id;
        tasks = tasks.filter(t => t.id !== id);
	}

  function doneError(event: CustomEvent<ActionResult>) {
      // TODO handle error
  }

	function openDialogToUpdateTask(event: CustomEvent<housework>) {
		if(!event?.detail) {
			// TODO handle error
		}
		openDialogUpdateMode(event.detail)
	}
</script>


<h1><span class='icon'>🧹</span> Tâches ménagères</h1>
<ul>
	{#each tasks as task (task)}
		<li animate:flip>
			<MobileHouseworkCard
				task={task}
				on:done={removeTask}
				on:error={doneError}
				on:update={openDialogToUpdateTask}
		/>
		</li>
	{/each}
</ul>
{#if !showDialog}
	<OpenAddHouseworkButton on:click={openDialogCreateMode} ></OpenAddHouseworkButton>
{/if}

<AddHouseWorkDialog
	bind:showDialog
	bind:task={dialogTask}
	on:created={newChoreCreated}
	on:updated={choreUpdated}
	on:error={saveError}
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
