const fs = require("fs");

const productsFile = "src/lib/products.ts";
const slugFile = "src/routes/products/$slug.tsx";

const productsContent = `import k60 from "@/assets/tea-60-new.webp";
import k70 from "@/assets/tea-70-new.webp";
import k80 from "@/assets/tea-80-new.webp";
import k90 from "@/assets/tea-90-new.webp";
import k100 from "@/assets/tea-100-new.webp";
import k200 from "@/assets/kulhad-200-new.webp";
import k250 from "@/assets/new-k250.webp";
import k300 from "@/assets/new-k300.webp";

export type Product = {
  slug: string;
  name: string;
  capacity: string;
  price: string;
  category: "Tea" | "Beverage" | "Lassi";
  description: string;
  image: string;
  moq: string;
  packing: string;
  details: string[];
  faqs: { q: string; a: string }[];
};

export const products: Product[] = [
  {
    slug: "60ml-tea-kulhad",
    name: "60ml Tea Kulhad",
    capacity: "60 ml",
    price: "₹ 1.10",
    category: "Tea",
    image: k60,
    description: "Perfect cutting-chai size clay cup for a rich, traditional experience. Food-safe, unglazed earthen kulhad — ideal for tea stalls, tapris and cafés.",
    moq: "500 pieces",
    packing: "50 pieces per crate (mazboot, tootne-se-bachane wali packing)",
    details: [
      "100% natural, unglazed earthenware — no glaze, no lead",
      "Kiln-fired at 1000°C for strength and food safety",
      "Perfect cutting-chai size for chai tapris, dhabas and cafés",
      "Biodegradable and eco-friendly — a better alternative to paper and plastic cups",
    ],
    faqs: [
      { q: "60ml kulhad ka minimum order kitna hai?", a: "Minimum Order Quantity (MOQ) 500 pieces hai. Factory-direct pricing per piece applies on this quantity." },
      { q: "60ml tea kulhad ka price per piece kitna hai?", a: "60ml Tea Kulhad ka price ₹1.10 per piece (factory-direct wholesale pricing) hai." },
      { q: "Delivery kitne din me hoti hai?", a: "Hum desh bhar me dispatch karte hain. Delivery time location ke hisaab se 3-7 din lagte hain, packing mazboot crates me hoti hai." },
    ],
  },

  {
    slug: "70ml-tea-kulhad",
    name: "70ml Tea Kulhad",
    capacity: "70 ml",
    price: "₹ 1.20",
    category: "Tea",
    image: k70,
    description: "Petite cutting-chai clay cup, perfect for tapris and cafés. Handmade, food-safe earthenware with natural mitti aroma.",
    moq: "500 pieces",
    packing: "50 pieces per crate (mazboot, tootne-se-bachane wali packing)",
    details: [
      "Handmade in Moradabad from 100% natural clay",
      "Unglazed, lead-free and food-safe earthenware",
      "Ideal for cutting-chai at tapris, cafés and food stalls",
      "Retains natural mitti aroma that enhances the chai experience",
    ],
    faqs: [
      { q: "70ml kulhad ka MOQ kya hai?", a: "70ml Tea Kulhad ka Minimum Order Quantity 500 pieces hai." },
      { q: "70ml tea kulhad kitne ka milta hai?", a: "70ml Tea Kulhad ₹1.20 per piece par available hai, wholesale factory-direct pricing pe." },
      { q: "Kya ye kulhad eco-friendly hai?", a: "Haan, ye 100% biodegradable clay kulhad hai — plastic aur paper cups ka eco-friendly alternative." },
    ],
  },

  {
    slug: "80ml-tea-kulhad",
    name: "80ml Tea Kulhad",
    capacity: "80 ml",
    price: "₹ 1.30",
    category: "Tea",
    image: k80,
    description: "Everyday chai kulhad with a comfortable rim. 80ml clay cup for tea shops and homes — unglazed, lead-free and eco-friendly.",
    moq: "500 pieces",
    packing: "50 pieces per crate (mazboot, tootne-se-bachane wali packing)",
    details: [
      "Comfortable rim size — perfect for daily chai at tea shops",
      "Food-safe, unglazed and lead-free earthenware",
      "Suitable for homes, cafés, restaurants and chai stalls",
      "Strong kiln-fired body that holds hot chai comfortably",
    ],
    faqs: [
      { q: "80ml kulhad ka wholesale price kya hai?", a: "80ml Tea Kulhad ₹1.30 per piece factory-direct wholesale price par available hai." },
      { q: "80ml kulhad kis quantity me order kar sakte hain?", a: "MOQ 500 pieces hai. Isse upar custom quantities bhi available hain." },
      { q: "Kya 80ml kulhad chai shops ke liye sahi hai?", a: "Haan, ye daily chai ke liye perfect everyday size hai, chai shops aur homes dono ke liye." },
    ],
  },

  {
    slug: "90ml-tea-kulhad",
    name: "90ml Tea Kulhad",
    capacity: "90 ml",
    price: "₹ 1.40",
    category: "Tea",
    image: k90,
    description: "Generous chai pour with a rustic hand-thrown finish. 90ml clay kulhad for cafés, restaurants and chai lovers.",
    moq: "500 pieces",
    packing: "50 pieces per crate (mazboot, tootne-se-bachane wali packing)",
    details: [
      "Rustic hand-thrown finish with a generous pour size",
      "Perfect for cafés, restaurants and premium chai brands",
      "100% natural clay, unglazed and food-safe",
      "Adds a traditional, earthy charm to the chai experience",
    ],
    faqs: [
      { q: "90ml kulhad ka price per piece kitna hai?", a: "90ml Tea Kulhad ₹1.40 per piece wholesale price par milta hai." },
      { q: "90ml kulhad ka MOQ kya hai?", a: "Minimum Order Quantity 500 pieces hai." },
      { q: "Kya custom branding possible hai?", a: "Kuch cases me custom sizes available hain. Enquiry ke liye WhatsApp pe contact karein." },
    ],
  },

  {
    slug: "100ml-tea-kulhad",
    name: "100ml Tea Kulhad",
    capacity: "100 ml",
    price: "₹ 1.50",
    category: "Tea",
    image: k100,
    description: "A perfect everyday size for a rich, natural tea experience. 100ml clay cup — kiln-fired at 1000°C for strength.",
    moq: "500 pieces",
    packing: "50 pieces per crate (mazboot, tootne-se-bachane wali packing)",
    details: [
      "Ideal everyday size for a rich, natural tea experience",
      "Kiln-fired at 1000°C for added strength and durability",
      "Food-safe, unglazed and lead-free natural clay",
      "Great for chai stalls, cafés and home use",
    ],
    faqs: [
      { q: "100ml kulhad ka rate kya hai?", a: "100ml Tea Kulhad ₹1.50 per piece factory-direct price par available hai." },
      { q: "100ml kulhad kitne pieces ke order me aata hai?", a: "MOQ 500 pieces hai, packing 50 pieces per crate me hoti hai." },
      { q: "Kya 100ml kulhad bake/kiln fired hai?", a: "Haan, ye 1000°C par kiln-fired hai, isliye ye majboot aur food-safe hai." },
    ],
  },

  {
    slug: "200ml-kulhad",
    name: "200ml Kulhad",
    capacity: "200 ml",
    price: "₹ 2.20",
    category: "Beverage",
    image: k200,
    description: "Versatile clay cup for coffee, kadha and hot beverages. 200ml kulhad — food-safe and biodegradable.",
    moq: "300 pieces",
    packing: "50 pieces per crate (mazboot, tootne-se-bachane wali packing)",
    details: [
      "Versatile size for coffee, kadha, and other hot beverages",
      "Food-safe, unglazed natural clay — biodegradable and eco-friendly",
      "Perfect for cafés, restaurants and coffee outlets",
      "Retains warmth and natural earthy flavour of the drink",
    ],
    faqs: [
      { q: "200ml kulhad ka price kya hai?", a: "200ml Kulhad ₹2.20 per piece wholesale price par available hai." },
      { q: "200ml kulhad ka MOQ kya hai?", a: "MOQ 300 pieces hai." },
      { q: "200ml kulhad kis cheez ke liye use hota hai?", a: "Coffee, kadha aur doosre hot beverages ke liye versatile clay cup hai." },
    ],
  },

  {
    slug: "250ml-lassi-kulhad",
    name: "250ml Lassi Kulhad",
    capacity: "250 ml",
    price: "₹ 2.40",
    category: "Lassi",
    image: k250,
    description: "Traditional lassi glass that keeps the drink naturally chilled. 250ml clay kulhad for sweet shops and dhabas.",
    moq: "300 pieces",
    packing: "50 pieces per crate (mazboot, tootne-se-bachane wali packing)",
    details: [
      "Traditional lassi glass that keeps the drink naturally cool",
      "Perfect for sweet shops, dhabas and lassi bars",
      "100% natural clay, unglazed and food-safe",
      "Enhances the authentic dhaba-style lassi experience",
    ],
    faqs: [
      { q: "250ml lassi kulhad ka rate kya hai?", a: "250ml Lassi Kulhad ₹2.40 per piece wholesale price par available hai." },
      { q: "250ml kulhad ka MOQ kya hai?", a: "MOQ 300 pieces hai, packing 50 pieces per crate." },
      { q: "Kya 250ml kulhad lassi ko thanda rakhta hai?", a: "Haan, clay ka natural property hai ki ye drink ko naturally chilled rakhta hai." },
    ],
  },

  {
    slug: "300ml-lassi-kulhad",
    name: "300ml Lassi Kulhad",
    capacity: "300 ml",
    price: "₹ 2.80",
    category: "Lassi",
    image: k300,
    description: "Full-size lassi kulhad for dhabas and restaurants. 300ml earthen glass — strong, food-safe and eco-friendly.",
    moq: "300 pieces",
    packing: "50 pieces per crate (mazboot, tootne-se-bachane wali packing)",
    details: [
      "Full-size lassi kulhad for dhabas, restaurants and lassi bars",
      "Strong, food-safe and eco-friendly earthenware",
      "Naturally keeps lassi cool and adds authentic earthy flavour",
      "100% natural clay, unglazed and biodegradable",
    ],
    faqs: [
      { q: "300ml lassi kulhad ka price kya hai?", a: "300ml Lassi Kulhad ₹2.80 per piece wholesale price par available hai." },
      { q: "300ml kulhad ka MOQ kya hai?", a: "MOQ 300 pieces hai." },
      { q: "300ml kulhad kahan use hota hai?", a: "Dhabas, restaurants, sweet shops aur lassi bars me full-size serving ke liye use hota hai." },
    ],
  },
];
`;

