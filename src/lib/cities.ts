export type NearbyArea = { name: string; to: string };

export type City = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  sub: string;
  nearby: NearbyArea[];
};

export const cities: City[] = [
  {
    slug: "kulhad-amroha",
    name: "Amroha",
    title: "Kulhad Supplier Amroha — Wholesale Price | Kulhad Factory",
    description: "Amroha me mitti ke kulhad supplier — 60ml-300ml, factory-direct price. Shaadi halls, chai stalls ke liye bulk order. Fast delivery, WhatsApp quote.",
    intro: "Amroha (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Moradabad ke paas. Amroha ke aam ke orchards aur shandar mandi — yahan shaadi halls, tea stalls aur sweet shops, sabko bulk kulhad supply karte hain. Moradabad factory se approx 25 km — delivery 1-2 din me.",
    sub: "Kulhad Factory se Amroha tak kulhad delivery time par pahunchta hai, mazboot packing ke saath. Amroha ke chai stalls, cafés aur dhabas ko factory-direct wholesale price par food-safe, unglazed aur lead-free mitti ke kulhad milte hain. Hum 60ml se 300ml tak ke kulhad deliver karte hain — chai, coffee aur lassi ke liye.",
    nearby: [{ name: "Dhanaura", to: "/kulhad-dhanora" }, { name: "Gajraula", to: "/kulhad-gajraula" }, { name: "Kashipur", to: "/kulhad-kashipur" }, { name: "Hasanpur", to: "/products" }],
  },
  {
    slug: "kulhad-bareilly",
    name: "Bareilly",
    title: "Mitti Ke Kulhad Bareilly | Wholesale Supplier | Kulhad Factory",
    description: "Bareilly me clay kulhad supplier — cafes, dhabas, caterers ke liye wholesale mitti ke kulhad. Per-piece price, mazboot packing, time par delivery. WhatsApp quote.",
    intro: "Bareilly (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Bareilly ke mashhoor bazaars aur cafe culture — restaurants, dhabas aur shaadi planners ke liye time par kulhad supply. Moradabad factory se approx 110 km — delivery 3-4 din me.",
    sub: "Bareilly ke tea café owners aur dhabas Kulhad Factory se wholesale kulhad order karte hain. 60ml se 300ml tak sab sizes available.",
    nearby: [{ name: "Shahjahanpur", to: "/products" }, { name: "Pilibhit", to: "/products" }, { name: "Rampur", to: "/kulhad-rampur" }],
  },
  {
    slug: "kulhad-rudrapur",
    name: "Rudrapur",
    title: "Kulhad Wholesale Rudrapur — Factory Rate | Kulhad Factory",
    description: "Rudrapur me kulhad wholesale rate par chahiye? 60ml-300ml mitti ke kulhad, bulk order par factory price. Mazboot packing aur fast delivery. WhatsApp karein.",
    intro: "Rudrapur (Uttarakhand) — mitti ke kulhad wholesale aur bulk order. Rudrapur ke industrial area, canteens aur highway dhabas ke liye regular kulhad supply. Moradabad factory se approx 100 km — delivery 3-4 din me.",
    sub: "Rudrapur ke cafés, canteens aur chai dukano tak Kulhad Factory kulhad deliver karta hai. Mazboot packing, time par delivery aur factory pricing.",
    nearby: [{ name: "Bijnor", to: "/products" }, { name: "Budaun", to: "/kulhad-budaun" }, { name: "Noorpur", to: "/kulhad-noorpur" }],
  },
  {
    slug: "kulhad-budaun",
    name: "Budaun",
    title: "Budaun Kulhad Supplier | Mitti Ke Kulhad | Kulhad Factory",
    description: "Budaun ke tea stalls, sweet shops, cafes ke liye kulhad supplier. Mitti ke kulhad wholesale, factory-direct price, 3-7 din me delivery. WhatsApp par order.",
    intro: "Budaun (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Budaun ke purane bazaar, mithai ki dukaanein aur caterers ke liye bharosemand wholesale kulhad supply. Moradabad factory se approx 90 km — delivery 2-3 din me.",
    sub: "Budaun me kulhad wholesale — food-safe clay kulhads, factory-direct pricing. Kulhad Factory se bulk order karke time par delivery paayein.",
    nearby: [{ name: "Nagina", to: "/kulhad-nagina" }, { name: "Noorpur", to: "/kulhad-noorpur" }, { name: "Bijnor", to: "/products" }],
  },
  {
    slug: "kulhad-dhanora",
    name: "Dhanora",
    title: "Kulhad Price Dhanora — Bulk Order Supply | Kulhad Factory",
    description: "Dhanora me mitti ke kulhad chahiye? Shaadi aur events ke liye bulk order — wholesale price, tootne-se-bachane wali packing, time par delivery.",
    intro: "Dhanora (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Dhanora aur aas-paas ke gaon — shaadi aur event ke orders dhyan se pack karke time par pahunchte hain. Moradabad factory se approx 30 km — delivery 1-2 din me.",
    sub: "Dhanora me kulhad wholesale — mitti ke kulhad chai, coffee aur lassi ke liye. Kulhad Factory se bulk order karke delivery paayein.",
    nearby: [{ name: "Amroha", to: "/kulhad-amroha" }, { name: "Gajraula", to: "/kulhad-gajraula" }, { name: "Hasanpur", to: "/products" }],
  },
  {
    slug: "kulhad-gajraula",
    name: "Gajraula",
    title: "Gajraula Kulhad Wholesale | Clay Cup Supplier | Kulhad Factory",
    description: "Gajraula industrial area ke cafes, canteens, dhabas ke liye clay cup supplier. Kulhad wholesale, factory-direct price, regular supply ka bharosa.",
    intro: "Gajraula (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Gajraula ka industrial area aur highway dhabas — dono ke liye regular kulhad supply ka bharosa. Moradabad factory se approx 45 km — delivery 2-3 din me.",
    sub: "Gajraula ke business owners Kulhad Factory se wholesale kulhad lete hain. Food-safe, unglazed mitti ke kulhad chai aur lassi ke liye.",
    nearby: [{ name: "Amroha", to: "/kulhad-amroha" }, { name: "Dhanaura", to: "/kulhad-dhanora" }, { name: "Hasanpur", to: "/products" }],
  },
  {
    slug: "kulhad-jaspur",
    name: "Jaspur",
    title: "Kulhad Jaspur — Supplier & Delivery | Kulhad Factory",
    description: "Jaspur me kulhad supplier — chai aur lassi shops ke liye mitti ke kulhad wholesale rate par. Ghar baithe bulk order, fast delivery. WhatsApp quote.",
    intro: "Jaspur (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Jaspur ki chai shops aur lassi corners — wholesale kulhad par factory-direct rate, koi beech ka daam nahi. Moradabad factory se approx 60 km — delivery 2-3 din me.",
    sub: "Jaspur me kulhad wholesale delivery — chai ki dukano aur cafés ke liye. Kulhad Factory se factory-direct price par kulhad order karein.",
    nearby: [{ name: "Kashipur", to: "/products" }, { name: "Thakurdwara", to: "/kulhad-thakurdwara" }, { name: "Moradabad", to: "/kulhad-guide" }],
  },
  {
    slug: "kulhad-kashipur",
    name: "Kashipur",
    title: "Kashipur Mitti Ke Kulhad | Wholesale Rate | Kulhad Factory",
    description: "Kashipur me mitti ke kulhad wholesale — chai shops, dhabas aur shaadi ke bulk order. Kam price, mazboot packing, time par delivery. WhatsApp karein.",
    intro: "Kashipur (Uttarakhand) — mitti ke kulhad wholesale aur bulk order. Kashipur ke industrial area, chai shops aur lassi corners tak bulk kulhad orders ki time par delivery. Moradabad factory se approx 80 km — delivery 2-3 din me.",
    sub: "Kashipur me kulhad online — mitti ke kulhad wholesale price par. Kulhad Factory se order karein, chai aur lassi ke liye perfect, factory-direct rate.",
    nearby: [{ name: "Amroha", to: "/kulhad-amroha" }, { name: "Dhanaura", to: "/kulhad-dhanora" }, { name: "Gajraula", to: "/kulhad-gajraula" }],
  },
  {
    slug: "kulhad-meerut",
    name: "Meerut",
    title: "Kulhad Supplier Meerut — Clay Kulhad Price | Kulhad Factory",
    description: "Meerut me kulhad supplier — restaurants, cafes, chai tapri ke liye clay kulhad wholesale. Per-piece factory price, fast delivery. Quote lein.",
    intro: "Meerut (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Meerut — sports goods aur cafes ka shehar. Tapri se restaurant tak, kulhad supply time par.",
    sub: "Meerut ke cafés aur chai dukano tak Kulhad Factory kulhad deliver karta hai. Factory-direct pricing aur mazboot packing ke saath. Moradabad factory se approx 70 km — delivery 2-3 din me.",
    nearby: [{ name: "Modipuram", to: "/products" }, { name: "Roorkee", to: "/products" }, { name: "Muzaffarnagar", to: "/products" }],
  },
  {
    slug: "kulhad-noorpur",
    name: "Noorpur",
    title: "Noorpur Kulhad Wholesale | Factory Direct | Kulhad Factory",
    description: "Noorpur ki sweet shops aur dhabas ke liye mitti ke kulhad seedha factory se. Wholesale bulk price, eco-friendly clay cups, time par delivery.",
    intro: "Noorpur (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Noorpur ki sweet shops aur dhabas — eco-friendly kulhad, wholesale par factory-direct price. Moradabad factory se approx 40 km — delivery 2-3 din me.",
    sub: "Noorpur me kulhad wholesale — 100% natural mitti, lead-free aur biodegradable. Kulhad Factory se bulk order karke delivery paayein.",
    nearby: [{ name: "Budaun", to: "/kulhad-budaun" }, { name: "Nagina", to: "/kulhad-nagina" }, { name: "Bijnor", to: "/products" }],
  },
  {
    slug: "kulhad-rampur",
    name: "Rampur",
    title: "Rampur Kulhad Supplier — Bulk Price | Kulhad Factory",
    description: "Rampur me kulhad wholesale supplier — restaurants, caterers ke liye mitti ke kulhad. Strong packing, factory price, time par delivery. WhatsApp order.",
    intro: "Rampur (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Rampur ki mashhoor khana tradition — restaurants aur caterers ke liye strong packing ke saath kulhad supply. Moradabad factory se approx 65 km — delivery 2-3 din me.",
    sub: "Rampur me kulhad wholesale delivery — chai stalls, cafés aur hotels ke liye. Kulhad Factory se factory-direct order karein.",
    nearby: [{ name: "Bareilly", to: "/kulhad-bareilly" }, { name: "Moradabad", to: "/kulhad-guide" }, { name: "Bilaspur", to: "/products" }],
  },
  {
    slug: "kulhad-sambhal",
    name: "Sambhal",
    title: "Sambhal Kulhad Supplier — Wholesale Rate | Kulhad Factory",
    description: "Sambhal me mitti ke kulhad supplier — 60ml-300ml wholesale price par. Chai stalls, sweet shops aur shaadi ke bulk order. Fast delivery, WhatsApp quote.",
    intro: "Sambhal (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Sambhal ke bazaar, chai stalls aur sweet shops ke liye har size ka kulhad. Moradabad factory se approx 40 km — delivery 1-2 din me.",
    sub: "Sambhal me kulhad wholesale — eco-friendly, unglazed mitti ke kulhad chai aur lassi ke liye. Kulhad Factory se bulk order karein, time par delivery aur factory-direct rate.",
    nearby: [{ name: "Bijnor", to: "/products" }, { name: "Budaun", to: "/kulhad-budaun" }, { name: "Noorpur", to: "/kulhad-noorpur" }],
  },
  {
    slug: "kulhad-nagina",
    name: "Nagina",
    title: "Nagina Kulhad Price — Wholesale Supply | Kulhad Factory",
    description: "Nagina ke tea stalls aur sweet shops ke liye kulhad wholesale. Mitti ke kulhad factory price par, fresh stock, quick dispatch. WhatsApp par quote.",
    intro: "Nagina (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Nagina ke mashhoor bazaar aur tea stalls — wholesale kulhad ka fresh stock aur quick dispatch. Moradabad factory se approx 55 km — delivery 2-3 din me.",
    sub: "Nagina ke dhabas aur chai dukano tak Kulhad Factory food-safe mitti ke kulhad wholesale price par deliver karta hai. 60ml se 300ml tak sab sizes available.",
    nearby: [{ name: "Bijnor", to: "/products" }, { name: "Budaun", to: "/kulhad-budaun" }, { name: "Noorpur", to: "/kulhad-noorpur" }],
  },
  {
    slug: "kulhad-hapur",
    name: "Hapur",
    title: "Hapur Kulhad Bulk Order — Supplier | Kulhad Factory",
    description: "Hapur me shaadi aur events ke liye kulhad bulk order — mitti ke kulhad wholesale price par. Time par delivery, tootne-se-bachane wali packing.",
    intro: "Hapur (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Hapur ke shaadi halls, roadside cafes aur highway dhabas — bulk kulhad orders ki pakki aur time par delivery. Moradabad factory se approx 120 km — delivery 3-4 din me.",
    sub: "Hapur me mitti ke kulhad wholesale — chai stalls, cafés aur dhabas ke liye. Kulhad Factory se 60ml-300ml kulhad order karein, factory-direct rate par.",
    nearby: [{ name: "Moradabad", to: "/kulhad-guide" }, { name: "Budaun", to: "/kulhad-budaun" }, { name: "Bijnor", to: "/products" }],
  },
  {
    slug: "kulhad-thakurdwara",
    name: "Thakurdwara",
    title: "Thakurdwara Kulhad Supplier — Wholesale | Kulhad Factory",
    description: "Thakurdwara me mandir, mele, cafes ke liye mitti ke kulhad supplier. Wholesale rate par eco-friendly clay cups, fast delivery. WhatsApp quote.",
    intro: "Thakurdwara (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Thakurdwara ke mandir, mele aur cafes — sabke liye eco-friendly kulhad supply. Moradabad factory se approx 50 km — delivery 2-3 din me.",
    sub: "Thakurdwara ke business owners Kulhad Factory se kulhad wholesale lete hain. 100% natural mitti, food-safe aur eco-friendly.",
    nearby: [{ name: "Moradabad", to: "/kulhad-guide" }, { name: "Bilari", to: "/products" }, { name: "Kashipur", to: "/products" }],
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);
