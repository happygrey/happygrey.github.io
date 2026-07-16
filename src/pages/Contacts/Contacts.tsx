import { Seo } from '@/components/seo/Seo';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';

export default function Contacts() {
	return (
		<Container className="py-16">
			<Seo title="Contacts" description="Get in touch." path="/contacts" />
			<FadeIn>
				<SectionHeading title="Contacts" />
				<ul className="space-y-2 text-slate-300">
					<li>
						Email:{' '}
						<a className="text-indigo-400 hover:underline" href="mailto:hello@rodionov.online">
							hello@rodionov.online
						</a>
					</li>
					<li>
						GitHub:{' '}
						<a
							className="text-indigo-400 hover:underline"
							href="https://github.com/happygrey"
							target="_blank"
							rel="noreferrer"
						>
							github.com/happygrey
						</a>
					</li>
				</ul>
			</FadeIn>
		</Container>
	);
}
