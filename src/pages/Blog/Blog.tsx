import { Seo } from '@/components/seo/Seo';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';

export default function Blog() {
	return (
		<Container className="py-16">
			<Seo title="Blog" description="Articles and posts." path="/blog" />
			<FadeIn>
				<SectionHeading title="Blog" subtitle="Articles and posts." />
				<p className="max-w-2xl text-slate-300">No posts yet — check back soon.</p>
			</FadeIn>
		</Container>
	);
}