let s = fs.readFileSync(slugFile, "utf8");
let changed = false;

const oldMeta =
  '        { title: `${product.name} | Kulhad Factory` },\n' +
  '        {\n' +
  '          name: "description",\n' +
  '          content: `${product.name} handmade clay kulhad from Kulhad Factory, Moradabad. Factory-direct pricing and India-wide delivery.`,\n' +
  '        },';
const newMeta =
  '        { title: `${product.name} | Kulhad Factory` },\n' +
  '        {\n' +
  '          name: "description",\n' +
  '          content: `${product.name} — ${product.description} Price ${product.price} per piece (wholesale), MOQ ${product.moq}. Factory-direct clay kulhad from Kulhad Factory, Moradabad.`,\n' +
  '        },';
if (s.includes(oldMeta)) {
  s = s.replace(oldMeta, newMeta);
  changed = true;
  console.log("OK: meta description enriched");
} else {
  console.log("SKIP: meta description pattern not found");
}

const oldScripts =
  '        {\n' +
  '          type: "application/ld+json",\n' +
  '          children: JSON.stringify({\n' +
  '            "@context": "https://schema.org",\n' +
  '            "@type": "BreadcrumbList",\n' +
  '            itemListElement: [\n' +
  '              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kulhad.shop/" },\n' +
  '              {\n' +
  '                "@type": "ListItem",\n' +
  '                position: 2,\n' +
  '                name: "Products",\n' +
  '                item: "https://www.kulhad.shop/products",\n' +
  '              },\n' +
  '            ],\n' +
  '          }),\n' +
  '        },\n' +
  '\n' +
  '        {\n' +
  '          type: "application/ld+json",';
