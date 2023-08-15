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
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		background-color: #F5F5F5;
	}

	.scrollable::-webkit-scrollbar
	{
		width: 10px;
		background-color: #F5F5F5;
	}

	.scrollable::-webkit-scrollbar-thumb
	{
		background-color: #F90;
		background-image: -webkit-linear-gradient(45deg,
		rgba(255, 255, 255, .2) 25%,
		transparent 25%,
		transparent 50%,
		rgba(255, 255, 255, .2) 50%,
		rgba(255, 255, 255, .2) 75%,
		transparent 75%,
		transparent)
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
