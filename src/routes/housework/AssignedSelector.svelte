<script lang="ts">
	let icon='🧔';

	const housemates = ['Theo', 'Nathan'];
	export let selected = '';
</script>
<span>
	{icon}
	<select bind:value={selected}>
		<option value="" disabled selected hidden>Personne assignée</option>
		{#each housemates as mate}
			<option value={mate}>{mate}</option>
		{/each}

	</select>
</span>

<style>
	span {
			font-size: 30px;
			display: flex;
			align-items: center;
			gap: 10px
	}

	select  {
			padding: 5px;
			border: none;
	}

	option {
      font-size: 20px;
	}
</style>
