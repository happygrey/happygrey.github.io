import { Download } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton, RouterLinkButton } from '@/components/ui/Button';
import { FadeIn } from '@/components/motion/FadeIn';

export default function Resume() {
	return (
		<Container className="py-16">
			<Seo title="Resume" description="Work experience and skills." path="/resume" />
			<FadeIn>
				<SectionHeading title="Resume" />
				<p className="max-w-[60ch] text-muted-foreground">
					Grab a PDF copy of my résumé, or visit my contact page to get in touch directly.
				</p>
				<div className="mt-6 flex flex-wrap gap-4">
					<LinkButton href="/resume.pdf" download="Sergey_Rodionov_Resume.pdf" variant="primary">
						<Download size={16} aria-hidden="true" className="mr-2" />
						Download my résumé
					</LinkButton>
					<RouterLinkButton to="/contacts" variant="secondary">
						Or visit my contact page
					</RouterLinkButton>
				</div>
			</FadeIn>
		</Container>
	);
}
