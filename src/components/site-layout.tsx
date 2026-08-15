import type { ReactNode } from "react";
import { IndependenceBanner } from "./independence-banner";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { WhatsAppFloat } from "./whatsapp-float";
import { BackToTop } from "./back-to-top";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <IndependenceBanner />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-cream to-background">
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-[-10%] h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        {eyebrow && (
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="animate-fade-up mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p
            className="animate-fade-up mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg"
            style={{ animationDelay: "80ms" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
