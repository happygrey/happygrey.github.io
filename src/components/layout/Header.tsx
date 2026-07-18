import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';
import { navItems } from '@/data/nav';
import { contacts } from '@/data/contacts';
import { NavLinkItem } from '@/components/layout/NavLinkItem';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Container } from '@/components/ui/Container';

const iconLinkClasses =
	'inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<Container size="wide" className="flex items-center justify-between py-4">
				<Link
					to="/"
					className="rounded-md text-sm font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
				>
					Sergey Rodionov
				</Link>

				<div className="flex items-center gap-1">
					<nav className="mr-2 hidden items-center gap-6 sm:flex" aria-label="Primary">
						{navItems.map((item) => (
							<NavLinkItem key={item.path} {...item} />
						))}
					</nav>

					<a
						href={contacts.github.url}
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub"
						className={`hidden sm:inline-flex ${iconLinkClasses}`}
					>
						<GithubIcon size={18} aria-hidden="true" />
					</a>

					<ThemeToggle />

					<button
						type="button"
						className={`sm:hidden ${iconLinkClasses}`}
						aria-expanded={isMenuOpen}
						aria-controls="mobile-nav"
						aria-label="Toggle navigation menu"
						onClick={() => setIsMenuOpen((open) => !open)}
					>
						{isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
					</button>
				</div>
			</Container>

			{isMenuOpen && (
				<nav
					id="mobile-nav"
					aria-label="Primary"
					className="flex flex-col gap-4 border-t border-border px-6 py-4 sm:hidden"
				>
					{navItems.map((item) => (
						<NavLinkItem key={item.path} {...item} onClick={() => setIsMenuOpen(false)} />
					))}
					<a
						href={contacts.github.url}
						target="_blank"
						rel="noreferrer"
						className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
						onClick={() => setIsMenuOpen(false)}
					>
						GitHub
					</a>
				</nav>
			)}
		</header>
	);
}
