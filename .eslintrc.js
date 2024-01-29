module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'eslint-plugin-prettier',
	],
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',

	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},

	root: true,

	overrides: [
		{
			files: ['*.js'],
			extends: ['plugin:@typescript-eslint/disable-type-checked'],
		},
	],

	rules: {
		'no-plusplus': 'off',
		'eol-last': 'error',
		'max-len': ['error', 150],
		'no-tabs': 'off',
		'arrow-body-style': 'warn',
		'indent': ['tab'],
	},

	eslintConfig: {
		env: {
			node: true,
			es2017: true,
		},
	},
};
