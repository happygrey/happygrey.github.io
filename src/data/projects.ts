import type { Project } from '@/types';

export const projects: Project[] = [
	{
		slug: 'paysend-business',
		title: 'Paysend Business',
		role: 'B2B2C Fintech Platform',
		description:
			'A b2b2c fintech product offering virtual accounts, transfers to accounts and cards, and an acquiring component for accepting payments and making withdrawals.',
		achievements: [
			'Designed and built the platform from the ground up',
			'Shipped the first release in half an hour with very limited resources',
			'Acquired the first 100 customers within a few months of launch',
			'Improved SLA to 99.99% during the first half-year in production',
		],
		stack: [
			'.NET Core 3–7',
			'Vue.js 2',
			'TypeScript',
			'PostgreSQL',
			'RabbitMQ',
			'Kafka',
			'Kubernetes',
			'Docker',
			'AWS',
			'GCP',
		],
		liveUrl: 'https://business.paysend.com/',
	},
	{
		slug: 'paysend-enterprise',
		title: 'Paysend Enterprise',
		role: 'High-Load Fintech API Platform',
		description:
			'An API-based, enterprise-level, high-load fintech platform providing inbound and outbound transfers to accounts, cards, wallets, and cryptowallets.',
		achievements: [
			'Delivered the China UnionPay integration end-to-end, from requirements to production',
			'Built the cryptowallet API integration',
			'Shipped Alipay wallet payouts',
		],
		stack: ['.NET Core 5–8', 'PostgreSQL', 'Vue.js 2', 'TypeScript', 'PL/pgSQL', 'Rust', 'Kotlin'],
		liveUrl: 'https://paysend.com/enterprise',
	},
];
