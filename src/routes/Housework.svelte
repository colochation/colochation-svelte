<script lang="ts">
	import  housework from './Column.svelte'

	export let task: housework = {
		title: '',
		status: 'to_do',
		assigned: '',
	}

</script>

<section class='card'>
	<h2>{task.title}</h2>
	<section>
		<span>{task.status}</span>
		<span>{task.assigned}</span>
	</section>
</section>

<style>
	h2 {
		font-weight: normal;
			font-size: 20px;
	}

	.card {
		background-color: #fff;
		border-radius: 3px;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
		padding: 10px;
		margin: 10px;
	}
</style>

