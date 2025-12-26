// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeMermaid from 'rehype-mermaid';

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
  },

  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid'],
    },
    rehypePlugins: [
      [rehypeMermaid, { strategy: "img-svg", dark: true }]
    ]
  },
});