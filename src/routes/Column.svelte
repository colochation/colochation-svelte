<script lang="ts">
    import Homework from './Housework.svelte';

    export type housework = {
        title: string;
        status: 'to_do' | 'in_progress' | 'done';
        assigned: string;
    };

    const homeworks: housework[] = [
        {
            title: 'Faire la vaisselle',
            status: 'to_do',
            assigned: 'Nathan',
        },
        {
            title: 'Faire le lit',
            status: 'in_progress',
            assigned: 'Nathan',
        },
        {
            title: 'Passer l\'aspirateur',
            status: 'done',
            assigned: 'Theo',
        },
        ]
</script>

<section>
    <h1>🧹 Tâches ménagères</h1>
    <ul>
        {#each homeworks as homework}
            <li><Homework task={homework}></Homework></li>
        {/each}
    </ul>
</section>

<style>
    section {
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: lavender;
        border-radius: 3px;
        min-width: 430px;
        padding: 20px 25px;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    h1 {
        font-weight: bold;
        font-size: 20px;
    }
</style>
