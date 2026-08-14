import k60 from "@/assets/tea-60-new.webp";
import k70 from "@/assets/tea-70-new.webp";
import k80 from "@/assets/tea-80-new.webp";
import k90 from "@/assets/tea-90-new.webp";
import k100 from "@/assets/tea-100-new.webp";
import k200 from "@/assets/kulhad-200-new.webp";
import k250 from "@/assets/new-k250.webp";
import k300 from "@/assets/new-k300.webp";

export type Product = {
  slug: string;
  name: string;
  capacity: string;
  price: string;
  category: "Tea" | "Beverage" | "Lassi";
  description: string;
  image: string;
  retailMin: number;
  wholesaleMoq: number;
  packing: string;
  details: string[];
  faqs: { q: string; a: string }[];
};

export const products: Product[] = [
  {
    slug: "60ml-tea-kulhad",
    name: "60ml Tea Kulhad",
    capacity: "60 ml",
    price: "₹ 1.10",
    category: "Tea",
    image: k60,
    description: "Perfect cutting-chai size clay cup for a rich, traditional experience. Food-safe, unglazed earthen kulhad — ideal for tea stalls, tapris and cafés.",
    retailMin: 100,
    wholesaleMoq: 500,
    packing: "50 pieces per crate (mazboot, tootne-se-bachane wali packing)",
    details: [
      "100% natural, unglazed earthenware — no glaze, no lead",
      "Kiln-fired at 1000°C for strength and food safety",
      "Perfect cutting-chai size for chai tapris, dhabas and cafés",
      "Biodegradable and eco-friendly — a better alternative to paper and plastic cups",
    ],
    faqs: [
      { q: "60ml kulhad ka minimum order kitna hai?", a: "Retail minimum 100 pieces hai. Wholesale MOQ 500 pieces hai, aur current per-piece rate dono order types ke liye same hai." },
      { q: "60ml tea kulhad ka price per piece kitna hai?", a: "60ml Tea Kulhad ka current price ₹1.10 per piece hai; retail aur wholesale dono ke liye same rate hai." },
      { q: "Delivery kitne din me hoti hai?", a: "Hum desh bhar me dispatch karte hain. Delivery time location ke hisaab se 3-7 din lagte hain, packing mazboot crates me hoti hai." },
    ],
  },

  {
    slug: "70ml-tea-kulhad",
    name: "70ml Tea Kulhad",
    capacity: "70 ml",
    price: "₹ 1.20",
    category: "Tea",
    image: k70,
    description: "Petite cutting-chai clay cup, perfect for tapris and cafés. Handmade, food-safe earthenware with natural mitti aroma.",
    retailMin: 100,
    wholesaleMoq: 500,
    packing: "50 pieces per crate (mazboot, tootne-se-bachane wali packing)",
    details: [
      "Handmade in Moradabad from 100% natural clay",
      "Unglazed, lead-free and food-safe earthenware",
      "Ideal for cutting-chai at tapris, cafés and food stalls",
      "Retains natural mitti aroma that enhances the chai experience",
    ],
    faqs: [
      { q: "70ml kulhad ka MOQ kya hai?", a: "Retail minimum 100 pieces aur wholesale MOQ 500 pieces hai." },
      { q: "70ml tea kulhad kitne ka milta hai?", a: "70ml Tea Kulhad ka current price ₹1.20 per piece hai; retail aur wholesale dono ke liye same rate hai." },
      { q: "Kya ye kulhad eco-friendly hai?", a: "Haan, ye 100% biodegradable clay kulhad hai — plastic aur paper cups ka eco-friendly alternative." },
    ],
  },

  {
    slug: "80ml-tea-kulhad",
    name: "80ml Tea Kulhad",
    capacity: "80 ml",
    price: "₹ 1.30",
    category: "Tea",
    image: k80,
    description: "Everyday chai kulhad with a comfortable rim. 80ml clay cup for tea shops and homes — unglazed, lead-free and eco-friendly.",
    retailMin: 100,
    wholesaleMoq: 500,
    packing: "50 pieces per crate (mazboot, tootne-se-bachane wali packing)",
    details: [
      "Comfortable rim size — perfect for daily chai at tea shops",
      "Food-safe, unglazed and lead-free earthenware",
      "Suitable for homes, cafés, restaurants and chai stalls",
      "Strong kiln-fired body that holds hot chai comfortably",
    ],
    faqs: [
      { q: "80ml kulhad ka wholesale price kya hai?", a: "80ml Tea Kulhad ka current price ₹1.30 per piece hai; retail aur wholesale dono ke liye same rate hai." },
      { q: "80ml kulhad kis quantity me order kar sakte hain?", a: "Retail minimum 100 pieces aur wholesale MOQ 500 pieces hai. Isse upar custom quantities bhi available hain." },
      { q: "Kya 80ml kulhad chai shops ke liye sahi hai?", a: "Haan, ye daily chai ke liye perfect everyday size hai, chai shops aur homes dono ke liye." },
    ],
  },

  {
    slug: "90ml-tea-kulhad",
    name: "90ml Tea Kulhad",
    capacity: "90 ml",
    price: "₹ 1.40",
    category: "Tea",
    image: k90,
    description: "Generous chai pour with a rustic hand-thrown finish. 90ml clay kulhad for cafés, restaurants and chai lovers.",
    retailMin: 100,
    wholesaleMoq: 500,
    packing: "50 pieces per crate (mazboot, tootne-se-bachane wali packing)",
    details: [
      "Rustic hand-thrown finish with a generous pour size",
      "Perfect for cafés, restaurants and premium chai brands",
      "100% natural clay, unglazed and food-safe",
      "Adds a traditional, earthy charm to the chai experience",
    ],
    faqs: [
      { q: "90ml kulhad ka price per piece kitna hai?", a: "90ml Tea Kulhad ka current price ₹1.40 per piece hai; retail aur wholesale dono ke liye same rate hai." },
      { q: "90ml kulhad ka MOQ kya hai?", a: "Retail minimum 100 pieces aur wholesale MOQ 500 pieces hai." },
      { q: "Kya custom branding possible hai?", a: "Kuch cases me custom sizes available hain. Enquiry ke liye WhatsApp pe contact karein." },
    ],
  },

  {
    slug: "100ml-tea-kulhad",
    name: "100ml Tea Kulhad",
    capacity: "100 ml",
    price: "₹ 1.50",
    category: "Tea",
    image: k100,
    description: "A perfect everyday size for a rich, natural tea experience. 100ml clay cup — kiln-fired at 1000°C for strength.",
    retailMin: 100,
    wholesaleMoq: 500,
    packing: "50 pieces per crate (mazboot, tootne-se-bachane wali packing)",
    details: [
      "Ideal everyday size for a rich, natural tea experience",
      "Kiln-fired at 1000°C for added strength and durability",
      "Food-safe, unglazed and lead-free natural clay",
      "Great for chai stalls, cafés and home use",
    ],
    faqs: [
      { q: "100ml kulhad ka rate kya hai?", a: "100ml Tea Kulhad ₹1.50 per piece factory-direct price par available hai." },
      { q: "100ml kulhad kitne pieces ke order me aata hai?", a: "Retail minimum 100 pieces aur wholesale MOQ 500 pieces hai. Packing 50 pieces per crate me hoti hai." },
      { q: "Kya 100ml kulhad bake/kiln fired hai?", a: "Haan, ye 1000°C par kiln-fired hai, isliye ye majboot aur food-safe hai." },
    ],
  },

  {
    slug: "200ml-kulhad",
    name: "200ml Kulhad",
    capacity: "200 ml",
    price: "₹ 2.20",
    category: "Beverage",
    image: k200,
    description: "Versatile clay cup for coffee, kadha and hot beverages. 200ml kulhad — food-safe and biodegradable.",
    retailMin: 100,
    wholesaleMoq: 300,
    packing: "50 pieces per crate (mazboot, tootne-se-bachane wali packing)",
    details: [
      "Versatile size for coffee, kadha, and other hot beverages",
      "Food-safe, unglazed natural clay — biodegradable and eco-friendly",
      "Perfect for cafés, restaurants and coffee outlets",
      "Retains warmth and natural earthy flavour of the drink",
    ],
    faqs: [
      { q: "200ml kulhad ka price kya hai?", a: "200ml Kulhad ka current price ₹2.20 per piece hai; retail aur wholesale dono ke liye same rate hai." },
      { q: "200ml kulhad ka MOQ kya hai?", a: "Retail minimum 100 pieces aur wholesale MOQ 300 pieces hai." },
      { q: "200ml kulhad kis cheez ke liye use hota hai?", a: "Coffee, kadha aur doosre hot beverages ke liye versatile clay cup hai." },
    ],
  },

  {
    slug: "250ml-lassi-kulhad",
    name: "250ml Lassi Kulhad",
    capacity: "250 ml",
    price: "₹ 2.40",
    category: "Lassi",
    image: k250,
    description: "Traditional lassi glass that keeps the drink naturally chilled. 250ml clay kulhad for sweet shops and dhabas.",
    retailMin: 100,
    wholesaleMoq: 300,
    packing: "50 pieces per crate (mazboot, tootne-se-bachane wali packing)",
    details: [
      "Traditional lassi glass that keeps the drink naturally cool",
      "Perfect for sweet shops, dhabas and lassi bars",
      "100% natural clay, unglazed and food-safe",
      "Enhances the authentic dhaba-style lassi experience",
    ],
    faqs: [
      { q: "250ml lassi kulhad ka rate kya hai?", a: "250ml Lassi Kulhad ka current price ₹2.40 per piece hai; retail aur wholesale dono ke liye same rate hai." },
      { q: "250ml kulhad ka MOQ kya hai?", a: "Retail minimum 100 pieces aur wholesale MOQ 300 pieces hai. Packing 50 pieces per crate hoti hai." },
      { q: "Kya 250ml kulhad lassi ko thanda rakhta hai?", a: "Haan, clay ka natural property hai ki ye drink ko naturally chilled rakhta hai." },
    ],
  },

  {
    slug: "300ml-lassi-kulhad",
    name: "300ml Lassi Kulhad",
    capacity: "300 ml",
    price: "₹ 2.80",
    category: "Lassi",
    image: k300,
    description: "Full-size lassi kulhad for dhabas and restaurants. 300ml earthen glass — strong, food-safe and eco-friendly.",
    retailMin: 100,
    wholesaleMoq: 300,
    packing: "50 pieces per crate (mazboot, tootne-se-bachane wali packing)",
    details: [
      "Full-size lassi kulhad for dhabas, restaurants and lassi bars",
      "Strong, food-safe and eco-friendly earthenware",
      "Naturally keeps lassi cool and adds authentic earthy flavour",
      "100% natural clay, unglazed and biodegradable",
    ],
    faqs: [
      { q: "300ml lassi kulhad ka price kya hai?", a: "300ml Lassi Kulhad ka current price ₹2.80 per piece hai; retail aur wholesale dono ke liye same rate hai." },
      { q: "300ml kulhad ka MOQ kya hai?", a: "Retail minimum 100 pieces aur wholesale MOQ 300 pieces hai." },
      { q: "300ml kulhad kahan use hota hai?", a: "Dhabas, restaurants, sweet shops aur lassi bars me full-size serving ke liye use hota hai." },
    ],
  },
];
