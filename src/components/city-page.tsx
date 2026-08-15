import { Link } from "@tanstack/react-router";
import { CheckCircle2, MapPin, Truck, ShieldCheck, Package } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";
import { waLink, site } from "@/lib/site";
import type { City } from "@/lib/cities";
import { cityFaqs } from "@/lib/city-head";

export function CityPage({ city }: { city: City }) {
  const c = city.name;
  const faqs = cityFaqs(c);

  return (
    <SiteLayout>
      <section className="border-b border-border/60 bg-gradient-to-b from-muted/40 to-background">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-1.5">/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span className="mx-1.5">/</span>
            <span className="text-foreground">Kulhad {c}</span>
          </nav>

          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Kulhad Wholesale {c} — Mitti Ke Kulhad Supplier
          </h1>

          <p className="mt-4 max-w-3xl text-muted-foreground">{city.intro}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waLink(`Hi Kulhad Factory, I'd like a wholesale kulhad quote for ${c}. Please share pricing and delivery.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              WhatsApp par {c} ka rate lein
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Call {site.phone}
            </a>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icon: Package, k: "Sizes", v: "60ml – 300ml" },
              { icon: ShieldCheck, k: "Price from", v: "₹ 1.10 / pc" },
              { icon: Truck, k: "Delivery", v: `${c} & aas-paas` },
              { icon: MapPin, k: "Factory", v: "Moradabad, UP" },
            ].map((x) => (
              <div key={x.k} className="rounded-xl border border-border bg-card p-3">
                <x.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                <dt className="mt-1.5 text-xs uppercase tracking-wider text-muted-foreground">{x.k}</dt>
                <dd className="font-display text-sm font-bold text-foreground">{x.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Kulhad Price List {c} — sabhi sizes
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          {c} ke chai stalls, dhabas, cafés, sweet shops, caterers aur shaadi planners ke liye
          factory-direct rate. Neeche se apna size chunein aur WhatsApp par {c} ka quote lein.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            {c} me Kulhad Factory se kyon order karein?
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">{city.sub}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              `${c} tak time par delivery, tracking ke saath`,
              "Factory-direct price — koi bich ka dalal nahi",
              "100% natural mitti, unglazed aur lead-free",
              "Tootne se bachane wali mazboot crate packing",
              "Bulk aur regular monthly supply ka bharosa",
              "Custom size aur branding ki suvidha",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-foreground/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          {c} ke aas-paas hum yahan bhi supply karte hain
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {city.nearby.map((n) => (
            <Link
              key={n.name}
              to={n.to}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
            >
              {n.name}
            </Link>
          ))}
          <Link
            to="/kulhad-guide"
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
          >
            Kulhad Guide
          </Link>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            {c} me kulhad — aksar pooche jane wale sawaal
          </h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-5 shadow-soft">
                <summary className="cursor-pointer list-none font-display text-base font-bold text-foreground marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-clay to-clay-dark p-8 text-center text-primary-foreground shadow-warm md:p-12">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {c} me kulhad ka bulk order dein
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
            Apna size aur quantity bataiye — {c} ke liye factory-direct rate aur delivery time turant bhej denge.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={waLink(`Hi Kulhad Factory, I'd like a wholesale kulhad quote for ${c}. Please share pricing and delivery.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              WhatsApp par quote lein
            </a>
            <Link
              to="/wholesale"
              className="rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-cream"
            >
              Wholesale enquiry form
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
