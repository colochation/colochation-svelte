<script lang='ts'>
	import type { housework } from './housework.type';

	export let task: housework = {
		title: '',
		toDo: false,
		assigned: ''
	};

</script>
<section class='card'>
	<h2>{task.title.trim()}</h2>
	<span>{task.assigned}</span>
</section>

<style>
    .card {
        background-color: #fff;
        border-radius: 3px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        padding: 15px;
        margin: 13px 0;
        height: 55px;
        display: grid;
        grid-template-rows: 1fr 1fr;
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
    }
</style>

