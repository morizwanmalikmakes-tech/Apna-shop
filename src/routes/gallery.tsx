import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";

import g1 from "@/assets/gallery-1.webp";
import g2 from "@/assets/gallery-2.webp";
import g3 from "@/assets/gallery-3.webp";
import g4 from "@/assets/gallery-4.webp";
import g5 from "@/assets/gallery-5.webp";
import g6 from "@/assets/gallery-6.webp";

import newGallery1 from "@/assets/gallery-new-1.webp";
import newGallery2 from "@/assets/gallery-new-2.webp";
import newGallery3 from "@/assets/gallery-new-3.webp";
import newGallery4 from "@/assets/gallery-new-4.webp";

import newGallery5 from "@/assets/gallery-new-5.webp";
import newGallery6 from "@/assets/gallery-new-6.webp";

import craftsmanship from "@/assets/craftsmanship.webp";
import hero from "@/assets/hero-kulhad.webp";

const items = [
  {
    src: g1,
    alt: "Kulhad Factory workshop and production floor",
    span: "md:col-span-2 md:row-span-2",
  },
  { src: g2, alt: "Handcrafted clay kulhads ready for production" },
  { src: g3, alt: "Rows of handmade clay kulhads" },
  { src: g4, alt: "Large collection of handcrafted clay kulhads" },
  { src: newGallery1, alt: "Kulhad factory storage and stock" },
  { src: newGallery2, alt: "Kulhad production line" },
  { src: newGallery3, alt: "Handcrafted kulhads ready for sale" },
  { src: newGallery4, alt: "Kulhad Factory products" },
  { src: newGallery5, alt: "Handcrafted clay kulhad in hand" },
  { src: newGallery6, alt: "Decorative clay kulhads collection" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Haath se Bane Mitti ke Kulhad | Gallery | Kulhad Factory Moradabad" },
      {
        name: "description",
        content:
          "Dekho kaise hamare kulhad bante hain — Moradabad ki mitti se lekar bhatti tak. Factory ki tasveerein, banane ka tarika aur tayyar kulhad.",
      },
      {
        property: "og:title",
        content: "Haath se Bane Mitti ke Kulhad | Gallery | Kulhad Factory Moradabad",
      },
      {
        property: "og:description",
        content:
          "Moradabad factory mein haath se bane mitti ke kulhad — production se lekar tayyar kulhad tak ki tasveerein.",
      },
      { property: "og:url", content: "https://www.kulhad.shop/gallery" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "995" },
      {
        name: "twitter:title",
        content: "Haath se Bane Mitti ke Kulhad | Gallery | Kulhad Factory Moradabad",
      },
      {
        name: "twitter:description",
        content:
          "Moradabad factory mein haath se bane mitti ke kulhad — production se lekar tayyar kulhad tak ki tasveerein.",
      },
      { property: "og:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
      { name: "twitter:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
    ],
    links: [{ rel: "canonical", href: "https://www.kulhad.shop/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gallery"
        title="Har Kulhad Mein Mitti Ki Khushboo, Har Order Mein Bharosa"
        subtitle="Moradabad mein haath se bane food-safe kulhads—café, restaurant, shaadi aur wholesale orders ke liye quality, packing aur timely delivery ke saath. Dekhiye kuch pyari si tasveerein—hamare kulhad banne ka asli safar."
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`hover-lift animate-fade-up group relative overflow-hidden rounded-2xl shadow-soft ${it.span ?? ""}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="eager"
                 decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/70 to-transparent p-3 text-xs font-medium text-cream opacity-0 transition group-hover:opacity-100">
                {it.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
