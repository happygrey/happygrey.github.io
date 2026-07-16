export interface NavItem {
	path: string;
	label: string;
}

export interface Project {
	slug: string;
	title: string;
	description: string;
	tags: string[];
	link?: string;
}
