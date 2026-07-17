import { Mail } from 'lucide-react';
import { navItems } from '@/data/nav';
import { NavLinkItem } from '@/components/layout/NavLinkItem';
import { Container } from '@/components/ui/Container';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';

const socialLinks = [
	{ label: 'GitHub', href: 'https://github.com/happygrey', icon: GithubIcon },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/sergey-rodionov/', icon: LinkedinIcon },
	{ label: 'Email', href: 'mailto:hello@rodionov.online', icon: Mail },
];

const iconLinkClasses =
	'inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-border">
			<Container size="wide" className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
				<p className="text-sm text-muted-foreground">
					© {year} Sergey Rodionov. Built with React, Vite &amp; Tailwind CSS.
				</p>

				<nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Footer">
					{navItems.map((item) => (
						<NavLinkItem key={item.path} {...item} />
					))}
				</nav>

				<div className="flex items-center gap-1">
					{socialLinks.map(({ label, href, icon: Icon }) => (
						<a
							key={label}
							href={href}
							target={href.startsWith('mailto:') ? undefined : '_blank'}
							rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
							aria-label={label}
							className={iconLinkClasses}
						>
							<Icon size={18} aria-hidden="true" />
						</a>
					))}
				</div>
			</Container>
		</footer>
	);
}
