import type { ReactNode } from 'react';

interface ContainerProps {
	children: ReactNode;
	className?: string;
	size?: 'default' | 'wide';
}

const sizeClasses = {
	default: 'max-w-[1000px]',
	wide: 'max-w-[1200px]',
} as const;

export function Container({ children, className = '', size = 'default' }: ContainerProps) {
	return <div className={`mx-auto w-full px-6 ${sizeClasses[size]} ${className}`}>{children}</div>;
}
