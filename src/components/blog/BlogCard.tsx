import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { BlogPost } from '@/types';

export function BlogCard({ post }: { post: BlogPost }) {
	return (
		<Card hoverable className="flex h-full flex-col">
			<div className="flex items-center gap-3 text-xs text-muted-foreground">
				<time dateTime={post.date}>{post.date}</time>
				<span aria-hidden="true">·</span>
				<span>{post.readingTime}</span>
			</div>
			<h2 className="mt-3 text-lg font-semibold text-foreground">{post.title}</h2>
			<p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
			<Badge className="mt-4 self-start">{post.category}</Badge>
		</Card>
	);
}
