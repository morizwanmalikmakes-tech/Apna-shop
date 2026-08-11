export const site = {
  name: "Kulhad Factory",
  tagline: "Bringing Tradition to Every Sip",
  seoTitle: "Buy Clay Kulhads Online | Wholesale & Bulk Orders",
  description:
    "Buy handmade clay kulhads online from our Moradabad factory. 60ml-300ml tea, coffee and lassi kulhads with bulk pricing and India-wide delivery.",
  phone: "+91 99978 37697",
  phone2: "+91 87913 55306",
  whatsapp: "919997837697", // digits only, no +
  email: "kulhadshop@gmail.com",
  address: "Kanth Road, Moradabad, Uttar Pradesh 244501",
  socials: {
    instagram: "https://www.instagram.com/kulhad_moradabad_wale",
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
