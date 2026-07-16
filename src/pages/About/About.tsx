import { Seo } from '@/components/seo/Seo';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';

export default function About() {
	return (
		<Container className="py-16">
			<Seo
				title="About"
				description="Software engineer building web applications and systems."
				path="/"
			/>
			<FadeIn>
				<SectionHeading title="About" subtitle="Software engineer." />
				<p className="max-w-2xl text-slate-300">
					I build web applications and the systems behind them. This site collects my projects,
					architecture notes, blog posts, and resume.
				</p>
			</FadeIn>
		</Container>
	);
}
