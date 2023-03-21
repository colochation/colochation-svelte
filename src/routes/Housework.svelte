<script lang='ts'>
	import Homework from './Housework-card.svelte';
	import type houseworkStatus from './Status.svelte';

	export type housework = {
		title: string;
		status: houseworkStatus;
		assigned: string;
	};

	const homeworks: housework[] = [
		{
			title: 'Faire la vaisselle',
			status: 'to_do',
			assigned: 'Nathan'
		},
		{
			title: 'Faire le lit',
			status: 'in_progress',
			assigned: 'Nathan'
		},
		{
			title: 'Passer l\'aspirateur',
			status: 'done',
			assigned: 'Theo'
		}
	];
</script>

<section>
	<h1><span class='icon'>🧹</span> Tâches ménagères</h1>
	<ul>
		{#each homeworks as homework}
			<li>
				<Homework task={homework}></Homework>
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
    }

    .icon {
        font-size: 40px;
    }
</style>
