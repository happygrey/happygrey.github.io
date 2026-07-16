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
				`text-sm font-medium transition-colors ${
					isActive ? 'text-indigo-400' : 'text-slate-300 hover:text-slate-100'
				}`
			}
		>
			{label}
		</NavLink>
	);
}
