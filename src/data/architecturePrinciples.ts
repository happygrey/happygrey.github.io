import type { ArchitecturePrinciple } from '@/types';

export const architecturePrinciples: ArchitecturePrinciple[] = [
	{
		title: 'Design for failure, not just the happy path',
		body: 'Payment platforms fail in production more often than they fail in review. At Paysend, message-driven flows over Kafka and RabbitMQ are built around idempotency, retries, and dead-letter handling as first-class concerns — not bolted on afterward.',
	},
	{
		title: 'SLA is a product feature, not an ops metric',
		body: 'Reliability decisions get made at design time. Paysend Business reached 99.99% SLA within its first six months in production, running on Kubernetes — the result of treating availability as a requirement from day one, not a target to chase later.',
	},
	{
		title: 'Multi-cloud is a constraint worth respecting',
		body: 'Running across AWS and GCP forces cleaner boundaries between infrastructure glue and core service logic. That discipline pays off well beyond the multi-cloud case — it is what makes services portable, testable, and easy to reason about.',
	},
	{
		title: 'Ship the smallest thing that proves the architecture',
		body: "Paysend Business shipped its first release in half an hour, deliberately minimal, to validate the system's shape before investing further. Architecture is a hypothesis until it survives contact with real traffic.",
	},
];
