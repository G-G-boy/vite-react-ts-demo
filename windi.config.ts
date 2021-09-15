import {defineConfig} from 'windicss/helpers';

export default defineConfig({
    extract: {
        include: ['**/*.{tsx,ts}'],
        exclude: [
            'node_modules',
            '.git',
            'excluded',
            'dist',
            'windi.config.{ts,js}',
            'tailwind.config.{ts,js}',
        ],
    },
    darkMode: 'media',
    attributify: true,
});