const newScripts =
  '        {\n' +
  '          type: "application/ld+json",\n' +
  '          children: JSON.stringify({\n' +
  '            "@context": "https://schema.org",\n' +
  '            "@type": "BreadcrumbList",\n' +
  '            itemListElement: [\n' +
  '              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kulhad.shop/" },\n' +
  '              {\n' +
  '                "@type": "ListItem",\n' +
  '                position: 2,\n' +
  '                name: "Products",\n' +
  '                item: "https://www.kulhad.shop/products",\n' +
  '              },\n' +
  '              {\n' +
  '                "@type": "ListItem",\n' +
  '                position: 3,\n' +
  '                name: product.name,\n' +
  '                item: productUrl,\n' +
  '              },\n' +
  '            ],\n' +
  '          }),\n' +
  '        },\n' +
  '\n' +
  '        {\n' +
  '          type: "application/ld+json",\n' +
  '          children: JSON.stringify({\n' +
  '            "@context": "https://schema.org",\n' +
  '            "@type": "FAQPage",\n' +
  '            mainEntity: product.faqs.map((f) => ({\n' +
  '              "@type": "Question",\n' +
  '              name: f.q,\n' +
  '              acceptedAnswer: { "@type": "Answer", text: f.a },\n' +
  '            })),\n' +
  '          }),\n' +
  '        },\n' +
  '\n' +
  '        {\n' +
  '          type: "application/ld+json",';
