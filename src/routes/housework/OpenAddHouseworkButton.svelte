<script>
	import Add from '$lib/assets/add.svg'
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function dispatchClick() {
		dispatch('click')
	}
</script>

<button on:click={dispatchClick}>
	<img
		src='{Add}'
		alt='add icon'
	/>
</button>

<style>
	button {
			background-color: rgba(69, 199, 48, 0.70);
			border: none;
			height: 80px;
			width: 80px;
			border-radius: 50px;
			position: fixed;
      left: 50%;
			bottom: 20%;
      margin-left: -40px;
  }
</style>
