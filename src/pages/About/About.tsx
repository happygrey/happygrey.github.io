import { Seo } from '@/components/seo/Seo';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';

export default function About() {
	return (
		<>
			<Seo
				title="Senior Software Engineer"
				description="Sergey Rodionov — Senior Software Engineer at Paysend. 10 years building fintech platforms, backend systems, and high-availability infrastructure."
				path="/"
			/>

			<Hero />

			<section aria-labelledby="about-heading">
				<Container className="py-20">
					<FadeIn>
						<SectionHeading as="h2" id="about-heading" title="About" subtitle="How I approach engineering." />
						<p className="max-w-[65ch] text-muted-foreground">
							I&apos;m a Senior Software Engineer at Paysend, based in Belgrade, Serbia, with 10
							years of experience building fintech platforms — from the first line of code to
							systems running in production at scale. I&apos;ve owned products end to end:
							designing the architecture, building the backend and integrations, and staying
							accountable for how they perform once real money and real traffic are moving
							through them.
						</p>
						<p className="mt-4 max-w-[65ch] text-muted-foreground">
							My engineering philosophy centers on clean architecture, pragmatic use of
							microservices and event-driven patterns, and treating reliability as a design
							decision rather than an afterthought. I care about SOLID principles, testable
							code, and developer experience — not as abstractions, but because they&apos;re
							what let a small team ship fast without accumulating debt that slows everyone
							down later.
						</p>
					</FadeIn>
				</Container>
			</section>

			<section aria-labelledby="skills-heading">
				<Container className="pb-20">
					<FadeIn>
						<SectionHeading as="h2" id="skills-heading" title="Skills" subtitle="Technologies I work with." />
						<Skills />
					</FadeIn>
				</Container>
			</section>
		</>
	);
}
