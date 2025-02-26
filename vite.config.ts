import { defineConfig, loadEnv } from 'vite';

import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    // Load environment variables based on the current mode (development or production)
    const env = loadEnv(mode, process.cwd());

    return {
        plugins: [
            react(),
            {
                name: 'html-transform',
                transformIndexHtml(html) {
                    return html.replace(/<title>(.*?)<\/title>/, `<title>${env.VITE_APP_TITLE}</title>`);
                },
            },
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
    };
});
