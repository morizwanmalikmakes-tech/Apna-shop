import k60 from "@/assets/tea-60-new.png";
import k70 from "@/assets/tea-70-new.png";
import k80 from "@/assets/tea-80-new.png";
import k90 from "@/assets/tea-90-new.png";
import k100 from "@/assets/tea-100-new.png";
import k200 from "@/assets/kulhad-200-new.png";
import k250 from "@/assets/new-k250.png";
import k300 from "@/assets/new-k300.png";

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
    description: "Perfect cutting-chai size for a rich, traditional experience.",
  },

  {
    slug: "70ml-tea-kulhad",
    name: "70ml Tea Kulhad",
    capacity: "70 ml",
    price: "₹ 1.20",
    category: "Tea",
    image: k70,
    description: "Petite cutting-chai size, perfect for tapris and cafés.",
  },

  {
    slug: "80ml-tea-kulhad",
    name: "80ml Tea Kulhad",
    capacity: "80 ml",
    price: "₹ 1.30",
    category: "Tea",
    image: k80,
    description: "Everyday chai kulhad with a comfortable rim.",
  },

  {
    slug: "90ml-tea-kulhad",
    name: "90ml Tea Kulhad",
    capacity: "90 ml",
    price: "₹ 1.40",
    category: "Tea",
    image: k90,
    description: "Generous chai pour with a rustic hand-thrown finish.",
  },

  {
    slug: "100ml-tea-kulhad",
    name: "100ml Tea Kulhad",
    capacity: "100 ml",
    price: "₹ 1.50",
    category: "Tea",
    image: k100,
    description: "A perfect everyday size for a rich, natural tea experience.",
  },

  {
    slug: "200ml-kulhad",
    name: "200ml Kulhad",
    capacity: "200 ml",
    price: "₹ 2.20",
    category: "Beverage",
    image: k200,
    description: "Versatile size for coffee, kadha and hot beverages.",
  },

  {
    slug: "250ml-lassi-kulhad",
    name: "250ml Lassi Kulhad",
    capacity: "250 ml",
    price: "₹ 2.40",
    category: "Lassi",
    image: k250,
    description: "Traditional lassi glass, keeps the drink naturally chilled.",
  },

  {
    slug: "300ml-lassi-kulhad",
    name: "300ml Lassi Kulhad",
    capacity: "300 ml",
    price: "₹ 2.80",
    category: "Lassi",
    image: k300,
    description: "Full-size lassi kulhad for dhabas and restaurants.",
  },
];
