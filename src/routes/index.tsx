import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Leaf,
  Sparkles,
  ShieldCheck,
  Package,
  Truck,
  Award,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { ProductCard } from "@/components/product-card";
import { ClayParticles } from "@/components/clay-particles";
import { Counter } from "@/components/counter";
import { products } from "@/lib/products";
import { site, waLink } from "@/lib/site";
import hero from "@/assets/new-hero.webp";
import aboutMachine from "@/assets/about-machine.webp";
import secondKulhad from "@/assets/second-kulhad-image.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.seoTitle },
      { name: "description", content: site.description },
      { property: "og:title", content: site.seoTitle },
      { property: "og:description", content: site.description },
      { property: "og:url", content: "https://www.kulhad.shop/" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "995" },
      { property: "og:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
      { name: "twitter:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
    ],
    links: [{ rel: "canonical", href: "https://www.kulhad.shop/" }],
  }),
  component: HomePage,
});

const features = [
  {
    icon: Leaf,
    title: "100% Natural Clay",
    body: "Nadi ke kinare ki mitti se liya gaya, haath se banaya aur dhoop mein sukhaya gaya.",
  },
  {
    icon: Sparkles,
    title: "Eco-Friendly",
    body: "Puri tarah biodegradable — har baar bina plastic ke ek behtar sip.",
  },
  {
    icon: ShieldCheck,
    title: "Food Safe",
    body: "Na glaze, na lead. Aapke drink ke liye sirf shuddh bhuni hui mitti.",
  },
  {
    icon: Package,
    title: "Bulk Orders",
    body: "Cafés, hotels, shaadiyon aur exporters ke liye bharosemand bulk orders.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    body: "Desh bhar mein dispatch, dhyan se pack kiye gaye tootne se bachane wale crates ke saath.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    body: "Ek jaisi motai, barabar pakai aur bhatti mein test ki hui majbooti.",
  },
];

const testimonials = [
  {
    name: "Javed Ali",
    role: "Amroha",
    rating: 5,
    quote:
      "Maine Amroha se order kiya tha, 100 pcs receive ho gaye. Call service bhi acchi hai, 24 hours me reply mil jata hai. Thank you Kulhad Factory.",
    quoteEn:
      "I ordered from Amroha and received 100 pcs. The call service is good too — you get a reply within 24 hours. Thank you Kulhad Factory.",
  },
  {
    name: "Adnan Malik",
    role: "Verified buyer",
    rating: 4,
    quote:
      "Thank you sir, aapki delivery time par hui aur quality bhi ekdam badhiya hai. Maine first time order kiya, kaafi acchi service mili.",
    quoteEn:
      "Thank you sir, your delivery was on time and the quality is excellent. I ordered for the first time and got really good service.",
  },
  {
    name: "Bansh Kumar",
    role: "Verified buyer",
    rating: 4,
    quote:
      "Thank you bhai, aapke kulhad bade hi mast hain. Maine 500 pcs 70ml kulhad order kiye the — packing kaafi behtareen thi aur price bhi accha hai. Main apne aur bhaiyon ko bhi bolunga ki kulhad Moradabad se hi buy karein.",
    quoteEn:
      "Thank you bhai, your kulhads are really great. I ordered 500 pcs of 70ml kulhad — the packing was excellent and the price is good too. I will tell my friends to buy kulhads from Moradabad only.",
  },
  {
    name: "Rishabh Prajapati",
    role: "Verified buyer",
    rating: 5,
    quote:
      "Bhai kulhad bahut hi accha, packing ke saath. Na hi koi kulhad toota hua mila. Thank you bhai, meri taraf se 5 star. Next time Kulhad Factory se hi order karunga.",
    quoteEn:
      "Bhai, the kulhads are very good and so is the packing. Not a single kulhad arrived broken. Thank you — 5 stars from my side. Next time I will order from Kulhad Factory again.",
  },
  {
    name: "Arpit Vishwakarma",
    role: "Bulk order",
    rating: 5,
    quote:
      "Kulhad Factory se bulk order kiya tha. Packing ekdum mazboot thi, har kulhad sahi salamat pahuncha. Quality consistent hai aur price bhi reasonable. Ab regular order karenge. 5 star!",
    quoteEn:
      "I placed a bulk order with Kulhad Factory. The packing was very strong and every kulhad arrived safely. Quality is consistent and the price is reasonable. We will order regularly now. 5 stars!",
  },
  {
    name: "Upendar Yadav",
    role: "Cafe owner",
    rating: 4,
    quote:
      "Humne apne cafe ke liye wholesale order kiya — 2000 pieces. Sab ek jaisi quality, zero breakage aur time par delivery. Next time bhi Kulhad Factory se hi order karunga. Best kulhad supplier in Moradabad.",
    quoteEn:
      "We placed a wholesale order for our cafe — 2000 pieces. All the same quality, zero breakage and on-time delivery. I will order from Kulhad Factory next time too. Best kulhad supplier in Moradabad.",
  },
];

const reviewStats = {
  count: 6,
  average: 4.5,
  gbpUrl: "https://maps.app.goo.gl/1Qmxsdu1WxPPww3C8",
};

