import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
	base: '/',
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(import.meta.dirname, 'src'),
		},
	},
	build: {
		sourcemap: false,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (/node_modules\/(react|react-dom|react-router)\//.test(id)) {
						return 'react-vendor';
					}
					if (/node_modules\/motion\//.test(id)) {
						return 'motion-vendor';
					}
				},
			},
		},
	},
});
