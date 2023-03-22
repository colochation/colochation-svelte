<script lang='ts'>

	export let item = {
		name: '',
		checked: false
	};
</script>

<section class='card'>
	<input type='checkbox' bind:checked={item.checked} />
	<h2>{item.name.trim()}</h2>
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
        height: 40px;
        display: flex;
        align-items: center;
    }

    input {
        height: 25px;
        width: 25px;
    }
</style>


