import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { nav, site, waLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">
              <img src="/kulhad-logo.webp" alt="Kulhad Factory logo" className="h-8 w-8 object-contain" />
            </span>
            <span className="font-display text-xl font-bold">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-secondary-foreground/75">
            {site.tagline}. Handcrafted clay kulhads made from 100% natural earth — food-safe,
            eco-friendly, made in India.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={site.socials.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full bg-secondary-foreground/10 transition hover:bg-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-secondary-foreground/70">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="text-secondary-foreground/85 transition hover:text-primary"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/privacy"
                className="text-secondary-foreground/85 transition hover:text-primary"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-secondary-foreground/85 transition hover:text-primary"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-secondary-foreground/70">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/85">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href={`tel:${site.phone2.replace(/\s/g, "")}`} className="hover:text-primary">
                {site.phone2}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-secondary-foreground/70">
            WhatsApp Updates
          </h4>
          <p className="mt-4 text-sm text-secondary-foreground/85">
            Product updates, new sizes aur wholesale offers ke liye WhatsApp par message karein.
          </p>
          <a
            href={waLink("Hi Kulhad Factory, please send me product and wholesale updates.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Get updates on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-secondary-foreground/60 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>Handcrafted with clay, fire and love.</p>
        </div>
      </div>
    </footer>
  );
}
