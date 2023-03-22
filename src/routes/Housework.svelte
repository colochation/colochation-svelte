<script lang='ts'>
	import HouseworkCard from './HouseworkCard.svelte';
	import type { housework } from './housework.type';
	import Column from './Column.svelte';

	export let tasks: housework[] = [];
</script>

<Column
	icon='🧹'
	title='Tâches ménagères'
>
	<ul>
		{#each tasks as task}
			<li>
				<HouseworkCard task={task} />
			</li>
		{/each}
	</ul>
</Column>
