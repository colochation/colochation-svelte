<script lang='ts'>
	import type { houseworkStatus } from './housework.type';

	export let status: houseworkStatus = 'to_do';

	function frenchStatus(status: string): string | null {
		switch (status) {
			case 'to_do':
				return 'à faire';
			case 'in_progress':
				return 'en cours';
			case 'done':
				return 'terminé';
			default:
				return '';
		}
	}

</script>

<span class={status}>{frenchStatus(status)}</span>

<style>
    span {
        width: 150px;
        height: 30px;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: bold;
        font-size: 16px;
    }

    .to_do {
        background: rgba(247, 2, 2, 0.67);
    }

    .in_progress {
        background: rgba(247, 149, 2, 0.67);
    }

    .done {
        background: rgba(69, 199, 48, 0.7);
    }
</style>
