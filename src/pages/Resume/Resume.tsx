import { Seo } from '@/components/seo/Seo';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/Button';
import { FadeIn } from '@/components/motion/FadeIn';

export default function Resume() {
	return (
		<Container className="py-16">
			<Seo title="Resume" description="Work experience and skills." path="/resume" />
			<FadeIn>
				<SectionHeading title="Resume" />
				<p className="max-w-2xl text-slate-300">
					Download a copy of my resume, or reach out via the contacts page.
				</p>
				<LinkButton href="/resume.pdf" download className="mt-6">
					Download PDF
				</LinkButton>
			</FadeIn>
		</Container>
	);
}
