<script lang='ts'>
	import GrocerylistCard from './GrocerylistCard.svelte';
	import type { grocerylistItem } from './grocery-list.type';
	import Column from './Column.svelte';

	export let groceryList: grocerylistItem[] = [];
	console.log(groceryList)
</script>

<Column
	icon='🛒'
	title='Liste de courses'
>
	<ul>
		{#each groceryList as item}
			<li>
				<GrocerylistCard item={item}></GrocerylistCard>
			</li>
		{/each}
	</ul>
</Column>
<style>
    ul {
        list-style: none;
        padding: 0;
    }
</style>

