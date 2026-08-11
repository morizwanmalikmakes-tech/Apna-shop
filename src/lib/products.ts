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
  },

  {
    slug: "70ml-tea-kulhad",
    name: "70ml Tea Kulhad",
    capacity: "70 ml",
    price: "₹ 1.20",
    category: "Tea",
    image: k70,
    description: "Petite cutting-chai clay cup, perfect for tapris and cafés. Handmade, food-safe earthenware with natural mitti aroma.",
  },

  {
    slug: "80ml-tea-kulhad",
    name: "80ml Tea Kulhad",
    capacity: "80 ml",
    price: "₹ 1.30",
    category: "Tea",
    image: k80,
    description: "Everyday chai kulhad with a comfortable rim. 80ml clay cup for tea shops and homes — unglazed, lead-free and eco-friendly.",
  },

  {
    slug: "90ml-tea-kulhad",
    name: "90ml Tea Kulhad",
    capacity: "90 ml",
    price: "₹ 1.40",
    category: "Tea",
    image: k90,
    description: "Generous chai pour with a rustic hand-thrown finish. 90ml clay kulhad for cafés, restaurants and chai lovers.",
  },

  {
    slug: "100ml-tea-kulhad",
    name: "100ml Tea Kulhad",
    capacity: "100 ml",
    price: "₹ 1.50",
    category: "Tea",
    image: k100,
    description: "A perfect everyday size for a rich, natural tea experience. 100ml clay cup — kiln-fired at 1000°C for strength.",
  },

  {
    slug: "200ml-kulhad",
    name: "200ml Kulhad",
    capacity: "200 ml",
    price: "₹ 2.20",
    category: "Beverage",
    image: k200,
    description: "Versatile clay cup for coffee, kadha and hot beverages. 200ml kulhad — food-safe and biodegradable.",
  },

  {
    slug: "250ml-lassi-kulhad",
    name: "250ml Lassi Kulhad",
    capacity: "250 ml",
    price: "₹ 2.40",
    category: "Lassi",
    image: k250,
    description: "Traditional lassi glass that keeps the drink naturally chilled. 250ml clay kulhad for sweet shops and dhabas.",
  },

  {
    slug: "300ml-lassi-kulhad",
    name: "300ml Lassi Kulhad",
    capacity: "300 ml",
    price: "₹ 2.80",
    category: "Lassi",
    image: k300,
    description: "Full-size lassi kulhad for dhabas and restaurants. 300ml earthen glass — strong, food-safe and eco-friendly.",
  },
];
