// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },

  site: 'https://Konilo.github.io',
  base: '/the-data-pipeline',
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});