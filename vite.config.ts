import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import vitePluginImp from 'vite-plugin-imp';
import viteAntdTheme from 'vite-plugin-antd-static-theme';

export default defineConfig(() => {
    return {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '~antd': 'antd',
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
            vitePluginImp({
                libList: [
                    {
                        libName: 'antd',
                        style: (name) => {
                            if (name === 'row' || name === 'col') {
                                return `antd/es/grid/style/index.css`;
                            }
                            return `antd/es/${name}/style/index.css`;
                        },
                    },
                ],
            }),
            viteAntdTheme(),
        ],
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                },
            },
        },
        esbuild: {
            jsxInject: `import React from 'react'`,
        },
        server: {
            port: 4001,
        },
    };
});
