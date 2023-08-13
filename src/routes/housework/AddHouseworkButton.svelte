<script>
	import Add from '$lib/assets/add.svg'
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let isDisabled = true;
</script>

<button
	type='submit'
	disabled='{isDisabled}'
>
	<img
		alt='Add icon'
		src='{Add}'
	/>
</button>

<style>
	button {
			background-color: #45C730;
			border: none;
			height: 50px;
			width: 50px;
			border-radius: 50px;
  }

	button:disabled {
			background-color: #b9eeb1;
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
