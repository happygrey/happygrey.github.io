import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LoadingFallback } from '@/components/ui/LoadingFallback';
import { PageTransition } from '@/components/motion/PageTransition';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export function RootLayout() {
	useScrollToTop();

	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex-1">
				<Suspense fallback={<LoadingFallback />}>
					<PageTransition>
						<Outlet />
					</PageTransition>
				</Suspense>
			</main>
			<Footer />
		</div>
	);
}
