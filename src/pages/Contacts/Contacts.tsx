import { Mail } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';
import { ContactForm } from '@/components/forms/ContactForm';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';

const directLinks = [
	{ label: 'hello@rodionov.online', href: 'mailto:hello@rodionov.online', icon: Mail },
	{ label: 'github.com/happygrey', href: 'https://github.com/happygrey', icon: GithubIcon },
	{
		label: 'linkedin.com/in/sergey-rodionov',
		href: 'https://www.linkedin.com/in/sergey-rodionov/',
		icon: LinkedinIcon,
	},
];

export default function Contacts() {
	return (
		<Container className="py-16">
			<Seo
				title="Contacts"
				description="Get in touch with Sergey Rodionov — Senior Software Engineer."
				path="/contacts"
			/>
			<FadeIn>
				<SectionHeading title="Contact" subtitle="Have a project or role in mind? Reach out." />

				<ContactForm />

				<ul className="mt-10 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:gap-8">
					{directLinks.map(({ label, href, icon: Icon }) => (
						<li key={label}>
							<a
								href={href}
								target={href.startsWith('mailto:') ? undefined : '_blank'}
								rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
								className="inline-flex items-center gap-2 rounded-md text-sm text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
							>
								<Icon size={16} aria-hidden="true" />
								{label}
							</a>
						</li>
					))}
				</ul>
			</FadeIn>
		</Container>
	);
}
