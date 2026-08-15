import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://www.kulhad.shop";

const paths = [
  { path: "/", priority: "1.0", freq: "weekly", lastmod: "2026-08-11" },
  { path: "/kulhad-guide", priority: "0.8", freq: "monthly", lastmod: "2026-08-15" },
  { path: "/kulhad-bareilly", priority: "0.7", freq: "monthly", lastmod: "2026-08-15" },
  { path: "/kulhad-meerut", priority: "0.7", freq: "monthly", lastmod: "2026-08-15" },
  { path: "/kulhad-rampur", priority: "0.7", freq: "monthly", lastmod: "2026-08-15" },
  { path: "/kulhad-gajraula", priority: "0.7", freq: "monthly", lastmod: "2026-08-15" },
  { path: "/kulhad-kashipur", priority: "0.7", freq: "monthly", lastmod: "2026-08-15" },
  { path: "/kulhad-rudrapur", priority: "0.7", freq: "monthly", lastmod: "2026-08-15" },
  { path: "/kulhad-dhanora", priority: "0.7", freq: "monthly", lastmod: "2026-08-15" },
  { path: "/kulhad-thakurdwara", priority: "0.7", freq: "monthly", lastmod: "2026-08-15" },
  { path: "/kulhad-jaspur", priority: "0.7", freq: "monthly", lastmod: "2026-08-15" },
  { path: "/kulhad-noorpur", priority: "0.7", freq: "monthly", lastmod: "2026-08-15" },
  { path: "/kulhad-hapur", priority: "0.7", freq: "monthly", lastmod: "2026-08-15" },
  { path: "/kulhad-budaun", priority: "0.7", freq: "monthly", lastmod: "2026-08-15" },
  { path: "/kulhad-sambhal", priority: "0.7", freq: "monthly", lastmod: "2026-08-15" },
  { path: "/kulhad-nagina", priority: "0.7", freq: "monthly", lastmod: "2026-08-15" },
  { path: "/kulhad-amroha", priority: "0.7", freq: "monthly", lastmod: "2026-08-15" },
  { path: "/products", priority: "0.9", freq: "weekly", lastmod: "2026-08-11" },
  { path: "/products/60ml-tea-kulhad", priority: "0.8", freq: "monthly", lastmod: "2026-08-12" },
  { path: "/products/70ml-tea-kulhad", priority: "0.8", freq: "monthly", lastmod: "2026-08-12" },
  { path: "/products/80ml-tea-kulhad", priority: "0.8", freq: "monthly", lastmod: "2026-08-12" },
  { path: "/products/90ml-tea-kulhad", priority: "0.8", freq: "monthly", lastmod: "2026-08-12" },
  { path: "/products/100ml-tea-kulhad", priority: "0.8", freq: "monthly", lastmod: "2026-08-12" },
  { path: "/products/200ml-kulhad", priority: "0.8", freq: "monthly", lastmod: "2026-08-12" },
  { path: "/products/250ml-lassi-kulhad", priority: "0.8", freq: "monthly", lastmod: "2026-08-12" },
  { path: "/products/300ml-lassi-kulhad", priority: "0.8", freq: "monthly", lastmod: "2026-08-12" },
  { path: "/wholesale", priority: "0.8", freq: "monthly", lastmod: "2026-08-07" },
  { path: "/about", priority: "0.7", freq: "monthly", lastmod: "2026-08-11" },
  { path: "/gallery", priority: "0.7", freq: "monthly", lastmod: "2026-08-11" },
  { path: "/contact", priority: "0.7", freq: "monthly", lastmod: "2026-08-11" },
  { path: "/faq", priority: "0.6", freq: "monthly", lastmod: "2026-08-11" },
  { path: "/privacy", priority: "0.3", freq: "yearly", lastmod: "2026-08-07" },
  { path: "/terms", priority: "0.3", freq: "yearly", lastmod: "2026-08-07" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths.map(
          ({ path, priority, freq, lastmod }) =>
            `  <url>\n    <loc>${BASE_URL}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
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
