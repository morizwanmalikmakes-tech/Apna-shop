const fs = require("fs");
const cities = [
  { slug: "amroha", name: "Amroha", near: ["Dhanaura", "Gajraula", "Joya", "Hasanpur"], note: "Kulhad Factory se Amroha tak kulhad delivery time par pahunchta hai, mazboot packing ke saath. Amroha ke chai stalls, cafés aur dhabas ko factory-direct wholesale price par food-safe, unglazed aur lead-free mitti ke kulhad milte hain." },
  { slug: "seohara", name: "Seohara", near: ["Bijnor", "Dhampur", "Noorpur"], note: "Seohara ke dhabas aur chai dukano tak Kulhad Factory food-safe mitti ke kulhad wholesale price par deliver karta hai. 60ml se 300ml tak sab sizes available." },
  { slug: "sahaspur", name: "Sahaspur", near: ["Bijnor", "Dhampur", "Noorpur"], note: "Sahaspur me kulhad wholesale — eco-friendly, unglazed mitti ke kulhad chai aur lassi ke liye. Kulhad Factory se bulk order karein, time par delivery." },
  { slug: "dhampur", name: "Dhampur", near: ["Seohara", "Noorpur", "Bijnor"], note: "Dhampur me kulhad wholesale — food-safe clay kulhads, factory-direct pricing. Kulhad Factory se bulk order karke time par delivery paayein." },
  { slug: "tajpur", name: "Tajpur", near: ["Moradabad", "Dhampur", "Bijnor"], note: "Tajpur me mitti ke kulhad wholesale — chai stalls, cafés aur dhabas ke liye. Kulhad Factory se 60ml-300ml kulhad order karein." },
  { slug: "noorpur", name: "Noorpur", near: ["Dhampur", "Seohara", "Bijnor"], note: "Noorpur me kulhad wholesale — 100% natural mitti, lead-free aur biodegradable. Kulhad Factory se bulk order karke delivery paayein." },
  { slug: "jaspur", name: "Jaspur", near: ["Kashipur", "Thakurdwara", "Moradabad"], note: "Jaspur me kulhad wholesale delivery — chai ki dukano aur cafés ke liye. Kulhad Factory se factory-direct price par kulhad order karein." },
  { slug: "thakurdwara", name: "Thakurdwara", near: ["Moradabad", "Bilari", "Kashipur"], note: "Thakurdwara ke business owners Kulhad Factory se kulhad wholesale lete hain. 100% natural mitti, food-safe aur eco-friendly." },
  { slug: "dhanora", name: "Dhanora", near: ["Amroha", "Gajraula", "Hasanpur"], note: "Dhanora me kulhad wholesale — mitti ke kulhad chai, coffee aur lassi ke liye. Kulhad Factory se bulk order karke delivery paayein." },
  { slug: "chandpur", name: "Chandpur", near: ["Bijnor", "Dhampur", "Noorpur"], note: "Chandpur ke chai dukano tak Kulhad Factory kulhad deliver karta hai. Mazboot packing, time par delivery aur factory pricing." },
  { slug: "joya", name: "Joya", near: ["Amroha", "Dhanaura", "Gajraula"], note: "Joya me kulhad online — mitti ke kulhad wholesale price par. Kulhad Factory se order karein, chai aur lassi ke liye perfect." },
  { slug: "gajraula", name: "Gajraula", near: ["Amroha", "Dhanaura", "Hasanpur"], note: "Gajraula ke business owners Kulhad Factory se wholesale kulhad lete hain. Food-safe, unglazed mitti ke kulhad chai aur lassi ke liye." },
  { slug: "rampur", name: "Rampur", near: ["Bareilly", "Moradabad", "Bilaspur"], note: "Rampur me kulhad wholesale delivery — chai stalls, cafés aur hotels ke liye. Kulhad Factory se factory-direct order karein." },
  { slug: "meerut", name: "Meerut", near: ["Modipuram", "Roorkee", "Muzaffarnagar"], note: "Meerut ke cafés aur chai dukano tak Kulhad Factory kulhad deliver karta hai. Factory-direct pricing aur mazboot packing ke saath." },
  { slug: "bareilly", name: "Bareilly", near: ["Shahjahanpur", "Pilibhit", "Rampur"], note: "Bareilly ke tea café owners aur dhabas Kulhad Factory se wholesale kulhad order karte hain. 60ml se 300ml tak sab sizes available." }
];
let created = 0;
for (const c of cities) {
  const file = `src/routes/kulhad-${c.slug}.tsx`;
  if (fs.existsSync(file)) { continue; }
  const title = `Kulhad Wholesale ${c.name} | Clay Kulhad Supplier UP | Kulhad Factory`;
  const desc = `Kulhad wholesale ${c.name} — mitti ke kulhad 60ml-300ml factory-direct price par. Food-safe, unglazed, lead-free. Kulhad Factory Moradabad se ${c.name} tak delivery. Order on WhatsApp.`;
  const nearArr = JSON.stringify(c.near);
  const content = `import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/kulhad-${c.slug}")({
  head: () => ({
    meta: [
      { title: "${title}" },
      { name: "description", content: "${desc}" },
      { property: "og:title", content: "${title}" },
      { property: "og:url", content: "https://www.kulhad.shop/kulhad-${c.slug}" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.kulhad.shop/kulhad-${c.slug}" }],
  }),
  component: ${c.name}Page,
});

function ${c.name}Page() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-foreground">Kulhad Wholesale ${c.name}</h1>
        <p className="mt-3 text-muted-foreground">${c.name} (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order.</p>
        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-xl font-bold text-foreground">${c.name} me mitti ke kulhad — wholesale aur bulk</h2>
          <p className="mt-3 text-muted-foreground">${c.note}</p>
        </div>
        <div className="mt-6 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-xl font-bold text-foreground">Kulhad sizes aur price</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="py-2 pr-4">Size</th><th className="py-2 pr-4">Best For</th><th className="py-2">Price / piece</th>
                </tr>
              </thead>
              <tbody>
                {[["60ml","Cutting chai","₹1.10"],["80ml","Daily chai","₹1.30"],["100ml","Regular chai","₹1.50"],["200ml","Coffee / kadha","₹2.20"],["300ml","Full lassi","₹2.80"]].map((r) => (
                  <tr key={r[0]} className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold">{r[0]}</td><td className="py-2 pr-4">{r[1]}</td><td className="py-2 font-semibold text-primary">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <Link to="/products" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110">Dekho saare kulhad → Products</Link>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-xl font-bold text-foreground">Aas-paas ke areas — ${c.name}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {${nearArr}.map((n) => (
              <Link key={n} to="/products" className="rounded-full bg-muted px-4 py-2 text-sm font-semibold text-foreground">{n}</Link>
            ))}
          </div>
        </div>
        <div className="mt-6 rounded-2xl bg-primary p-6 text-center text-primary-foreground">
          <h2 className="font-display text-xl font-bold">${c.name} me kulhad wholesale order karein</h2>
          <p className="mt-2 text-sm">Factory-direct price + time par delivery. Abhi WhatsApp karein.</p>
          <a href={waLink("Hi Kulhad Factory, I'd like a wholesale kulhad quote for ${c.name}. Please share pricing and delivery.")} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary">WhatsApp pe quote lein</a>
        </div>
      </section>
    </SiteLayout>
  );
}
`;
  fs.writeFileSync(file, content);
  created++;
}
console.log("FILES CREATED:", created);
const sf = "src/routes/sitemap[.]xml.ts";
let s = fs.readFileSync(sf, "utf8");
let added = 0;
for (const c of cities) {
  const entry = `  { path: "/kulhad-${c.slug}", priority: "0.7", freq: "monthly", lastmod: "2026-08-14" },`;
  if (s.includes(`/kulhad-${c.slug}"`)) continue;
  const anchor = `{ path: "/kulhad-guide", priority: "0.8", freq: "monthly", lastmod: "2026-08-14" },`;
  if (s.includes(anchor)) { s = s.replace(anchor, anchor + "\n" + entry); added++; }
}
fs.writeFileSync(sf, s);
console.log("SITEMAP ADDED:", added);
