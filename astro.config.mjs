// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://igortau.github.io',
  base: '/portfolio-site',

  vite: {
    plugins: [tailwindcss()]
  }
});