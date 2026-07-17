export interface NavItem {
	path: string;
	label: string;
}

export interface Project {
	slug: string;
	title: string;
	role: string;
	description: string;
	achievements: string[];
	stack: string[];
	liveUrl?: string;
	githubUrl?: string;
	image?: string;
}

export interface SkillCategory {
	id: string;
	label: string;
	items: string[];
}

export interface ArchitecturePrinciple {
	title: string;
	body: string;
}

export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	readingTime: string;
	category: string;
}
