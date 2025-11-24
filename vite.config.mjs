import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import copy from 'rollup-plugin-copy';
import { defineConfig, loadEnv } from 'vite';
import jsConfigPaths from 'vite-jsconfig-paths';
import zipPack from 'vite-plugin-zip-pack';

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd());
    console.log(`command - ${command}. mode - ${mode}.`);
    console.log(env);
    return {
        base: env.VITE_APP_BASE ?? '/',
        build: {
            target: 'ES2020',
            rollupOptions: {
                input: {
                    index: resolve(__dirname, 'index.html'),
                    person: resolve(__dirname, 'pages/person.html'),
                    bootstrap: resolve(__dirname, 'pages/bootstrap.html'),
                },
            },
        },
        plugins: [
            tailwindcss(),
            jsConfigPaths(),
            zipPack(),
            copy({
                targets: [
                    {
                        src: [
                            'node_modules/layui/dist/css',
                            'node_modules/layui/dist/font',
                            'node_modules/layui/dist/layui.js',
                            'node_modules/layui/dist/layui.js.map',
                        ],
                        dest: 'public/static/layui',
                    },
                    {
                        src: [
                            'node_modules/jquery/dist/jquery.js',
                            'node_modules/jquery/dist/jquery.min.js',
                            'node_modules/jquery/dist/jquery.min.map',
                        ],
                        dest: 'public/static/jquery',
                    },
                ],
                hook: process.env.NODE_ENV === 'production' ? 'writeBundle' : 'buildStart',
            }),
        ],
    };
});
