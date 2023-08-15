<script lang='ts'>
	export let icon = '-';
	export let title = '';
</script>

<section>
	<h1><span class='icon'>{icon}</span> {title}</h1>
	<div class='scrollable'>
		<slot></slot>
	</div>
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

	.scrollable {
		overflow-y: auto;
	}

	.scrollable::-webkit-scrollbar-track
	{
		background-color: transparent;
	}

	.scrollable::-webkit-scrollbar
	{
		width: 10px;
		background-color: transparent;
	}

	.scrollable::-webkit-scrollbar-thumb
	{
      border-radius: 10px;
      background: linear-gradient(163.44deg, rgba(211, 82, 201, 0.3) 1.85%, rgba(28, 228, 255, 0.3) 95.81%);
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
