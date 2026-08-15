import { products } from "@/lib/products";
import type { City } from "@/lib/cities";

const BASE = "https://www.kulhad.shop";
const OG_IMAGE = `${BASE}/images/home-kulhads.webp`;
const num = (p: string) => p.replace(/[^\d.]/g, "");

export function cityFaqs(c: string) {
  return [
    {
      q: `${c} me kulhad ka wholesale rate kya hai?`,
      a: `${c} ke liye factory-direct rate 60ml kulhad ₹1.10 per piece se shuru hota hai aur 300ml lassi kulhad ₹2.80 per piece tak jata hai. Bulk quantity par rate aur behtar ho jata hai — WhatsApp par apni quantity bhejein.`,
    },
    {
      q: `${c} me minimum kitne kulhad order kar sakte hain?`,
      a: `Retail minimum 100 pieces hai. Wholesale MOQ chhote sizes (60-100ml) ke liye 500 pieces aur bade sizes (200-300ml) ke liye 300 pieces hai.`,
    },
    {
      q: `${c} tak kulhad delivery kitne din me hoti hai?`,
      a: `Hamari Moradabad factory se ${c} tak order confirm hone ke baad aam taur par 3-7 din me delivery ho jati hai. Packing mazboot crates me hoti hai taki transit me tootne ka nuksaan na ho.`,
    },
    {
      q: `Kya ${c} me shaadi aur events ke liye bulk kulhad milte hain?`,
      a: `Haan. ${c} ke wedding planners, caterers aur event organisers ke liye hum bulk quantity supply karte hain. Apni date aur quantity WhatsApp par bhejein, hum stock aur delivery confirm kar denge.`,
    },
  ];
}

export function cityHead(city: City) {
  const c = city.name;
  const url = `${BASE}/${city.slug}`;
  const faqs = cityFaqs(c);

  return {
    meta: [
      { title: city.title },
      { name: "description", content: city.description },
      { property: "og:type", content: "website" },
      { property: "og:title", content: city.title },
      { property: "og:description", content: city.description },
      { property: "og:url", content: url },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "995" },
      { property: "og:image:alt", content: `Mitti ke kulhad wholesale supplier for ${c}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: city.title },
      { name: "twitter:description", content: city.description },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "geo.region", content: "IN-UP" },
      { name: "geo.placename", content: c },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
            { "@type": "ListItem", position: 2, name: "Products", item: `${BASE}/products` },
            { "@type": "ListItem", position: 3, name: `Kulhad ${c}`, item: url },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `Clay Kulhad Price List ${c}`,
          numberOfItems: products.length,
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: `${p.name} — ${c}`,
              description: p.description,
              image: `${BASE}${p.image}`,
              sku: `${p.slug}-${city.slug}`,
              brand: { "@type": "Brand", name: "Kulhad Factory" },
              offers: {
                "@type": "Offer",
                price: num(p.price),
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                url,
                areaServed: { "@type": "City", name: c },
                seller: { "@id": `${BASE}/#business` },
              },
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Kulhad Wholesale Supply in ${c}`,
          serviceType: "Clay kulhad wholesale supply",
          provider: { "@id": `${BASE}/#business` },
          areaServed: {
            "@type": "City",
            name: c,
            address: { "@type": "PostalAddress", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
          },
          url,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  };
}
