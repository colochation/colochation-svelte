<script lang="ts">
	let icon='🧔';
</script>
<span>
	{icon}
	<select>
		<option value="" disabled selected hidden>Personne assignée</option>
		<option>Theo</option>
		<option>Nathan</option>
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
