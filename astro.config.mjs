import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fariainnovations.com',
  integrations: [
    mdx(),
    // Exclude the /flight-risk redirect stub from the sitemap — it is a
    // redirect to flightriskshow.com, not indexable content.
    sitemap({ filter: (page) => !page.includes('/flight-risk') }),
  ],
  markdown: {
    smartypants: true,
  },
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  // /writing → /notes migration.
  redirects: {
    '/writing': '/notes',
    '/writing/rss.xml': '/notes/rss.xml',
    '/writing/2026-05-25-on-starting-a-log': '/notes/2026-05-25-on-starting-a-log',
  },
});
