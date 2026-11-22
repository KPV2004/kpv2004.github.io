// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://kpv2004.github.io',
  integrations: [mdx()],
  // Markdown/MDX images get a srcset capped at their rendered width.
  image: {
    layout: 'constrained',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'th'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
