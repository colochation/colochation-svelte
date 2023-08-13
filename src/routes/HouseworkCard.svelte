<script lang='ts'>
	import type { housework } from './housework.type';

	export let task: housework = {
		title: '',
		toDo: false,
		assigned: ''
	};

</script>
<section class='card'>
	<section>
		<input type='checkbox'/>
		<h2>{task.title.trim()}</h2>
	</section>
	<span>{task.assigned}</span>
</section>

<style>
    .card {
        background-color: #fff;
        border-radius: 3px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        padding: 10px;
        margin: 13px 0;
        height: 70px;
        display: grid;
        grid-template-rows: 1fr 1fr;
    }

    .card > section {
        display: flex;
        align-items: center;
    }

    .card > span {
        justify-self: end;
        align-self: end;
    }

    input {
        height: 25px;
        width: 25px;
    }

    h2 {
        font-weight: normal;
        font-size: 20px;
        margin: 0;
        align-self: center;
        margin-left: 15px;
    }
</style>

