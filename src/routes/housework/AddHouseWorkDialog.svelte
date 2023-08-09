<script lang="ts">
	export let showDialog = true;
	let dialog: HTMLDialogElement;

	$: if(dialog && showDialog) dialog.showModal()
</script>

<dialog
				bind:this={dialog}
				on:close={() => (showDialog = false)}
				on:click|self={() => dialog.close()}
>
	<form>
		<input type='text'>
	</form>
</dialog>

<style>
	dialog {
			position: fixed;
			bottom: 0;
			width: 100%;
			border: none;
			background-color: #efefef;
	}
</style>
