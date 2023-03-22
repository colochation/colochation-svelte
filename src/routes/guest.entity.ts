interface Guest {
	name: string;
	when: Date;
}

interface GuestsGroupedByDay {
	[day: string]: Guest[];
}

export type { Guest, GuestsGroupedByDay };
