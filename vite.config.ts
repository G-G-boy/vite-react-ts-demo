import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import vitePluginImp from 'vite-plugin-imp';
import WindiCSS from 'vite-plugin-windicss';
import {VitePWA} from 'vite-plugin-pwa';

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
            // vitePluginImp({
            //     libList: [
            //         {
            //             libName: 'antd',
            //             style: (name) => {
            //                 if (name === 'row' || name === 'col') {
            //                     return `antd/es/grid/style/index.css`;
            //                 }
            //                 return `antd/es/${name}/style/index.css`;
            //             },
            //         },
            //     ],
            // }),
            WindiCSS(),
            VitePWA({}), // only https
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
