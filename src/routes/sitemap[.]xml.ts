import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://www.kulhad.shop";

const paths = [
  { path: "/", priority: "1.0", freq: "weekly" },
  { path: "/products", priority: "0.9", freq: "weekly" },
  { path: "/products/60ml-tea-kulhad", priority: "0.8", freq: "monthly" },
  { path: "/products/70ml-tea-kulhad", priority: "0.8", freq: "monthly" },
  { path: "/products/80ml-tea-kulhad", priority: "0.8", freq: "monthly" },
  { path: "/products/90ml-tea-kulhad", priority: "0.8", freq: "monthly" },
  { path: "/products/100ml-tea-kulhad", priority: "0.8", freq: "monthly" },
  { path: "/products/200ml-kulhad", priority: "0.8", freq: "monthly" },
  { path: "/products/250ml-lassi-kulhad", priority: "0.8", freq: "monthly" },
  { path: "/products/300ml-lassi-kulhad", priority: "0.8", freq: "monthly" },
  { path: "/wholesale", priority: "0.8", freq: "monthly" },
  { path: "/about", priority: "0.7", freq: "monthly" },
  { path: "/gallery", priority: "0.7", freq: "monthly" },
  { path: "/contact", priority: "0.7", freq: "monthly" },
  { path: "/faq", priority: "0.6", freq: "monthly" },
  { path: "/privacy", priority: "0.3", freq: "yearly" },
  { path: "/terms", priority: "0.3", freq: "yearly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths.map(
          ({ path, priority, freq }) =>
            `  <url>\n    <loc>${BASE_URL}${path}</loc>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
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
