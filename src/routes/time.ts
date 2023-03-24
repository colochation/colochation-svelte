import { readable } from 'svelte/store';

const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1_000); // each second

	return function stop() {
		clearInterval(interval);
	};
});

export { time };
