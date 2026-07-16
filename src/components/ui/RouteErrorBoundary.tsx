import { isRouteErrorResponse, useRouteError } from 'react-router';
import { Container } from '@/components/ui/Container';

export function RouteErrorBoundary() {
	const error = useRouteError();
	const message = isRouteErrorResponse(error)
		? `${error.status} ${error.statusText}`
		: 'Something went wrong.';

	return (
		<Container className="py-24 text-center">
			<h1 className="text-2xl font-semibold text-slate-100">{message}</h1>
			<p className="mt-2 text-slate-400">Please try again or head back to the homepage.</p>
		</Container>
	);
}
