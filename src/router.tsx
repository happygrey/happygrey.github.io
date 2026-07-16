// This route-config file intentionally exports a router value alongside
// module-scoped lazy component references — not a component module itself,
// so Fast Refresh's single-component-export convention doesn't apply here.
/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import { RootLayout } from '@/layouts/RootLayout';
import { RouteErrorBoundary } from '@/components/ui/RouteErrorBoundary';

const About = lazy(() => import('@/pages/About/About'));
const Projects = lazy(() => import('@/pages/Projects/Projects'));
const Architecture = lazy(() => import('@/pages/Architecture/Architecture'));
const Blog = lazy(() => import('@/pages/Blog/Blog'));
const Resume = lazy(() => import('@/pages/Resume/Resume'));
const Contacts = lazy(() => import('@/pages/Contacts/Contacts'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <RouteErrorBoundary />,
		children: [
			{ index: true, element: <About /> },
			{ path: 'projects', element: <Projects /> },
			{ path: 'architecture', element: <Architecture /> },
			{ path: 'blog', element: <Blog /> },
			{ path: 'resume', element: <Resume /> },
			{ path: 'contacts', element: <Contacts /> },
			{ path: '*', element: <NotFound /> },
		],
	},
]);
