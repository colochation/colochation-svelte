<script lang='ts'>

	import type { housework } from '../housework.type';

	export let task: housework = { title: '', assigned: '', toDo: true }
	$: checked = task.toDo === false;

	$: titleIsEmpty = task.title === '';
	$: titleDisplayed = titleIsEmpty ? 'Nom de la tâche' : task.title.trim();
</script>

<section class='card'>
	<input type='checkbox' bind:checked={checked} />
	<h2 class={titleIsEmpty ? 'newTask' : ''}>{titleDisplayed}</h2>
	<span>{task.assigned}</span>
	<hr/>
</section>

<style>

    h2 {
        font-weight: normal;
        font-size: 20px;
        align-self: center;
        margin: 0;
        grid-area: 1 / 2 / 2 / 3;
    }

    .newTask {
        color: #ACACAC;
    }

    .card {
        background-color: #fff;
        padding: 10px;
        margin: 13px 0;
        height: 40px;
        display: grid;
        grid-template-columns: 25px 1fr;
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 0px;
    }

    input {
        height: 25px;
        width: 25px;
        grid-area: 1 / 1 / 2 / 2;
    }

		span {
				font-size: 14px;
				color: #ACACAC;
        grid-area: 2 / 2 / 3 / 3;
		}

		hr {
        grid-area: 3 / 2 / 4 / 3;
				width: 100%;
				border: 1px solid #efefef;
    }
</style>


