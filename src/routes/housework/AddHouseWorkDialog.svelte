<script lang="ts">

	import AddHouseworkButton from './AddHouseworkButton.svelte';
	import AssignedSelector from './AssignedSelector.svelte';
	import type { housework } from '../housework.type';
	import { api } from '../api';
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';
  import type { SubmitFunction } from '@sveltejs/kit';


	function emptyTask(): housework {
        return {
            id: '',
            title: '',
						toDo: true,
						assigned: ''
		}
	};

	export let task = emptyTask();
	export let showDialog = true;
	let dialog: HTMLDialogElement;

	$: if(dialog && showDialog) dialog.showModal()
	$: if(dialog && !showDialog) dialog.close()

	$: isTaskValid = task.title.trim() !== '' && task.assigned !== '';
	$: buttonDisabled = !isTaskValid;

	const dispatch = createEventDispatcher();

	function escapeDialog(event: KeyboardEvent): void {
		if(event.repeat) return;
		if(event.key === 'Escape') showDialog = false;
		return;
	}

	function onDialogClose() {
		task = emptyTask();
		showDialog = false
	}

	const handleSubmit: SubmitFunction = () => {
      return async ({ result, update }) => {
          if(result.type === 'success') dispatch('created', result?.data?.created)
          else if(result.type === 'error') dispatch('error', result?.error)
          await update({ reset: false });
      };
  }

</script>

<dialog
				bind:this={dialog}
				on:close={onDialogClose}
				on:click|self={() => dialog.close()}
				on:keyup={escapeDialog}
>
	<form method='POST'
				action='?/create'
				use:enhance={handleSubmit}
	>
		<input name='title' bind:value={task.title} placeholder='Nom de la tâche' autofocus>
		<fieldset>
			<AssignedSelector bind:selected={task.assigned}></AssignedSelector>
			<AddHouseworkButton bind:isDisabled={buttonDisabled}></AddHouseworkButton>
		</fieldset>
	</form>
</dialog>

<style>
	dialog {
			position: fixed;
			border: none;
			background-color: white;
			margin: auto 0 0 0;
      bottom: 0;
			box-sizing: border-box;
      width: 100%;
			max-width: 100% !important;
			height: 50%;
			border-radius: 10px 10px 0 0;
			box-shadow: 0 -9px 20px 5px #00000020;
	}

	dialog::backdrop {
			opacity: 0;
	}

	form {
			display: flex;
			flex-direction: column;
			height: 100%;
	}

	fieldset {
			display: flex;
			padding: 0;
			justify-content: space-between;
			align-items: center;
			border: none;
	}

	input {
			border: none;
			font-size: 20px;
			width: 100%;
			padding: 5px;
	}

  input:focus {
			outline: none;
	}
</style>
