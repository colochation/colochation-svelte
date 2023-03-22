export type houseworkStatus = 'to_do' | 'in_progress' | 'done';

export type housework = {
	title: string;
	status: houseworkStatus;
	assigned: string;
};
