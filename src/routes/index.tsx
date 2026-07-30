import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Sparkles, ShieldCheck, Package, Truck, Award, ArrowRight, Quote, Star } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { ProductCard } from "@/components/product-card";
import { ClayParticles } from "@/components/clay-particles";
import { Counter } from "@/components/counter";
import { products } from "@/lib/products";
import { site, waLink } from "@/lib/site";
import hero from "@/assets/new-hero.jpeg";
import craftsmanship from "@/assets/craftsmanship.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.tagline}` },
      { name: "description", content: site.description },
      { property: "og:title", content: `${site.name} — ${site.tagline}` },
      { property: "og:description", content: site.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const features = [
  { icon: Leaf, title: "100% Natural Clay", body: "Nadi ke kinare ki mitti se liya gaya, haath se banaya aur dhoop mein sukhaya gaya." },
  { icon: Sparkles, title: "Eco-Friendly", body: "Puri tarah biodegradable — har baar bina plastic ke ek behtar sip." },
  { icon: ShieldCheck, title: "Food Safe", body: "Na glaze, na lead. Aapke drink ke liye sirf shuddh bhuni hui mitti." },
  { icon: Package, title: "Bulk Orders", body: "Cafés, hotels, shaadiyon aur exporters ke liye bharosemand bulk orders." },
  { icon: Truck, title: "Fast Delivery", body: "Desh bhar mein dispatch, dhyan se pack kiye gaye tootne se bachane wale crates ke saath." },
  { icon: Award, title: "Premium Quality", body: "Ek jaisi motai, barabar pakai aur bhatti mein test ki hui majbooti." },
];

const testimonials = [
  { name: "Rohit Sharma", role: "Café owner, Delhi", quote: "Kulhad Factory ki chai ka anubhav hi alag hai — mitti ke swaad ke liye grahak baar-baar wapas aate hain." },
  { name: "Priya Verma", role: "Wedding planner", quote: "Shaadi ke liye humne 3000 pieces order kiye. Perfect finishing, time par delivery aur transit me bilkul zero breakage." },
  { name: "Anil Gupta", role: "Exporter, Mumbai", quote: "Har mahine ek jaisi quality milti hai. KGN ab hamara bharosemand kulhad supplier ban chuka hai." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-background to-background">
        <ClayParticles />
        <div className="pointer-events-none absolute -top-32 right-[-8%] h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-[-8%] h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24 lg:px-8">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {site.name}
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
              Pure Clay Kulhads <span className="text-primary">for Every Occasion</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
              Paryavaran ke liye behtar, food-safe, haath se banaye gaye mitti ke kulhad — chai, coffee, lassi aur beverages ke liye. Har sip mein parampara ka swaad.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:scale-105 hover:brightness-110">
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={waLink("Hi Kulhad Factory, I'd like to place an order.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:brightness-110">
                WhatsApp Order
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted">
                Contact Us
              </Link>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                { n: 8, s: "+", l: "Sizes" },
                { n: 7, s: "Lakh+", l: "Monthly pcs" },
                { n: 100, s: "%", l: "Natural clay" },
              ].map((c) => (
                <div key={c.l} className="rounded-xl border border-border bg-card px-3 py-3 text-center shadow-soft">
                  <dt className="font-display text-2xl font-bold text-primary">
                    <Counter to={c.n} suffix={c.s} />
                  </dt>
                  <dd className="text-[11px] uppercase tracking-wider text-muted-foreground">{c.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-fade-in relative" style={{ animationDelay: "150ms" }}>
            <div className="relative overflow-hidden rounded-3xl shadow-warm">
              <img src={hero} alt="Steaming masala chai in handcrafted clay kulhads" width={1600} height={1000} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-clay-dark/50 via-transparent to-transparent" />
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl shadow-warm">
              <img
                src="/images/home-kulhads.png"
                alt="Handcrafted clay kulhads ready for use"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="animate-float-slow absolute -bottom-6 -left-4 hidden rounded-2xl border border-border bg-card p-4 shadow-warm sm:block">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Fired at</p>
              <p className="font-display text-2xl font-bold text-primary">1000°C</p>
              <p className="text-xs text-muted-foreground">Kiln-strength earthenware</p>
            </div>
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-12 w-full text-cream sm:h-16">
          <path fill="currentColor" d="M0 40 C240 80 480 0 720 30 C960 60 1200 20 1440 50 L1440 80 L0 80 Z" />
        </svg>
      </section>

      {/* FEATURES */}
      <section className="border-y border-border/60 bg-cream/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Why Kulhad Factory</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">Earth in every sip.</h2>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <li key={f.title} className="hover-lift animate-fade-up rounded-2xl border border-border bg-card p-6 shadow-soft" style={{ animationDelay: `${i * 60}ms` }}>
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Bestsellers</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">Kulhads made to pour.</h2>
          </div>
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            View all sizes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>

      {/* CRAFT / ABOUT TEASER */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
          <div className="relative overflow-hidden rounded-3xl shadow-warm">
            <img src={craftsmanship} alt="Potter shaping a kulhad on the wheel" loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">The Craft</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Made by hands. Fired by fire. Loved by chai.</h2>
            <p className="mt-4 text-secondary-foreground/80">
              Har Kulhad Factory ka kulhad Moradabad ke kushal kumharo ke haathon se banta hai — Bharat ke mitti ke bartano ke dil se. Mitti taiyaar karne se lekar bhatti mein pakane tak, hum poore hunar par nazar rakhte hain, taaki aapko food-safe, majboot aur khushboo se bhare kulhad milen.
            </p>
            <Link to="/about" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110">
              Our story
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Loved by chai lovers</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">What our customers say</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={t.name} className="hover-lift animate-fade-up rounded-2xl border border-border bg-card p-6 shadow-soft" style={{ animationDelay: `${i * 120}ms` }}>
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <Quote className="mt-3 h-6 w-6 text-primary/60" />
              <blockquote className="mt-2 text-sm text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-5">
                <p className="font-display text-base font-bold text-foreground">{t.name}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* WHOLESALE CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-clay to-clay-dark p-10 text-primary-foreground shadow-warm md:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h3 className="font-display text-3xl font-bold sm:text-4xl">Buying in bulk?</h3>
              <p className="mt-3 max-w-lg text-primary-foreground/85">
                Factory-direct pricing for cafés, dhabas, hotels, wedding planners and exporters. Custom sizes and packaging available.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/wholesale" className="rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-cream">Wholesale enquiry</Link>
              <a href={waLink("Hi, I'd like a wholesale quote.")} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:brightness-110">WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
