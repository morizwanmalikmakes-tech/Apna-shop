import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

import newGallery1 from "@/assets/gallery-new-1.png";
import newGallery2 from "@/assets/gallery-new-2.png";
import newGallery3 from "@/assets/gallery-new-3.png";
import newGallery4 from "@/assets/gallery-new-4.png";

import newGallery5 from "@/assets/gallery-new-5.png";
import newGallery6 from "@/assets/gallery-new-6.png";

import craftsmanship from "@/assets/craftsmanship.jpg";
import hero from "@/assets/hero-kulhad.jpg";

const items = [
  { src: g1, alt: "Kulhad Factory workshop and production floor", span: "md:col-span-2 md:row-span-2" },
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
      { title: "Gallery — Kulhad Factory" },
      { name: "description", content: "A visual tour of our clay, craft and kulhads — from the wheel to the kiln to your cup." },
      { property: "og:title", content: "Gallery — Kulhad Factory" },
      { property: "og:description", content: "Photos of our clay kulhads, craft and workshop." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Gallery" title="Mitti, Aag aur in dono ke beech ki har kahani." />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {items.map((it, i) => (
            <figure key={i} className={`hover-lift animate-fade-up group relative overflow-hidden rounded-2xl shadow-soft ${it.span ?? ""}`} style={{ animationDelay: `${i * 60}ms` }}>
              <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
