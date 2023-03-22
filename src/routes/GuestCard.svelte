<script lang='ts'>
	import type { Guest } from './guest.entity';

	export let guest: Guest = {
		name: '',
		when: new Date()
	};

	const formatter = new Intl.DateTimeFormat('fr', {
		hour12: false,
		hour: '2-digit',
		minute: '2-digit'
	});

	function hour(date: Date): string {
		return formatter
			.format(date)
			.replace(/:/g, 'h').replace('00', '');
	}

</script>

<section class='card'>
	<h2>{guest.name.trim()}</h2>
	<span>{hour(guest.when)}</span>
</section>

<style>
    h2 {
        font-weight: normal;
        font-size: 20px;
        margin: 0;
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
        justify-content: space-between;
    }
</style>



