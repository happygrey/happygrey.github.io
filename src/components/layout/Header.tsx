import { useState } from 'react';
import { Link } from 'react-router';
import { navItems } from '@/data/nav';
import { NavLinkItem } from '@/components/layout/NavLinkItem';

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="border-b border-slate-800">
			<div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
				<Link to="/" className="text-sm font-semibold text-slate-100">
					Sergey Rodionov
				</Link>

				<nav className="hidden items-center gap-6 sm:flex" aria-label="Primary">
					{navItems.map((item) => (
						<NavLinkItem key={item.path} {...item} />
					))}
				</nav>

				<button
					type="button"
					className="text-slate-300 sm:hidden"
					aria-expanded={isMenuOpen}
					aria-controls="mobile-nav"
					aria-label="Toggle navigation menu"
					onClick={() => setIsMenuOpen((open) => !open)}
				>
					{isMenuOpen ? 'Close' : 'Menu'}
				</button>
			</div>

			{isMenuOpen && (
				<nav
					id="mobile-nav"
					aria-label="Primary"
					className="flex flex-col gap-4 border-t border-slate-800 px-6 py-4 sm:hidden"
				>
					{navItems.map((item) => (
						<NavLinkItem key={item.path} {...item} onClick={() => setIsMenuOpen(false)} />
					))}
				</nav>
			)}
		</header>
	);
}
