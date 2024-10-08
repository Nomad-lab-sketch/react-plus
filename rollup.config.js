import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';

import packageJson from './package.json';

export default {
	input: 'src/index.ts',
	output: [
		{
			file: packageJson.main,
			format: 'cjs',
			sourcemap: true,
			name: 'react-plus',
		},
	],
	plugins: [
		external(),
		resolve(),
		commonjs(),
		typescript({tsconfig: './tsconfig.json'}),
	],
};
