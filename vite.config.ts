import { defineConfig, loadEnv } from 'vite';

import cssInjectedByJs from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [
      react(),
      dts({ 
        insertTypesEntry: true,
        exclude: ['**/*.stories.tsx', '**/*.stories.ts', '**/stories/**', '.storybook/**']
      }),
      cssInjectedByJs()
    ],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        formats: ['es', 'cjs'],
        fileName: (format) => `${format === 'es' ? 'esm' : 'cjs'}/index.js`
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          preserveModules: true,
          preserveModulesRoot: 'src',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        },
        input: {
          index: resolve(__dirname, 'src/index.ts')
        },
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    }
  };
});