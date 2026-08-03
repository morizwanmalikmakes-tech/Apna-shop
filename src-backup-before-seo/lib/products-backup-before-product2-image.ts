import k60 from "@/assets/tea-60-new.jpeg";
import k70 from "@/assets/kulhad-70.jpg";
import k80 from "@/assets/kulhad-80.jpg";
import k90 from "@/assets/kulhad-90.jpg";
import k100 from "@/assets/kulhad-100.jpg";
import k200 from "@/assets/kulhad-200.jpg";
import k250 from "@/assets/kulhad-250.jpg";
import k300 from "@/assets/kulhad-300.jpg";

export type Product = {
  slug: string;
  name: string;
  capacity: string;
  category: "Tea" | "Beverage" | "Lassi";
  description: string;
  image: string;
};

export const products: Product[] = [
  { slug: "60ml-tea-kulhad", name: "60ml Tea Kulhad", capacity: "60 ml", category: "Tea", image: k60, description: "Petite cutting-chai size, perfect for tapris and cafés." },
  { slug: "70ml-tea-kulhad", name: "70ml Tea Kulhad", capacity: "70 ml", category: "Tea", image: k70, description: "Everyday chai kulhad with a comfortable rim." },
  { slug: "90ml-tea-kulhad", name: "90ml Tea Kulhad", capacity: "90 ml", category: "Tea", image: k90, description: "Generous chai pour with a rustic hand-thrown finish." },
  { slug: "200ml-kulhad", name: "200ml Kulhad", capacity: "200 ml", category: "Beverage", image: k200, description: "Versatile size for coffee, kadha and hot beverages." },
  { slug: "220ml-lassi-kulhad", name: "250ml Lassi Kulhad", capacity: "250 ml", category: "Lassi", image: k250, description: "Traditional lassi glass, keeps the drink naturally chilled." },
  { slug: "250ml-lassi-kulhad", name: "300ml Lassi Kulhad", capacity: "300 ml", category: "Lassi", image: k300, description: "Full-size lassi kulhad for dhabas and restaurants." },
];
