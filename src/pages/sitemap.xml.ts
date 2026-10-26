import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Generated at build time from the content collection so it cannot drift out of sync
// with the project pages. Adding or removing a project needs no change here.
const SITE = 'https://walid-birouk.github.io';

export const GET: APIRoute = async () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const projects = await getCollection('projects');
  projects.sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));

  const paths = [
    '/',
    '/about/',
    '/projects/',
    ...projects.map((p) => `/projects/${p.data.pageSlug}/`),
  ];

  const urls = paths
    .map((p) => `  <url><loc>${SITE}${base}${p}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
