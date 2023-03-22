<script lang='ts'>
	export let icon = '-';
	export let title = '';
</script>

<section>
	<h1><span class='icon'>{icon}</span> {title}</h1>
	<slot></slot>
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
