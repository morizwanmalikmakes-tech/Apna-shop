import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/kulhad-tajpur")({
  head: () => ({
    meta: [
      { title: "Kulhad Wholesale Tajpur | Clay Kulhad Supplier UP | Kulhad Factory" },
      { name: "description", content: "Kulhad wholesale Tajpur — mitti ke kulhad 60ml-300ml factory-direct price par. Food-safe, unglazed, lead-free. Kulhad Factory Moradabad se Tajpur tak delivery. Order on WhatsApp." },
      { property: "og:title", content: "Kulhad Wholesale Tajpur | Clay Kulhad Supplier UP | Kulhad Factory" },
      { property: "og:url", content: "https://www.kulhad.shop/kulhad-tajpur" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.kulhad.shop/kulhad-tajpur" }],
  }),
  component: TajpurPage,
});

function TajpurPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-foreground">Kulhad Wholesale Tajpur</h1>
        <p className="mt-3 text-muted-foreground">Tajpur (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order.</p>
        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-xl font-bold text-foreground">Tajpur me mitti ke kulhad — wholesale aur bulk</h2>
          <p className="mt-3 text-muted-foreground">Tajpur me mitti ke kulhad wholesale — chai stalls, cafés aur dhabas ke liye. Kulhad Factory se 60ml-300ml kulhad order karein.</p>
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
          <h2 className="font-display text-xl font-bold text-foreground">Aas-paas ke areas — Tajpur</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Moradabad","Dhampur","Bijnor"].map((n) => (
              <Link key={n} to="/products" className="rounded-full bg-muted px-4 py-2 text-sm font-semibold text-foreground">{n}</Link>
            ))}
          </div>
        </div>
        <div className="mt-6 rounded-2xl bg-primary p-6 text-center text-primary-foreground">
          <h2 className="font-display text-xl font-bold">Tajpur me kulhad wholesale order karein</h2>
          <p className="mt-2 text-sm">Factory-direct price + time par delivery. Abhi WhatsApp karein.</p>
          <a href={waLink("Hi Kulhad Factory, I'd like a wholesale kulhad quote for Tajpur. Please share pricing and delivery.")} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary">WhatsApp pe quote lein</a>
        </div>
      </section>
    </SiteLayout>
  );
}
