import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Kulhad Factory" },
      {
        name: "description",
        content:
          "Read the Terms and Conditions for purchasing clay kulhads from Kulhad Factory.",
      },
      {
        property: "og:title",
        content: "Terms & Conditions — Kulhad Factory",
      },
      {
        property: "og:description",
        content:
          "Terms for enquiries, orders, pricing, delivery and products from Kulhad Factory.",
      },
      {
        property: "og:url",
        content: "https://www.kulhad.shop/terms",
      },
        { name: "twitter:title", content: "Terms & Conditions — Kulhad Factory" },
        { property: "og:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
        { name: "twitter:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.kulhad.shop/terms",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Terms"
        title="Order se pehle zaroori jaankari."
        subtitle="Kulhad Factory se enquiry, quotation aur order karte samay in terms ko dhyan se padhein."
      />

      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-10 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              1. Product information
            </h2>
            <p className="mt-3">
              Mitti ke kulhad haath se banaye jaate hain. Isliye size, shape,
              colour aur finish me halka natural difference ho sakta hai. Ye
              handmade product ki normal quality variation hai.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              2. Pricing aur quotation
            </h2>
            <p className="mt-3">
              Website par dikhayi gayi pricing indicative ho sakti hai. Final
              price quantity, size, packing, GST, delivery location aur order
              requirements ke hisaab se confirm ki jayegi.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              3. Order confirmation
            </h2>
            <p className="mt-3">
              WhatsApp, phone ya email par enquiry bhejna order confirmation
              nahi hota. Order tab confirm mana jayega jab product availability,
              final price, payment terms aur delivery details dono taraf se
              confirm ho jayen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              4. Minimum order quantity
            </h2>
            <p className="mt-3">
              Retail, wholesale, custom branding aur export orders ke liye
              minimum quantity alag ho sakti hai. Final minimum quantity
              quotation ke samay confirm ki jayegi.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              5. Delivery
            </h2>
            <p className="mt-3">
              Delivery time product availability, order quantity, packing,
              transport aur delivery location par depend karta hai. Diya gaya
              delivery estimate expected time hota hai, guaranteed date nahi.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              6. Breakage aur replacement
            </h2>
            <p className="mt-3">
              Kulhad fragile earthenware products hain. Packing ke bawajood
              transport ke dauran breakage ho sakti hai. Breakage, shortage ya
              damage ki information delivery ke turant baad photos aur
              unboxing proof ke saath share karein. Replacement ya adjustment
              case-by-case review ke baad decide kiya jayega.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              7. Cancellation aur refund
            </h2>
            <p className="mt-3">
              Order cancel karne ya refund request ke rules order confirm hone
              se pehle customer ko bataye jayenge. Custom, branded, dispatched
              ya production me ja chuke orders par cancellation restrictions
              ho sakti hain.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">
              8. Contact
            </h2>
            <p className="mt-3">
              Order ya terms se judi enquiry ke liye{" "}
              <a
                href="https://wa.me/919997837697"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                WhatsApp par sampark karein
              </a>{" "}
              ya{" "}
              <a
                href="mailto:kulhadshop@gmail.com"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                email bhejein
              </a>
              .
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
