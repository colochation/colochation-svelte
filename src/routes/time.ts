import { readable } from 'svelte/store';

const each_second = 1_000;

const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, each_second);

	return function stop() {
		clearInterval(interval);
	};
});

export { time };
