import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://www.kulhad.shop";
const TODAY = new Date().toISOString().split("T")[0];

const paths = [
  { path: "/",          priority: "1.0", freq: "weekly"  },
  { path: "/products",  priority: "0.9", freq: "weekly"  },
  { path: "/wholesale", priority: "0.8", freq: "monthly" },
  { path: "/about",     priority: "0.7", freq: "monthly" },
  { path: "/gallery",   priority: "0.7", freq: "monthly" },
  { path: "/contact",   priority: "0.7", freq: "monthly" },
  { path: "/faq",       priority: "0.6", freq: "monthly" },
  { path: "/privacy",   priority: "0.3", freq: "yearly"  },
  { path: "/terms",     priority: "0.3", freq: "yearly"  },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths.map(
          ({ path, priority, freq }) =>
            `  <url>\n    <loc>${BASE_URL}${path}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
