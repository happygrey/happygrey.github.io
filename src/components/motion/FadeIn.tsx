import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
	children: ReactNode;
	delay?: number;
	className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.4, delay, ease: 'easeOut' }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
