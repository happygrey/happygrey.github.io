import { AnimatePresence, motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	const isDark = theme === 'dark';

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
			aria-pressed={isDark}
			className="relative inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
		>
			<AnimatePresence mode="wait" initial={false}>
				<motion.span
					key={isDark ? 'moon' : 'sun'}
					initial={{ opacity: 0, rotate: -90 }}
					animate={{ opacity: 1, rotate: 0 }}
					exit={{ opacity: 0, rotate: 90 }}
					transition={{ duration: 0.15 }}
					className="flex"
				>
					{isDark ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
				</motion.span>
			</AnimatePresence>
		</button>
	);
}
