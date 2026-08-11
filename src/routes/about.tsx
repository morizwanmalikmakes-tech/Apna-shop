import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import aboutMachineVideo from "@/assets/about-machine-video.mp4";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kulhad Factory | Clay Kulhad Manufacturer, Moradabad" },
      {
        name: "description",
        content:
          "Kulhad Factory crafts food-safe, eco-friendly clay kulhads in Moradabad, India — supplying cafés, dhabas, hotels and exporters nationwide.",
      },
      { property: "og:title", content: "About Kulhad Factory" },
      {
        property: "og:description",
        content: "Our story, craftsmanship and commitment to natural clay.",
      },
      { property: "og:url", content: "https://www.kulhad.shop/about" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "995" },
      { name: "twitter:title", content: "About Kulhad Factory" },
      {
        name: "twitter:description",
        content: "Our story, craftsmanship and commitment to natural clay.",
      },
      { property: "og:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
      { name: "twitter:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
    ],
    links: [{ rel: "canonical", href: "https://www.kulhad.shop/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Hamari Kahani"
        title="Moradabad mein bana. Har jagah pasand kiya gaya."
        subtitle="Kumharon ka ek parivaar, jo mitti ke kulhad ke zariye chai ko uski asli jadon se jod raha hai — ek-ek kulhad ke saath."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
        <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-warm">
          <video
            src={aboutMachineVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Kulhad making process"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-5 text-muted-foreground">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Mitti ki Virasat
          </h2>
          <p>
            Kulhad Factory ek simple soch se shuru hui: mitti ke kulhad mein chai ka asli swaad aur
            sachchai honi chahiye. Hamara kaam Moradabad mein hai — ek aisi jagah jahan peedhiyon se
            kushal kumhar mitti ke bartan banate aa rahe hain. Unhone humein sikhaya ki sabr bhi ek
            kaccha maal hota hai.
          </p>
          <p>
            Har kulhad haath se banaya jaata hai, Uttar Pradesh ke aasman ke neeche dhoop mein
            sukhaya jaata hai, aur 1000°C se zyada taapmaan par bhatti mein pakaya jaata hai. Isse
            bina lead aur bina glaze ka poori tarah food-safe kulhad tayyar hota hai. Koi shortcut
            nahi. Koi chemical nahi. Sirf mitti, aag, paani aur samay.
          </p>
          <p>
            Aaj hum chaiwalon, cafés, five-star hotels, wedding planners aur exporters ko India aur
            videshon tak kulhad supply karte hain. Humein garv hai ki ek plastic cup ki jagah aisa
            kulhad diya ja sakta hai jise aakhir mein wapas mitti mein milaya ja sakta hai.
          </p>
        </div>
      </section>
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            ["Craft", "Handmade in small batches by skilled potters."],
            ["Purity", "100% natural clay — no glaze, no lead, no plastic."],
            ["Scale", "7 Lakh+ pieces monthly with consistent quality."],
          ].map(([t, b]) => (
            <div key={t}>
              <h3 className="font-display text-2xl font-bold">{t}</h3>
              <p className="mt-2 text-secondary-foreground/80">{b}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
