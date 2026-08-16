const fs = require("fs");
// 1) site-header logo
let h = fs.readFileSync("src/components/site-header.tsx", "utf8");
h = h.replace('<span style={{ background: "linear-gradient(180deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)" }}\n            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-primary-foreground font-display text-lg font-bold shadow-soft">', '<span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-clay to-clay-dark text-primary-foreground font-display text-lg font-bold shadow-soft">');
fs.writeFileSync("src/components/site-header.tsx", h);
// 2) whatsapp-float
let w = fs.readFileSync("src/components/whatsapp-float.tsx", "utf8");
w = w.replace("rounded-full tricolor-border text-white shadow-lg transition hover:scale-105", "rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105");
fs.writeFileSync("src/components/whatsapp-float.tsx", w);
// 3) product-card
let p = fs.readFileSync("src/components/product-card.tsx", "utf8");
p = p.replace('{ product, tricolorRequest = false }: { product: Product; tricolorRequest?: boolean }', '{ product }: { product: Product }');
p = p.replace('            style={tricolorRequest ? { background: "linear-gradient(180deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)", color: "#333333", borderColor: "#333333" } : undefined}\n', '');
fs.writeFileSync("src/components/product-card.tsx", p);
// 4) index.tsx
let i = fs.readFileSync("src/routes/index.tsx", "utf8");
i = i.replace('<h1 style={{ backgroundImage: "linear-gradient(180deg, #FF9933 0%, #FFF4E0 50%, #138808 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" }} className="mt-5 bg-clip-text font-display text-4xl font-bold leading-[1.05] text-transparent sm:text-5xl md:text-6xl">', '<h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">');
i = i.replace('style={{ background: "linear-gradient(180deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)" }}\n', '');
i = i.replace('<ProductCard key={p.slug} product={p} tricolorRequest />', '<ProductCard key={p.slug} product={p} />');
i = i.replace('              style={{ background: "linear-gradient(180deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)" }}\n              className="mt-6 inline-flex rounded-full border border-[#333333] px-6 py-3 text-sm font-semibold text-[#333333] hover:brightness-105"', '              className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"');
fs.writeFileSync("src/routes/index.tsx", i);
// 5) styles.css
let c = fs.readFileSync("src/styles.css", "utf8");
c = c.replace(/\n\/\* ==== Independence Day tricolor \(15 Aug\) ==== \*\/[\s\S]*?\.tricolor-border \{[\s\S]*?\n\}\n/, '\n');
fs.writeFileSync("src/styles.css", c);
// 6) site-layout + delete banner
let sl = fs.readFileSync("src/components/site-layout.tsx", "utf8");
sl = sl.replace('import { IndependenceBanner } from "./independence-banner";\n', '');
sl = sl.replace('      <IndependenceBanner />\n', '');
fs.writeFileSync("src/components/site-layout.tsx", sl);
if (fs.existsSync("src/components/independence-banner.tsx")) fs.unlinkSync("src/components/independence-banner.tsx");
console.log("DONE - tricolor removed");
