import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

export default defineConfig(() => {
    return {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        plugins: [reactRefresh()],
        esbuild: {
            jsxInject: `import React from 'react'`,
        },
        server: {
            port: 4001,
        },
    };
});
