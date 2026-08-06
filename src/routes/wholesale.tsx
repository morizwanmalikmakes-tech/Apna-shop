import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { site, waLink } from "@/lib/site";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title: "Wholesale Clay Kulhads — Bulk Orders | Kulhad Factory" },
      { name: "description", content: "Wholesale kulhads for cafés, dhabas, hotels, weddings and exporters. Factory-direct pricing, custom sizes, nationwide delivery." },
      { property: "og:title", content: "Wholesale — Kulhad Factory" },
      { property: "og:description", content: "Bulk clay kulhad orders with factory-direct pricing." },
      { property: "og:url", content: "https://www.kulhad.shop/wholesale" },
      { name: "twitter:title", content: "Wholesale — Kulhad Factory" },
      { name: "twitter:description", content: "Bulk clay kulhad orders with factory-direct pricing." },
      { property: "og:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
      { name: "twitter:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
    ],
    links: [{ rel: "canonical", href: "https://www.kulhad.shop/wholesale" }],
  }),
  component: WholesalePage,
});

const perks = [
  "Har quantity par factory se seedhi aur behtar keemat",
  "Minimum order 500 pieces se shuru",
  "Apni zarurat ke hisaab se size aur branding ki suvidha",
  "Tootne se bachane wali mazboot packing",
  "Poore Bharat me tracking ke saath delivery",
  "Export ke liye poore zaroori documents taiyaar",
];

function WholesalePage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Bulk & B2B" title="Wholesale clay kulhads, straight from the kiln." subtitle="Hum cafés, dhabon, five-star hotels, shaadi planners aur exporters ko lagataar acchi quality aur bharosemand samay par supply karte hain." />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Why buy wholesale with us</h2>
          <ul className="mt-8 space-y-4">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground/85">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
          <h3 className="font-display text-2xl font-bold text-foreground">Request a quote</h3>
          <p className="mt-2 text-sm text-muted-foreground">Tell us what you need and we'll get back to you within one working day.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const msg = `Wholesale enquiry:\nName: ${f.get("name")}\nBusiness: ${f.get("business")}\nSize/Qty: ${f.get("qty")}\nCity: ${f.get("city")}\nNotes: ${f.get("notes")}`;
              window.open(waLink(msg), "_blank");
            }}
            className="mt-6 grid gap-4"
          >
            <input required name="name" placeholder="Your name" className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <input required name="business" placeholder="Business / brand" className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <input required name="qty" placeholder="Size and quantity (e.g. 80ml × 2000)" className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <input required name="city" placeholder="City / state" className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <textarea name="notes" rows={3} placeholder="Any special requirements?" className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110">
              Send on WhatsApp
            </button>
            <p className="text-xs text-muted-foreground">
              Or call <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-semibold text-primary">{site.phone}</a>
            </p>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
