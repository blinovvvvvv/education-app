// eslint-disable-next-line no-undef
module.exports = {
	env: { browser: true, es2020: true, jest: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react-refresh', 'prettier'],
	rules: {
		'react-refresh/only-export-components': 'warn',
		'prettier/prettier': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'no-multiple-empty-lines': 'error',
		'import/no-internal-modules': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off'
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
}
