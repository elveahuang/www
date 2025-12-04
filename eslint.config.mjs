import eslint from '@eslint/js';
import globals from 'globals';

/** @type {import("eslint").Config} */
const config = [
    eslint.configs.recommended,
    {
        ignores: ['**/node_modules/', '**/dist/'],
    },
    {
        languageOptions: {
            sourceType: 'module',
            ecmaVersion: 'latest',
            globals: {
                ...globals.browser,
                ...globals.es2020,
                ...globals.node,
                ...globals.jquery,
            },
        },
    },
    {
        rules: {
            'no-undef': 'off',
        },
    },
];

export default config;
