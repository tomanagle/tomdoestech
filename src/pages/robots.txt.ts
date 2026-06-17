import type { APIRoute } from "astro";

// Generated from `site` in astro.config, so the domain never goes stale.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL("sitemap.xml", site).href;
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
