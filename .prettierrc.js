export default {
	singleQuote: true,
	tabs: 2,
	useTabs: true,
	bracketSpacing: false,
	bracketSameLine: true,
	arrowParens: 'avoid',
	trailingComma: 'es5',
	endOfLine: 'lf',
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			options: {
				trailingComma: 'all',
				parser: 'typescript',
			},
		},
	],
};
