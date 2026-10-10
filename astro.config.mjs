// @ts-check
import { defineConfig } from 'astro/config';

// Set SITE_URL (e.g. https://kalybek.vercel.app) so share previews get absolute links.
const site = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  prefetch: { prefetchAll: true },
});
