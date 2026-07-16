import { Link } from 'react-router';
import { Seo } from '@/components/seo/Seo';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
	return (
		<Container className="py-24 text-center">
			<Seo title="Page not found" description="This page does not exist." path="/404" />
			<h1 className="text-3xl font-semibold text-slate-100">404 — Page not found</h1>
			<p className="mt-2 text-slate-400">The page you're looking for doesn't exist.</p>
			<Link to="/" className="mt-6 inline-block text-indigo-400 hover:underline">
				Back to home
			</Link>
		</Container>
	);
}
