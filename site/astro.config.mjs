import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://daviddef.github.io/Our-Family
// To move to a custom domain, set base to '/' and site to that domain.
export default defineConfig({
  site: 'https://daviddef.github.io',
  base: '/Our-Family',
  build: { format: 'directory' },
});
