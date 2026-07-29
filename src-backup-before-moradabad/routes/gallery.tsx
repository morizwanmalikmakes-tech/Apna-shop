import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import hero from "@/assets/hero-kulhad.jpg";

const items = [
  { src: hero, alt: "Steaming chai in clay kulhads", span: "md:col-span-2 md:row-span-2" },
  { src: g1, alt: "Stacks of drying kulhads" },
  { src: g2, alt: "Close-up of chai in a kulhad" },
  { src: g3, alt: "Kulhads baking in the kiln" },
  { src: craftsmanship, alt: "Potter shaping clay", span: "md:col-span-2" },
  { src: g4, alt: "Street tea vendor pouring chai" },
  { src: g5, alt: "Lassi in a large kulhad" },
  { src: g6, alt: "Wholesale crates of kulhads" },
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
