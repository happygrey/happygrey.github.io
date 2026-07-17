import { NavLink } from 'react-router';
import type { NavItem } from '@/types';

interface NavLinkItemProps extends NavItem {
	onClick?: () => void;
}

export function NavLinkItem({ path, label, onClick }: NavLinkItemProps) {
	return (
		<NavLink
			to={path}
			end={path === '/'}
			onClick={onClick}
			className={({ isActive }) =>
				`rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
					isActive ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
				}`
			}
		>
			{label}
		</NavLink>
	);
}
