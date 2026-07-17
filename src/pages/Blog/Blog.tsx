import { PenLine } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';
import { BlogCard } from '@/components/blog/BlogCard';
import { posts } from '@/data/posts';

export default function Blog() {
	return (
		<Container className="py-16">
			<Seo title="Blog" description="Articles and posts." path="/blog" />
			<SectionHeading title="Blog" subtitle="Articles and posts." />

			{posts.length === 0 ? (
				<FadeIn>
					<div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border py-16 text-center">
						<PenLine className="text-muted-foreground" size={28} aria-hidden="true" />
						<p className="font-medium text-foreground">No posts yet</p>
						<p className="max-w-[40ch] text-sm text-muted-foreground">
							I&apos;m planning to write about the systems I build. Check back soon, or find me on{' '}
							<a
								href="https://github.com/happygrey"
								target="_blank"
								rel="noreferrer"
								className="text-accent hover:underline"
							>
								GitHub
							</a>{' '}
							in the meantime.
						</p>
					</div>
				</FadeIn>
			) : (
				<div className="grid gap-4 sm:grid-cols-2">
					{posts.map((post, index) => (
						<FadeIn key={post.slug} delay={index * 0.05}>
							<BlogCard post={post} />
						</FadeIn>
					))}
				</div>
			)}
		</Container>
	);
}
