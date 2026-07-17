import { Link } from 'react-router';
import { Seo } from '@/components/seo/Seo';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
	return (
		<Container className="py-24 text-center">
			<Seo title="Page not found" description="This page does not exist." path="/404" />
			<h1 className="text-3xl font-semibold text-foreground">404 — Page not found</h1>
			<p className="mt-2 text-muted-foreground">The page you're looking for doesn't exist.</p>
			<Link
				to="/"
				className="mt-6 inline-block text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
			>
				Back to home
			</Link>
		</Container>
	);
}
