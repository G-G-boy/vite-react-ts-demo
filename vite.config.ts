import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import vitePluginImp from 'vite-plugin-imp';

export default defineConfig(() => {
    return {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        plugins: [
            reactRefresh(),
            vitePluginImp({
                libList: [
                    {
                        libName: 'zarm',
                        style(name) {
                            return `zarm/es/${name}/style/index.js`;
                        },
                    },
                ],
            }),
        ],
        esbuild: {
            jsxInject: `import React from 'react'`,
        },
        server: {
            port: 4001,
        },
    };
});
