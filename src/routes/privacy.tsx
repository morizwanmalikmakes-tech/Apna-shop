import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Kulhad Factory" },
      {
        name: "description",
        content:
          "Read the Privacy Policy for Kulhad Factory and learn how we handle enquiries and customer information.",
      },
      {
        property: "og:title",
        content: "Privacy Policy — Kulhad Factory",
      },
      {
        property: "og:description",
        content:
          "How Kulhad Factory handles information shared through enquiries and orders.",
      },
      {
        property: "og:url",
        content: "https://www.kulhad.shop/privacy",
      },
        { name: "twitter:title", content: "Privacy Policy — Kulhad Factory" },
        { property: "og:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
        { name: "twitter:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.kulhad.shop/privacy",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Privacy"
        title="Aapki privacy hamare liye zaroori hai."
        subtitle="Hum aapki information ka istemal sirf enquiry, order aur customer support ke liye karte hain."
      />

      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-10 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              1. Hum kaunsi information lete hain?
            </h2>
            <p className="mt-3">
              Jab aap humse WhatsApp, phone, email ya website ke contact form
              ke madhyam se sampark karte hain, to hum aapka naam, phone number,
              email address, city, order details aur aapke dwara bheji gayi
              anya information prapt kar sakte hain.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              2. Information ka istemal kaise hota hai?
            </h2>
            <p className="mt-3">
              Hum is information ka istemal aapki enquiry ka jawab dene,
              product availability aur pricing batane, order process karne,
              delivery se judi baat karne aur customer support dene ke liye
              karte hain.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              3. Kya hum information share karte hain?
            </h2>
            <p className="mt-3">
              Hum aapki personal information ko bechte nahi hain. Order ya
              delivery poori karne ke liye zaroorat padne par information
              trusted service providers ya delivery partners ke saath share
              ki ja sakti hai.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              4. WhatsApp aur third-party services
            </h2>
            <p className="mt-3">
              Website ke WhatsApp, phone aur email buttons aapko external
              services par le ja sakte hain. Un services ki privacy policies
              unke apne rules ke anusaar hoti hain.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              5. Information ki security
            </h2>
            <p className="mt-3">
              Hum customer information ko zaroorat ke hisaab se handle karte
              hain aur unauthorized access se bachane ke liye reasonable
              precautions rakhte hain. Internet par data transfer ko
              completely risk-free guarantee nahi kiya ja sakta.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              6. Aapke rights
            </h2>
            <p className="mt-3">
              Agar aap apni information ko update, correct ya delete karwana
              chahte hain, to humein email ya phone par contact karein. Hum
              reasonable request par madad karenge.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              7. Contact
            </h2>
            <p className="mt-3">
              Privacy se judi kisi bhi enquiry ke liye{" "}
              <a
                href="mailto:kulhadshop@gmail.com"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                kulhadshop@gmail.com
              </a>{" "}
              par sampark karein.
            </p>
          </section>

          <p className="border-t border-border pt-6 text-sm">
            Last updated: August 2026
          </p>
        </div>
      </main>
    </SiteLayout>
  );
}
