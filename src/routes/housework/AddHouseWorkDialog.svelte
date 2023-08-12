<script lang="ts">

	import AddHouseworkButton from './AddHouseworkButton.svelte';
	import AssignedSelector from './AssignedSelector.svelte';
	import type { housework } from '../housework.type';

	export let task: housework = {
		title: '',
		toDo: true,
		assigned: ''
	};
	export let showDialog = true;
	let dialog: HTMLDialogElement;

	$: if(dialog && showDialog) dialog.showModal()
	$: if(dialog && !showDialog) dialog.close()

	function submit() {
		alert("submit form !");
	}

	function escapeDialog(event: KeyboardEvent): void {
		if(event.repeat) return;
		if(event.key === 'Escape') showDialog = false;
		return;
	}

	function onDialogClose() {
		task = {
			title: '',
			assigned: '',
			toDo: true
		}
		showDialog = false
	}
</script>

<dialog
				bind:this={dialog}
				on:close={onDialogClose}
				on:click|self={() => dialog.close()}
				on:keyup={escapeDialog}
>
	<form on:submit={() => submit()}>
		<input bind:value={task.title} placeholder='Nom de la tâche'>
		<fieldset>
			<AssignedSelector></AssignedSelector>
			<AddHouseworkButton></AddHouseworkButton>
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
			box-shadow: 0px -9px 20px 5px #00000020;
	}

	dialog::backdrop {
			opacity: 0;
	}

	form {
			display: flex;
			flex-direction: column;
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
