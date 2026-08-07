import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Aap kaunsi mitti ka istemal karte hain ?",
    a: "Hum 100% prakritik nadi kinare ki mitti ka istemal karte hain, jo haath se taiyar ki jaati hai aur glaze, lead ya synthetic additives se poori tarah mukt hoti hai — bilkul food-safe.",
  },
  {
    q: "Minimum order quantity kya hai ?",
    a: "Retail: koi minimum order nahi hai. Wholesale: har size ke liye 500 pieces se shuru hota hai. Custom sizes ke liye 2000+ pieces ki zarurat hoti hai.",
  },
  {
    q: "Kya aap poore Bharat me delivery karte hain ?",
    a: "Haan, hum poore Bharat me break-safe crates ke saath delivery karte hain. Delivery aam taur par aapke shahar ke hisaab se 4–8 working days me hoti hai.",
  },
  {
    q: "Kya kulhad dobara istemal kiye ja sakte hain ?",
    a: "Haan. Istemaal ke baad ise dhokar hawa mein sukha lein. Puri tarah se saaf karne ke liye ise dhoop mein sukha sakte hain ya thodi der halka bake kar sakte hain. Istemaal ke baad pheke jaane par kulhad poori tarah se biodegradable hota hai.",
  },
  {
    q: "Kya aap custom branding ki suvidha dete hain ?",
    a: "Yes — hum aapke kulhad par aapka logo emboss, stamp ya paper-band ke roop mein laga sakte hain. Yeh suvidha 3000+ pieces ke orders ke liye uplabdh hai.",
  },
  {
    q: "Kulhad me chai kaise parosi jaani chahiye ?",
    a: "Kulhad me chai daalne se pehle use hamesha garam paani se dho lein — isse kulhad ke chhidr band ho jaate hain aur mitti ki prakritik khushboo aur bhi badh jaati hai.",
  },
  {
    q: "Kya aap export bhi karte hain ?",
    a: "Yes, hum export ke liye tayyar packaging aur zaroori documentation bhi provide karte hain. Zyada jaankari ke liye WhatsApp par humse sampark karein.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Kulhad Factory" },
      {
        name: "description",
        content:
          "Answers to common questions about our clay kulhads, wholesale orders, shipping and care.",
      },
      { property: "og:title", content: "FAQ — Kulhad Factory" },
      {
        property: "og:description",
        content: "Everything you need to know about our clay kulhads.",
      },
      { property: "og:url", content: "https://www.kulhad.shop/faq" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "995" },
      { name: "twitter:title", content: "FAQ — Kulhad Factory" },
      {
        name: "twitter:description",
        content: "Everything you need to know about our clay kulhads.",
      },
      { property: "og:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
      { name: "twitter:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
    ],
    links: [{ rel: "canonical", href: "https://www.kulhad.shop/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="FAQ"
        title="Aksar pooche jaane wale sawaal ?"
        subtitle="Hamari mitti, orders aur delivery se judi har jankari yahan milegi."
      />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </SiteLayout>
  );
}
