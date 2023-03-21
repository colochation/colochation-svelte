<script lang='ts'>
	import housework from './Housework.svelte';
	import Status from './Status.svelte';

	export let task: housework = {
		title: '',
		status: 'to_do',
		assigned: ''
	};

</script>

<section class='card'>
	<h2>{task.title}</h2>
	<section>
		<Status status={task.status}></Status>
		<span>{task.assigned}</span>
	</section>
</section>

<style>
    h2 {
        font-weight: normal;
        font-size: 20px;
        margin: 0;
        align-self: center;
        margin-left: 15px;
    }

    .card {
        background-color: #fff;
        border-radius: 3px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        padding: 10px;
        margin: 13px 0;
        height: 90px;
        display: grid;
        grid-template-rows: 1fr 1fr;
    }

    .card > section {
        align-self: end;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>

