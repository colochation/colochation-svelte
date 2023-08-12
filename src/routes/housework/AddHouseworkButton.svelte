<script>
	import Add from '$lib/assets/add.svg'
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<button type='submit'>
	<img
		alt='Add icon'
		src='{Add}'
	/>
</button>

<style>
	button {
			background-color: #45C730B2;
			border: none;
			height: 50px;
			width: 50px;
			border-radius: 50px;
  }

	img {
			height: 25px;
			width: 25px;
			margin: auto auto;
	}
</style>
