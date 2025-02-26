import commonjs from '@rollup/plugin-commonjs';
import { createRequire } from 'module';
import dts from 'rollup-plugin-dts';
import { fileURLToPath } from 'url';
import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const require = createRequire(import.meta.url);
const packageJson = require('./package.json');
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({
                config: {
                    path: './postcss.config.js',
                },
                extensions: ['.css'],
                minimize: true,
                extract: 'styles.css',
            }),
            terser(),
            {
                name: 'alias',
                resolveId(source) {
                    if (source.startsWith('@/')) {
                        return path.resolve(__dirname, 'src', source.slice(2));
                    }
                    return null;
                },
            },
        ],
        external: ['react', 'react-dom'],
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        external: [/\.css$/],
    },
];
