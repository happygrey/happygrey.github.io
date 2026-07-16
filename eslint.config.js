import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
	{ ignores: ['dist', 'build'] },
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			reactRefresh.configs.vite,
			jsxA11y.flatConfigs.recommended,
		],
		files: ['**/*.{ts,tsx}'],
		plugins: {
			'react-hooks': reactHooks,
		},
		rules: {
			// eslint-plugin-react-hooks@7.1.1 ships `recommended-latest` with an
			// eslintrc-style `plugins: ["react-hooks"]` array, which flat config
			// rejects — register the plugin above and pull only its rules.
			...reactHooks.configs['recommended-latest'].rules,
		},
		languageOptions: {
			ecmaVersion: 2022,
			globals: globals.browser,
		},
	},
	prettierConfig,
);
