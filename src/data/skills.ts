import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
	{
		id: 'backend',
		label: 'Backend',
		items: ['C#', '.NET Core (3–8)', 'ASP.NET Core', 'EF Core', 'PL/pgSQL', 'Rust', 'Kotlin'],
	},
	{
		id: 'frontend',
		label: 'Frontend',
		items: ['TypeScript', 'JavaScript', 'Vue.js 2', 'React', 'HTML', 'CSS'],
	},
	{
		id: 'databases',
		label: 'Databases',
		items: ['PostgreSQL', 'SQL Server', 'Redis'],
	},
	{
		id: 'cloud',
		label: 'Cloud',
		items: ['AWS', 'GCP', 'Azure'],
	},
	{
		id: 'devops',
		label: 'DevOps',
		items: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'],
	},
	{
		id: 'architecture',
		label: 'Architecture',
		items: ['Microservices', 'Event-Driven Systems (Kafka, RabbitMQ)', 'DDD', 'CQRS', 'REST APIs'],
	},
];