function HomePage() {
  const [reviewLang, setReviewLang] = useState<"hi" | "en">("hi");
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
            <h1 style={{ backgroundImage: "linear-gradient(180deg, #FF9933 0%, #FFF4E0 50%, #138808 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" }} className="mt-5 bg-clip-text font-display text-4xl font-bold leading-[1.05] text-transparent sm:text-5xl md:text-6xl">
              Pure Clay Kulhad Manufacturer{" "}
              <span>&amp; Wholesale Supplier in Moradabad</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
              Paryavaran ke liye behtar, food-safe, haath se banaye gaye mitti ke kulhad — chai,
              coffee, lassi aur beverages ke liye. Har sip mein parampara ka swaad.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                style={{ background: "linear-gradient(180deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)" }}
                className="inline-flex items-center gap-2 rounded-full border border-[#333333] px-6 py-3 text-sm font-semibold text-[#333333] shadow-soft transition hover:scale-105 hover:brightness-105"
              >
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={waLink("Hi Kulhad Factory, I'd like to place an order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:brightness-110"
              >
                WhatsApp Order
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                Contact Us
              </Link>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                { n: 8, s: "+", l: "Sizes" },
                { n: 7, s: " lakh+", l: "Monthly pcs" },
                { n: 100, s: "%", l: "Natural clay" },
              ].map((c) => (
                <div
                  key={c.l}
                  className="rounded-xl border border-border bg-card px-3 py-3 text-center shadow-soft"
                >
                  <dt className="font-display text-2xl font-bold text-primary">
                    <Counter to={c.n} suffix={c.s} />
                  </dt>
                  <dd className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {c.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-fade-in relative" style={{ animationDelay: "150ms" }}>
            <div className="relative overflow-hidden rounded-3xl shadow-warm">
              <img
                src={hero}
                alt="Steaming masala chai in handcrafted clay kulhads"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-clay-dark/50 via-transparent to-transparent" />
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl shadow-warm">
              <img
                src={secondKulhad}
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
        <svg
          aria-hidden
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block h-12 w-full text-cream sm:h-16"
        >
          <path
            fill="currentColor"
            d="M0 40 C240 80 480 0 720 30 C960 60 1200 20 1440 50 L1440 80 L0 80 Z"
          />
        </svg>
      </section>

      {/* FEATURES */}
      <section className="border-y border-border/60 bg-cream/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Why Kulhad Factory
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Earth in every sip.
            </h2>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <li
                key={f.title}
                className="hover-lift animate-fade-up rounded-2xl border border-border bg-card p-6 shadow-soft"
                style={{ animationDelay: `${i * 60}ms` }}
              >
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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Bestsellers
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Kulhads made to pour.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View all sizes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.slug} product={p} tricolorRequest />
          ))}
        </div>
      </section>

      {/* CRAFT / ABOUT TEASER */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
          <div className="relative max-md:order-2 overflow-hidden rounded-3xl shadow-warm">
            <img
              src={aboutMachine}
              alt="Potter shaping a kulhad on the wheel"
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="max-md:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              The Craft
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Made by hands. Fired by fire. Loved by chai.
            </h2>
            <p className="mt-4 text-secondary-foreground/80">
              Har Kulhad Factory ka kulhad Moradabad ke kushal kumharo ke haathon se banta hai —
              Bharat ke mitti ke bartano ke dil se. Mitti taiyaar karne se lekar bhatti mein pakane
              tak, hum poore hunar par nazar rakhte hain, taaki aapko food-safe, majboot aur
              khushboo se bhare kulhad milen.
            </p>
            <Link
              to="/about"
              style={{ background: "linear-gradient(180deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)" }}
              className="mt-6 inline-flex rounded-full border border-[#333333] px-6 py-3 text-sm font-semibold text-[#333333] hover:brightness-105"
            >
              Our story
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            TRUSTED BY KULHAD BUYERS
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Hamare Customers Ka Bharosa
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Quality, strong packing aur timely delivery ke baare mein hamare customers kya kehte
            hain, dekhiye.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-5 w-5"
                    style={
                      j < Math.round(reviewStats.average)
                        ? { color: "#F5A623", fill: "#F5A623" }
                        : { color: "#D8D2C6", fill: "#D8D2C6" }
                    }
                  />
                ))}
              </span>
              <span className="font-display text-lg font-bold text-foreground">
                {reviewStats.average}
              </span>
              <span className="text-sm text-muted-foreground">
                / 5 &middot; {reviewStats.count} Google reviews
              </span>
            </div>

            <div role="group" aria-label="Review language" className="inline-flex overflow-hidden rounded-full border border-border">
              <button
                type="button"
                onClick={() => setReviewLang("hi")}
                aria-pressed={reviewLang === "hi"}
                className={`px-4 py-1.5 text-xs font-semibold transition ${
                  reviewLang === "hi" ? "bg-primary text-primary-foreground" : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                Hinglish
              </button>
              <button
                type="button"
                onClick={() => setReviewLang("en")}
                aria-pressed={reviewLang === "en"}
                className={`px-4 py-1.5 text-xs font-semibold transition ${
                  reviewLang === "en" ? "bg-primary text-primary-foreground" : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="hover-lift animate-fade-up rounded-2xl border border-border bg-card p-6 shadow-soft"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    aria-hidden="true"
                    className="h-4 w-4"
                    style={
                      j < t.rating
                        ? { color: "#F5A623", fill: "#F5A623" }
                        : { color: "#D8D2C6", fill: "#D8D2C6" }
                    }
                  />
                ))}
              </div>
              <Quote className="mt-3 h-6 w-6 text-primary/60" />
              <blockquote className="mt-2 text-sm text-foreground">
                &ldquo;{reviewLang === "en" ? t.quoteEn : t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5">
                <p className="font-display text-base font-bold text-foreground">{t.name}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={reviewStats.gbpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
          >
            <Star className="h-4 w-4" style={{ color: "#F5A623", fill: "#F5A623" }} aria-hidden="true" />
            Google par saare reviews dekhein
          </a>
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
                Factory-direct pricing for cafés, dhabas, hotels, wedding planners and exporters.
                Custom sizes and packaging available.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/wholesale"
                className="rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-cream"
              >
                Wholesale enquiry
              </Link>
              <a
                href={waLink("Hi, I'd like a wholesale quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
