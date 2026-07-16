import { Seo } from '@/components/seo/Seo';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/motion/FadeIn';
import { projects } from '@/data/projects';

export default function Projects() {
	return (
		<Container className="py-16">
			<Seo title="Projects" description="A selection of projects I've built." path="/projects" />
			<SectionHeading title="Projects" />
			<div className="grid gap-4 sm:grid-cols-2">
				{projects.map((project, index) => (
					<FadeIn key={project.slug} delay={index * 0.05}>
						<Card>
							<h2 className="font-semibold text-slate-100">{project.title}</h2>
							<p className="mt-2 text-sm text-slate-400">{project.description}</p>
							<ul className="mt-4 flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<li
										key={tag}
										className="rounded-full bg-slate-700/50 px-2.5 py-1 text-xs text-slate-300"
									>
										{tag}
									</li>
								))}
							</ul>
						</Card>
					</FadeIn>
				))}
			</div>
		</Container>
	);
}
