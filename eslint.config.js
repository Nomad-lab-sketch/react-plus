// eslint-disable-next-line import/no-extraneous-dependencies
import {FlatCompat} from '@eslint/eslintrc';

const OFF = 0;
// const WARN = 1;
const ERROR = 2;

export default [
	...new FlatCompat().config({
		extends: [
			'airbnb-base',
			'prettier',
			'plugin:@typescript-eslint/recommended',
		],
		parser: '@typescript-eslint/parser',
		plugins: ['prettier', '@typescript-eslint'],
		rules: {
			'no-undef': ERROR,
			semi: ERROR,
			'prettier/prettier': ERROR,
			'arrow-body-style': OFF,
			'prefer-arrow-callback': OFF,
		},
	}),
];
