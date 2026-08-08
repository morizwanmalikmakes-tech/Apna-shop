import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-clay to-clay-dark text-primary-foreground font-display text-lg font-bold shadow-soft">
            <img src="/kulhad-logo.webp" alt="Kulhad Factory logo" className="h-8 w-8 object-contain" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
              {site.name}
            </span>
            <span className="hidden text-xs uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Pure Clay · Handcrafted
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "bg-secondary/10 text-secondary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/privacy"
            className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-muted hover:text-foreground"
            activeProps={{ className: "bg-secondary/10 text-secondary" }}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-muted hover:text-foreground"
            activeProps={{ className: "bg-secondary/10 text-secondary" }}
          >
            Terms & Conditions
          </Link>
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background lg:hidden",
          open ? "max-h-[32rem]" : "max-h-0",
          "transition-[max-height] duration-300 ease-out",
        )}
      >
        <nav className="flex flex-col px-4 py-2 sm:px-6">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/privacy"
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
            activeProps={{ className: "text-primary" }}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
            activeProps={{ className: "text-primary" }}
          >
            Terms & Conditions
          </Link>
        </nav>
      </div>
    </header>
  );
}