if (s.includes(oldScripts)) {
  s = s.replace(oldScripts, newScripts);
  changed = true;
  console.log("OK: FAQPage schema + breadcrumb pos3 added");
} else {
  console.log("SKIP: scripts pattern not found");
}

const oldBody =
  '            <dl className="mt-8 grid grid-cols-2 gap-4">\n' +
  '              <div className="rounded-2xl border border-border bg-card p-4">\n' +
  '                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Capacity</dt>\n' +
  '                <dd className="mt-1 font-display text-xl font-bold text-primary">\n' +
  '                  {product.capacity}\n' +
  '                </dd>\n' +
  '              </div>\n' +
  '              <div className="rounded-2xl border border-border bg-card p-4">\n' +
  '                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Price</dt>\n' +
  '                <dd className="mt-1 font-display text-xl font-bold text-primary">\n' +
  '                  {product.price}\n' +
  '                </dd>\n' +
  '              </div>\n' +
  '            </dl>\n' +
  '\n' +
  '            <div className="mt-8 flex flex-wrap gap-3">';
const newBody =
  '            <dl className="mt-8 grid grid-cols-2 gap-4">\n' +
  '              <div className="rounded-2xl border border-border bg-card p-4">\n' +
  '                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Capacity</dt>\n' +
  '                <dd className="mt-1 font-display text-xl font-bold text-primary">\n' +
  '                  {product.capacity}\n' +
  '                </dd>\n' +
  '              </div>\n' +
  '              <div className="rounded-2xl border border-border bg-card p-4">\n' +
  '                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Price</dt>\n' +
  '                <dd className="mt-1 font-display text-xl font-bold text-primary">\n' +
  '                  {product.price}\n' +
  '                </dd>\n' +
  '              </div>\n' +
  '              <div className="rounded-2xl border border-border bg-card p-4">\n' +
  '                <dt className="text-xs uppercase tracking-wider text-muted-foreground">MOQ</dt>\n' +
  '                <dd className="mt-1 font-display text-lg font-bold text-primary">\n' +
  '                  {product.moq}\n' +
  '                </dd>\n' +
  '              </div>\n' +
  '              <div className="rounded-2xl border border-border bg-card p-4">\n' +
  '                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Packing</dt>\n' +
  '                <dd className="mt-1 text-sm font-medium text-foreground">\n' +
  '                  {product.packing}\n' +
  '                </dd>\n' +
  '              </div>\n' +
  '            </dl>\n' +
  '\n' +
  '            <div className="mt-8">\n' +
  '              <h2 className="font-display text-xl font-bold text-foreground">Product Details</h2>\n' +
  '              <ul className="mt-3 space-y-2">\n' +
  '                {product.details.map((d, i) => (\n' +
  '                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">\n' +
  '                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />\n' +
  '                    {d}\n' +
  '                  </li>\n' +
  '                ))}\n' +
  '              </ul>\n' +
  '            </div>\n' +
  '\n' +
  '            <div className="mt-8">\n' +
  '              <h2 className="font-display text-xl font-bold text-foreground">Frequently Asked Questions</h2>\n' +
  '              <div className="mt-3 space-y-4">\n' +
  '                {product.faqs.map((f, i) => (\n' +
  '                  <div key={i} className="rounded-2xl border border-border bg-card p-4">\n' +
  '                    <p className="text-sm font-semibold text-foreground">{f.q}</p>\n' +
  '                    <p className="mt-1 text-sm text-muted-foreground">{f.a}</p>\n' +
  '                  </div>\n' +
  '                ))}\n' +
  '              </div>\n' +
  '            </div>\n' +
  '\n' +
  '            <div className="mt-8 flex flex-wrap gap-3">';
if (s.includes(oldBody)) {
  s = s.replace(oldBody, newBody);
  changed = true;
  console.log("OK: rich content section added");
} else {
  console.log("SKIP: body pattern not found");
}

if (!changed) {
  console.log("NO CHANGES APPLIED — patterns didn't match. Report this to the assistant.");
  process.exit(1);
}

fs.writeFileSync(slugFile, s);
fs.writeFileSync(productsFile, productsContent);
console.log("DONE: products.ts + $slug.tsx updated. Run: bun run build (push only if BUILD OK).");
