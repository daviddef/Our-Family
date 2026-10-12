import { defineConfig } from 'astro/config';

// Custom domain, from 12 October 2026: https://ourfamily.defranceski.com/
// Served by GitHub Pages from this project repo. `base` is '/' because every link
// here goes through u(), and site/public/CNAME is what keeps the domain attached
// across Actions deploys: a CNAME that exists only in dist/ is wiped by the next
// build. The DNS already pointed at daviddef.github.io.
export default defineConfig({
  site: 'https://ourfamily.defranceski.com',
  base: '/',
  build: { format: 'directory' },
});
