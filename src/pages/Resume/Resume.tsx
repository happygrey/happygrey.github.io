import { Seo } from '@/components/seo/Seo';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton, RouterLinkButton } from '@/components/ui/Button';
import { FadeIn } from '@/components/motion/FadeIn';
import { contacts } from '@/data/contacts';

export default function Resume() {
	return (
		<Container className="py-16">
			<Seo title="Resume" description="Work experience and skills." path="/resume" />
			<FadeIn>
				<SectionHeading title="Resume" />
				<p className="max-w-[60ch] text-muted-foreground">
					A downloadable PDF is coming soon. In the meantime, reach out and I&apos;ll send my
					résumé directly.
				</p>
				<div className="mt-6 flex flex-wrap gap-4">
					<LinkButton href={`mailto:${contacts.email}?subject=Resume%20request`} variant="primary">
						Request my résumé by email
					</LinkButton>
					<RouterLinkButton to="/contacts" variant="secondary">
						Or visit my contact page
					</RouterLinkButton>
				</div>
			</FadeIn>
		</Container>
	);
}
