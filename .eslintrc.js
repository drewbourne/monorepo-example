module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: [
			"./tsconfig.json",
			"./apps/*/tsconfig.json",
			"./packages/*/*/tsconfig.json",
		],
	},
	env: {
		browser: true,
		node: true,
	},
	plugins: [
		"@typescript-eslint",
		"import",
		"html",
		"markdown",
		"react",
		"react-hooks",
		"jsx-a11y",
	],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:markdown/recommended",
		"prettier",
	],
	rules: {
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-call": "off",
	},
};
