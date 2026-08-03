export const site = {
  name: "Kulhad Factory",
  tagline: "Bringing Tradition to Every Sip",
  seoTitle: "Kulhad Factory | Premium Clay Kulhad Manufacturer in India",
  description:
    "Buy premium handmade clay kulhads for tea, coffee and lassi. Wholesale and retail supplier across India.",
  phone: "+91 99978 37697",
  whatsapp: "919997837697", // digits only, no +
  email: "morizwanmalikmakes@gmail.com",
  address: "Moradabad, Uttar Pradesh 244501",
  socials: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
    whatsapp: "#",
  },
};

export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/wholesale", label: "Wholesale" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;
