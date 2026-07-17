import { FadeIn } from '@/components/motion/FadeIn';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { RouterLinkButton } from '@/components/ui/Button';
import headshotJpg from '@/assets/images/headshot.jpg';
import headshotWebp from '@/assets/images/headshot.webp';

const heroStack = ['.NET Core', 'C#', 'TypeScript', 'Vue.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'];

export function Hero() {
	return (
		<section className="border-b border-border" aria-labelledby="hero-heading">
			<Container size="wide" className="grid gap-12 py-20 sm:py-28 md:grid-cols-[1.2fr_1fr] md:items-center">
				<FadeIn>
					<h1
						id="hero-heading"
						className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
					>
						Hi, I&apos;m Sergey.
						<br />
						Senior Software Engineer.
					</h1>
					<p className="mt-6 max-w-[55ch] text-lg text-muted-foreground">
						Building fintech platforms and the backend systems behind them — 10 years of shipping
						high-availability software at Paysend, with a focus on reliability, clean architecture,
						and ownership from idea to production.
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-4">
						<RouterLinkButton to="/projects" variant="primary">
							View Projects
						</RouterLinkButton>
						<RouterLinkButton to="/contacts" variant="secondary">
							Contact Me
						</RouterLinkButton>
					</div>

					<ul className="mt-8 flex flex-wrap gap-2">
						{heroStack.map((tech) => (
							<li key={tech}>
								<Badge>{tech}</Badge>
							</li>
						))}
					</ul>
				</FadeIn>

				<FadeIn delay={0.1} className="justify-self-center md:justify-self-end">
					<picture>
						<source srcSet={headshotWebp} type="image/webp" />
						<img
							src={headshotJpg}
							alt="Sergey Rodionov"
							width={320}
							height={320}
							className="size-56 rounded-2xl border border-border object-cover shadow-sm sm:size-72"
						/>
					</picture>
				</FadeIn>
			</Container>
		</section>
	);
}
