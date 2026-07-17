import { Seo } from '@/components/seo/Seo';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/motion/FadeIn';
import { architecturePrinciples } from '@/data/architecturePrinciples';

export default function Architecture() {
	return (
		<Container className="py-16">
			<Seo
				title="Architecture"
				description="Notes on system design, grounded in real production experience."
				path="/architecture"
			/>
			<SectionHeading
				title="Architecture"
				subtitle="A few principles, grounded in real production experience — not case studies."
			/>

			<div className="grid gap-4 sm:grid-cols-2">
				{architecturePrinciples.map((principle, index) => (
					<FadeIn key={principle.title} delay={index * 0.05}>
						<Card>
							<h2 className="font-semibold text-foreground">{principle.title}</h2>
							<p className="mt-2 text-sm text-muted-foreground">{principle.body}</p>
						</Card>
					</FadeIn>
				))}
			</div>
		</Container>
	);
}
