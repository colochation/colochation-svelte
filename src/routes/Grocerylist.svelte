<script lang='ts'>
	import GrocerylistCard from './GrocerylistCard.svelte';

	type grocerylistItem = {
		name: string,
		checked: boolean
	}
	const grocerylistItems: grocerylistItem[] = [
		{ name: 'Chips', checked: false },
		{ name: 'Bières', checked: false }
	];
</script>

<section>
	<h1><span class='icon'>🛒</span> Liste de courses</h1>
	<ul>
		{#each grocerylistItems as item}
			<li>
				<GrocerylistCard item={item}></GrocerylistCard>
			</li>
		{/each}
	</ul>
</section>

<style>
    section {
        height: 100%;
        display: flex;
        flex-direction: column;
        background: linear-gradient(163.44deg, rgba(211, 82, 201, 0.3) 1.85%, rgba(28, 228, 255, 0.3) 95.81%);
        border-radius: 3px;
        min-width: 400px;
        padding: 20px 25px;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    h1 {
        font-weight: bold;
        font-size: 20px;
        margin: 0;
        display: flex;
        align-items: center;
    }

    .icon {
        font-size: 40px;
        margin-right: 10px;
    }
</style>

