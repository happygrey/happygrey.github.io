import { Mail } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/motion/FadeIn';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';
import { contacts } from '@/data/contacts';

const contactMethods = [
	{ label: 'Email', value: contacts.email, href: `mailto:${contacts.email}`, icon: Mail },
	{ label: 'GitHub', value: contacts.github.handle, href: contacts.github.url, icon: GithubIcon },
	{ label: 'LinkedIn', value: contacts.linkedin.handle, href: contacts.linkedin.url, icon: LinkedinIcon },
];

export default function Contacts() {
	return (
		<Container className="py-16">
			<Seo
				title="Contacts"
				description="Get in touch with Sergey Rodionov — Senior Software Engineer."
				path="/contacts"
			/>
			<SectionHeading title="Contact" subtitle="Have a project or role in mind? Reach out." />

			<div className="grid gap-4 sm:grid-cols-3">
				{contactMethods.map(({ label, value, href, icon: Icon }, index) => (
					<FadeIn key={label} delay={index * 0.05}>
						<a
							href={href}
							target={href.startsWith('mailto:') ? undefined : '_blank'}
							rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
							className="block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
						>
							<Card hoverable className="flex flex-col items-start gap-3">
								<span className="inline-flex size-10 items-center justify-center rounded-lg bg-background text-accent">
									<Icon size={18} aria-hidden="true" />
								</span>
								<div>
									<p className="text-sm font-medium text-foreground">{label}</p>
									<p className="mt-0.5 break-all text-sm text-muted-foreground">{value}</p>
								</div>
							</Card>
						</a>
					</FadeIn>
				))}
			</div>
		</Container>
	);
}
