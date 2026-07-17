import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'motion/react';
import { RouterProvider } from 'react-router';
import { router } from '@/router';
import { ThemeProvider } from '@/contexts/ThemeContext';

export function App() {
	return (
		<ThemeProvider>
			<MotionConfig reducedMotion="user">
				<HelmetProvider>
					<RouterProvider router={router} />
				</HelmetProvider>
			</MotionConfig>
		</ThemeProvider>
	);
}
