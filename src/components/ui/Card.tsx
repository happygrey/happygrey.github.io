import type { ReactNode } from 'react';

interface CardProps {
	children: ReactNode;
	className?: string;
	hoverable?: boolean;
}

const hoverClasses = 'transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg';

export function Card({ children, className = '', hoverable = false }: CardProps) {
	return (
		<div
			className={`rounded-xl border border-border bg-muted p-6 shadow-sm ${hoverable ? hoverClasses : ''} ${className}`}
		>
			{children}
		</div>
	);
}
