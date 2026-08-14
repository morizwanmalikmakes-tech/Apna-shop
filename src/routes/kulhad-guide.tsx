import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/kulhad-guide")({
  head: () => ({
    meta: [
      { title: "Kulhad, Kullad, Kulad, Kuld — Clay Kulhad Guide & Wholesale India | Kulhad Factory" },
      {
        name: "description",
        content:
          "Kulhad, kullad, kulad, kuolhadd, kulads, kuld, kulha, kulahd — mitti ke kulhad ka complete guide. Sizes, price, wholesale India. Buy from Kulhad Factory, Moradabad (Uttar Pradesh).",
      },
      { property: "og:title", content: "Kulhad, Kullad, Kulad, Kuld — Clay Kulhad Guide India" },
      { property: "og:url", content: "https://www.kulhad.shop/kulhad-guide" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.kulhad.shop/kulhad-guide" }],
  }),
  component: KulhadGuide,
});

function KulhadGuide() {
  return (
    <SiteLayout>
      <PageHero
        title="Kulhad, Kullad, Kulad ya Kuld — Poora Guide"
        subtitle="Mitti ke kulhad ke baare me sab kuch — sahi spelling, sizes, price, wholesale India aur ek-ek cheez jo aapko jaan na chahiye."
      />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-2xl font-bold text-foreground">Kulhad, Kullad, Kulad, Kuolhadd, Kulads ya Kuld — sab ek hi hai</h2>
            <p className="mt-3 text-muted-foreground">
              Bharat me mitti ke chai ke cup ko alag-alag state, shahar aur log alag-alag tarike se likhte aur bulaate hain. Kuch common tarike hain — kulhad, kullad, kulad, kuolhadd, kulladh, kulads, kulha, kulahd, kuld, kuldhr aur kullldh. Ye sab ek hi cheez hai — haath se banaya gaya, 100% natural mitti ka earthen cup. Chai, coffee ya lassi serve karne ke liye perfect. Is guide me hum har spelling, har sawal aur har location ke baare me batate hain.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold text-foreground">Kulhad kya hota hai?</h2>
            <p className="mt-3 text-muted-foreground">
              Kulhad (ya kullad) ek mitti ka bartan hai jo kumhaar haath se banata hai aur bhatti me high temperature (1000°C) pe pakata hai. Ye glazed nahi hota, lead-free aur food-safe hota hai. Chai ya lassi kulhad me serve karne se uski asli mitti ki khushboo aur swaad badh jaata hai. Isliye chai ki dukane, cafés, dhabas, hotels aur shaadiyon me kulhad ka use itna zyada hota hai.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold text-foreground">Kulhad kahaan milta hai? (Moradabad aur aas-paas)</h2>
            <p className="mt-3 text-muted-foreground">
              Kulhad Factory Moradabad (kuch log Muradabad bhi likhte hain) Uttar Pradesh me mitti ke kulhad ka manufacturer aur wholesale supplier hai. Hum Uttar Pradesh, Delhi NCR, Haryana aur poore India me deliver karte hain. Chahe aap Lucknow, Amroha, Bijnor, Kasampur, Garhi ya kisi bhi shahar se hain — factory direct kulhad order karke kharid sakte hain. Kasampur (Moradabad) me hamari factory hai jahan kulhad bante hain.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold text-foreground">Kulhad ke sizes aur price (60ml se 300ml)</h2>
            <p className="mt-3 text-muted-foreground">Kulhad Factory me 60ml se 300ml tak ke kulhad milte hain. Current factory-direct rate retail aur wholesale dono ke liye same hai:</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border text-muted-foreground">
                    <th className="py-2 pr-4">Size</th><th className="py-2 pr-4">Best For</th><th className="py-2">Price / piece</th>
                  </tr>
                </thead>
                <tbody>
                  {[["60ml","Cutting chai","₹1.10"],["70ml","Cutting chai","₹1.20"],["80ml","Daily chai","₹1.30"],["90ml","Chai / café","₹1.40"],["100ml","Regular chai","₹1.50"],["200ml","Coffee / kadha","₹2.20"],["250ml","Lassi","₹2.40"],["300ml","Full lassi","₹2.80"]].map((r) => (
                    <tr key={r[0]} className="border-b border-border">
                      <td className="py-2 pr-4 font-semibold">{r[0]}</td><td className="py-2 pr-4">{r[1]}</td><td className="py-2 font-semibold text-primary">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold text-foreground">Kulhad online kahan se kharidein? (wholesale / bulk)</h2>
            <p className="mt-3 text-muted-foreground">
              Agar aap kulhad online kharidna ya bulk wholesale order karna chahte hain, to Kulhad Factory se seedha WhatsApp pe order karein. Chahe aapko kulhad factory, kulhad selling, kulhad wholesale price ya kuladhs kahan se online milega — hum factory-direct pricing aur mazboot packing ke saath deliver karte hain.
            </p>
            <div className="mt-4">
              <a href="https://wa.me/919997837697" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white">WhatsApp pe order karein</a>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
                      <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold text-foreground">Kulhad delivery — hamare aas-paas ke areas</h2>
<p className="mt-3 text-muted-foreground">Hum Moradabad ke aas-paas ke kai shehron aur kasaubo me kulhad deliver karte hain. Agar aap inme se kisi area me hain, to kulhad online order karke kharid sakte hain — Amroha, Seohara, Sahaspur, Dhampur, Tajpur, Noorpur, Jaspur, Thakurdwara, Dhanora, Chandpur, Joya, Gajraula, Rampur, Meerut aur Bareilly. Chahe aapko kulhad buy Amroha me ho, kulhad Dhampur me, kulhad Thakurdwara me, kulhad Joya online, kulhad Gajraula, kulhad Rampur ya kulhad Meerut me — hum deliver karte hain. Call ya WhatsApp karke apne area ki delivery aur pricing jaan lein.</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <div className="rounded-xl bg-muted px-4 py-3 text-sm"><strong>Amroha</strong> — kulhad delivery</div>
              <div className="rounded-xl bg-muted px-4 py-3 text-sm"><strong>Seohara</strong> — kulhad delivery</div>
              <div className="rounded-xl bg-muted px-4 py-3 text-sm"><strong>Sahaspur</strong> — kulhad delivery</div>
              <div className="rounded-xl bg-muted px-4 py-3 text-sm"><strong>Dhampur</strong> — kulhad delivery</div>
              <div className="rounded-xl bg-muted px-4 py-3 text-sm"><strong>Tajpur</strong> — kulhad delivery</div>
              <div className="rounded-xl bg-muted px-4 py-3 text-sm"><strong>Noorpur</strong> — kulhad delivery</div>
              <div className="rounded-xl bg-muted px-4 py-3 text-sm"><strong>Jaspur</strong> — kulhad delivery</div>
              <div className="rounded-xl bg-muted px-4 py-3 text-sm"><strong>Thakurdwara</strong> — kulhad delivery</div>
              <div className="rounded-xl bg-muted px-4 py-3 text-sm"><strong>Dhanora</strong> — kulhad delivery</div>
              <div className="rounded-xl bg-muted px-4 py-3 text-sm"><strong>Chandpur</strong> — kulhad delivery</div>
              <div className="rounded-xl bg-muted px-4 py-3 text-sm"><strong>Joya</strong> — kulhad online</div>
              <div className="rounded-xl bg-muted px-4 py-3 text-sm"><strong>Gajraula</strong> — kulhad online</div>
              <div className="rounded-xl bg-muted px-4 py-3 text-sm"><strong>Rampur</strong> — kulhad delivery</div>
              <div className="rounded-xl bg-muted px-4 py-3 text-sm"><strong>Meerut</strong> — kulhad delivery</div>
              <div className="rounded-xl bg-muted px-4 py-3 text-sm"><strong>Bareilly</strong> — kulhad delivery</div>
            </div>
          </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold text-foreground">Kulhad kyon use karein? (5 fayde)</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>• 100% natural mitti — plastic aur paper cups se behtar</li>
              <li>• Food-safe, unglazed aur lead-free</li>
              <li>• Chai/lassi ka swaad aur khushboo badhata hai</li>
              <li>• Poori tarah biodegradable — eco-friendly</li>
              <li>• Reusable bhi hai (dhoke ke baad)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold text-foreground">Kulhad ke baare me aksar pooche jaane wale sawaal</h2>
            <div className="mt-4 space-y-4">
              {[
                ["Kulhad aur kullad me kya fark hai?","Koyi fark nahi — dono ek hi cheez hai. Kulhad, kullad, kulad, kuld, kuolhadd — sab mitti ke earthen cup ke liye use hote hain. Sirf spelling alag hai."],
                ["Kulhad ka price kitna hai?","Kulhad Factory pe 60ml kulhad ₹1.10/pc se shuru hota hai. Wholesale pricing ₹1.10 se ₹2.80/pc tak hai."],
                ["Kulhad kitne ml ke milte hain?","60ml, 70ml, 80ml, 90ml, 100ml, 200ml, 250ml aur 300ml."],
                ["Kulhad wholesale kahan se kharidu?","Kulhad Factory (Moradabad) se factory-direct bulk order karein. Kasampur me factory hai, poore UP aur India me delivery."],
                ["Kulhad Moradabad / Muradabad me milta hai?","Haan — Kulhad Factory Moradabad (Muradabad) se hi kulhad bante aur supply hote hain."],
                ["Kya kulhad reusable hai?","Kulhad reusable hai (dhoke ke baad), aur phir bhi fekne pe poori tarah biodegradable hai."]
              ].map((f, i) => (
                <div key={i} className="rounded-xl bg-muted p-4">
                  <p className="text-sm font-semibold">{f[0]}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{f[1]}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-primary p-6 text-center text-primary-foreground">
            <h2 className="font-display text-xl font-bold">Ready to order mitti ke kulhad?</h2>
            <p className="mt-2 text-sm">Bulk ya wholesale order ke liye abhi WhatsApp karein — fast reply + factory-direct pricing.</p>
            <a href="https://wa.me/919997837697" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary">WhatsApp Order karein</a>
          </div>
        </article>
      </section>
    </SiteLayout>
  );
}
