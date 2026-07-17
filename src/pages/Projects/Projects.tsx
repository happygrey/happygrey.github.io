import { ExternalLink } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/motion/FadeIn';
import { GithubIcon } from '@/components/icons/BrandIcons';
import { projects } from '@/data/projects';

export default function Projects() {
	return (
		<Container className="py-16">
			<Seo title="Projects" description="A selection of fintech platforms I've built at Paysend." path="/projects" />
			<SectionHeading title="Projects" subtitle="Production systems I've designed and shipped." />

			<div className="grid gap-6 sm:grid-cols-2">
				{projects.map((project, index) => (
					<FadeIn key={project.slug} delay={index * 0.05}>
						<Card hoverable className="flex h-full flex-col">
							<h2 className="text-lg font-semibold text-foreground">{project.title}</h2>
							<p className="mt-1 text-sm text-muted-foreground">{project.role}</p>

							<p className="mt-4 text-sm text-muted-foreground">{project.description}</p>

							<ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
								{project.achievements.map((achievement) => (
									<li key={achievement} className="flex gap-2">
										<span aria-hidden="true" className="text-accent">
											·
										</span>
										{achievement}
									</li>
								))}
							</ul>

							<ul className="mt-5 flex flex-wrap gap-2">
								{project.stack.map((tech) => (
									<li key={tech}>
										<Badge>{tech}</Badge>
									</li>
								))}
							</ul>

							<div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
									>
										Visit site
										<ExternalLink size={14} aria-hidden="true" />
									</a>
								)}
								{project.githubUrl && (
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
									>
										<GithubIcon size={14} aria-hidden="true" />
										Source
									</a>
								)}
							</div>
						</Card>
					</FadeIn>
				))}
			</div>
		</Container>
	);
}
