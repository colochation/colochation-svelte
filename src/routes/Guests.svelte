<script lang='ts'>
	import GuestCard from './GuestCard.svelte';
	import type { Guest } from './guest.entity';

	const today = new Date(new Date().setMinutes(0));
	const tomorrow = new Date(today.setDate(today.getDate() + 1));
	const inOneWeek = new Date(today.setDate(today.getDate() + 7));

	let guests: Guest[] = [
		{ name: 'Léa <3', when: new Date(today.setHours(18)) },
		{ name: 'Charles', when: new Date(tomorrow.setHours(18)) },
		{ name: 'Sananes', when: new Date(tomorrow.setHours(23)) },
		{ name: '?', when: new Date(inOneWeek.setHours(18)) },
		{ name: '?', when: new Date(inOneWeek.setHours(23)) }
	];

</script>

<section>
	<h1><span class='icon'>🍻</span> Invités</h1>
	<ul>
		{#each guests as guest}
			<li>
				<GuestCard guest={guest} />
			</li>
		{/each}
	</ul>
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

    ul {
        list-style: none;
        padding: 0;
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


