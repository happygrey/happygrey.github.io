import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
	{
		id: 'backend',
		label: 'Backend',
		items: ['C#', '.NET Core (1-8)', '.net 1.0-4.8', 'ASP.NET Core', 'EF Core', 'PL/pgSQL','VB.NET', 'Node.js', 'Python', 'PHP', 'VBA'],
	},
	{
		id: 'frontend',
		label: 'Frontend',
		items: ['TypeScript', 'JavaScript', 'Vue.js 2', 'React', 'Angular 2', 'HTML', 'SCSS'],
	},
	{
		id: 'databases',
		label: 'Databases',
		items: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis'],
	},
	{
		id: 'cloud',
		label: 'Cloud',
		items: ['AWS', 'GCP', 'Azure'],
	},
	{
		id: 'devops',
		label: 'DevOps',
		items: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'GitLab CI/CD', 'Octopus Deploy', 'Jenkins', 'TeamCity'],
	},
	{
		id: 'architecture',
		label: 'Architecture',
		items: ['Microservices', 'Event-Driven Systems (Kafka, RabbitMQ)', 'DDD', 'REST APIs', 'Clean Architecture', 'Outbox Pattern'],
	},
];
