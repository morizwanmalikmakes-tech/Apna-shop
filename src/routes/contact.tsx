import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { site, waLink, FORM_ACCESS_KEY } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kulhad Factory Moradabad | WhatsApp Bulk Orders" },
      {
        name: "description",
        content:
          "Get in touch with Kulhad Factory for orders, wholesale enquiries and support. WhatsApp, phone, email and directions.",
      },
      { property: "og:title", content: "Contact Kulhad Factory" },
      { property: "og:description", content: "Reach us by WhatsApp, phone or email." },
      { property: "og:url", content: "https://www.kulhad.shop/contact" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "995" },
      { name: "twitter:title", content: "Contact Kulhad Factory" },
      { name: "twitter:description", content: "Reach us by WhatsApp, phone or email." },
      { property: "og:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
      { name: "twitter:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
    ],
    links: [{ rel: "canonical", href: "https://www.kulhad.shop/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.kulhad.shop/#business",
          name: site.name,
          url: "https://www.kulhad.shop",
          telephone: site.phone,
          email: site.email,
          image: "https://www.kulhad.shop/images/home-kulhads.webp",
          priceRange: "₹₹",
          openingHours: "Mo-Sa 09:00-18:00",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kanth Road, Kasampur",
            addressLocality: "Moradabad",
            addressRegion: "Uttar Pradesh",
            postalCode: "244501",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "29.0769223",
            longitude: "78.6384599",
          },
          hasMap: "https://maps.app.goo.gl/1Qmxsdu1WxPPww3C8",
          sameAs: [
            "https://www.instagram.com/kulhad_moradabad_wale",
            "https://maps.app.goo.gl/1Qmxsdu1WxPPww3C8",
          ],
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const name = get("name"),
      phone = get("phone"),
      email = get("email"),
      city = get("city"),
      requirement = get("requirement"),
      message = get("message");

    const errs: Record<string, string> = {};
    if (!name || name.length > 100) errs.name = "Enter a valid name (max 100 chars).";
    if (!/^[\d+()\-\s]{7,20}$/.test(phone)) errs.phone = "Enter a valid phone number.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Invalid email address.";
    if (message.length > 1000) errs.message = "Message too long (max 1000 chars).";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const msg = `New enquiry via website:
Name: ${name}
Phone: ${phone}
Email: ${email || "-"}
City: ${city || "-"}
Requirement: ${requirement || "-"}
Message: ${message || "-"}`;

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: FORM_ACCESS_KEY,
          subject: `New enquiry from ${name}${city ? " - " + city : ""}`,
          from_name: "kulhad.shop",
          replyto: email || undefined,
          name,
          phone,
          email: email || "-",
          city: city || "-",
          requirement: requirement || "-",
          message: message || "-",
          botcheck: String(f.get("botcheck") ?? ""),
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }

    const a = document.createElement("a");
    a.href = waLink(msg);
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const field =
    "rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Aao, Baat Karein"
        subtitle="Bulk order, wholesale enquiry ya kisi bhi jankari ke liye humse sampark karein."
      />

      <section className="mx-auto w-full max-w-7xl min-w-0 overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {[
            { icon: MapPin, label: "Visit", value: site.address },
            {
              icon: Phone,
              label: "Call",
              value: site.phone,
              href: `tel:${site.phone.replace(/\s/g, "")}`,
            },
            {
              icon: Phone,
              label: "Call",
              value: site.phone2,
              href: `tel:${site.phone2.replace(/\s/g, "")}`,
            },
            { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
          ].map((c) => (
            <div
              key={c.label}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </p>
                {c.href ? (
                  <a
                    href={c.href}
                    className="mt-1 block truncate font-display text-lg font-semibold text-foreground hover:text-primary"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-1 font-display text-lg font-semibold text-foreground">
                    {c.value}
                  </p>
                )}
              </div>
            </div>
          ))}

          <div className="grid grid-cols-3 gap-2 pt-2 pb-4">
            <a
              href={waLink("Hi Kulhad Factory, I'd like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-3 text-xs font-semibold text-white hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={`tel:${site.phone2.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-3 text-xs font-semibold text-primary-foreground hover:brightness-110"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-card px-3 py-3 text-xs font-semibold text-foreground hover:bg-muted"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
        >
          <h2 className="font-display text-2xl font-bold text-foreground">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill the form and we'll get back on WhatsApp.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <input
                required
                aria-label="Full name"
                autoComplete="name"
                maxLength={100}
                name="name"
                placeholder="Full name *"
                className={field}
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <input
                required
                aria-label="Phone or WhatsApp number"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                name="phone"
                placeholder="Phone / WhatsApp *"
                className={field}
              />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="email"
                aria-label="Email"
                inputMode="email"
                autoComplete="email"
                maxLength={255}
                name="email"
                placeholder="Email"
                className={field}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
            <input
              name="city"
              aria-label="City"
              autoComplete="address-level2"
              maxLength={100}
              placeholder="City"
              className={field}
            />
            <select name="requirement" aria-label="Requirement" defaultValue="" className={`${field} sm:col-span-2`}>
              <option value="" disabled>
                Requirement
              </option>
              <option>Retail order</option>
              <option>Wholesale / bulk</option>
              <option>Hotel / Restaurant supply</option>
              <option>Event / Wedding</option>
              <option>Export enquiry</option>
              <option>Other</option>
            </select>
            <div className="flex flex-col gap-1 sm:col-span-2">
              <textarea
                name="message"
                aria-label="Your message"
                rows={5}
                maxLength={1000}
                placeholder="Your message"
                className={field}
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
            </div>
          </div>

          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send via WhatsApp"}
          </button>

          {status === "sent" && (
            <p role="status" className="mt-3 text-center text-sm font-medium text-primary">
              Enquiry mil gayi! Hum jaldi WhatsApp par jawab denge.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="mt-3 text-center text-sm font-medium text-destructive">
              Enquiry save nahi hui. WhatsApp par bhej dein ya call karein.
            </p>
          )}
        </form>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
          <h2 className="font-display text-xl font-bold text-foreground">
            Factory map location
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Business address: Kanth Road, Moradabad, Uttar Pradesh 244501. Factory map location: Kasampur, Uttar Pradesh 244501.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Kulhad Factory location"
            src="https://www.google.com/maps?q=29.076938,78.638668&z=17&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </SiteLayout>
  );
}
