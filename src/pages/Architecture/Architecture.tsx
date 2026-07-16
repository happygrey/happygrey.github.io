import { Seo } from '@/components/seo/Seo';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';

export default function Architecture() {
	return (
		<Container className="py-16">
			<Seo
				title="Architecture"
				description="Notes on system design and architecture."
				path="/architecture"
			/>
			<FadeIn>
				<SectionHeading title="Architecture" subtitle="Notes on system design." />
				<p className="max-w-2xl text-slate-300">
					Write-ups on how systems I've worked on are designed and why.
				</p>
			</FadeIn>
		</Container>
	);
}
