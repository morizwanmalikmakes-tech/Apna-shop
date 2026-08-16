export type NearbyArea = { name: string; to: string };

export type City = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  sub: string;
  nearby: NearbyArea[];
  /** Optional city-specific long-form content (unique per city). */
  details?: { heading: string; body: string }[];
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
    details: [
      {
        heading: "Amroha me hamare customers kaun hain?",
        body: "Amroha (Uttar Pradesh) me hamari mitti ke kulhad ki supply mainly chai stalls, sweet shops, dhabas, cafés, caterers aur mandi traders ko hoti hai. Amroha ke main bazaar aur aas-paas ke areas me hamari regular supply jaati hai — is waqt lagbhag 50+ regular customers hain jo har mahine order karte hain. Normal dino me bhi demand bani rehti hai, lekin shaadi-vivah, festivals aur aam ke season me kulhad ki demand kaafi badh jaati hai, isliye hum us waqt pehle se extra stock taiyaar rakhte hain.",
      },
      {
        heading: "Amroha me delivery kaise hoti hai?",
        body: "Amroha Moradabad factory se lagbhag 25 km hai. Delivery ke liye hum mainly apni gaadi ya local transport ka istemal karte hain, isliye Amroha aur aas-paas ke areas me aam taur par 1-2 din me maal pahunch jaata hai. Delivery charge order ki quantity aur distance ke hisaab se tay hota hai — bade aur wholesale orders par delivery free bhi rakhi ja sakti hai. Nearby areas me availability ke hisaab se same-day delivery bhi possible hai.",
      },
      {
        heading: "Amroha me kaun sa kulhad size zyada chalta hai?",
        body: "Amroha me 80ml aur 100ml kulhad sabse zyada bikne wale sizes hain. Chai stalls aur sweet shops me 80ml se 100ml tak ka istemal sabse zyada hota hai, jabki 250ml lassi kulhad thande drinks aur lassi ke liye liya jaata hai. Shaadiyon me 100ml size sabse popular rehta hai, kyunki chai aur doosre beverages ke liye ye convenient bhi hai aur economical bhi padta hai.",
      },
      {
        heading: "Amroha ke ek regular customer ka anubhav",
        body: "Hamare ek regular customer pichhle 1 saal se Amroha me humse kulhad le rahe hain. Unka ek order 4,500 pieces ka raha hai, aur ab tak ka unka sabse bada order 6,700 pieces ka gaya hai. Unhe hamare kulhad ki quality aur time par supply pasand aati hai — isi wajah se wo har bulk requirement ke liye seedha humse hi contact karte hain.",
      },
      {
        heading: "Amroha me order aur payment kaise karein?",
        body: "Order dene ke liye customer WhatsApp ya call ke through humse contact kar sakte hain. Bulk orders par payment terms quantity aur order ke hisaab se decide hote hain. Minimum order quantity customer ki requirement ke according rakhi jaati hai. Order details confirm hone ke baad aam taur par usi din order confirmation de diya jaata hai, taaki dispatch me deri na ho.",
      },
    ],
  },
  {
    slug: "kulhad-bareilly",
    name: "Bareilly",
    title: "Mitti Ke Kulhad Bareilly | Wholesale Supplier | Kulhad Factory",
    description: "Bareilly me clay kulhad supplier — cafes, dhabas, caterers ke liye wholesale mitti ke kulhad. Per-piece price, mazboot packing, time par delivery. WhatsApp quote.",
    intro: "Bareilly (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Bareilly ke mashhoor bazaars aur cafe culture — restaurants, dhabas aur shaadi planners ke liye time par kulhad supply. Moradabad factory se approx 110 km — delivery 3-4 din me.",
    sub: "Bareilly ke tea café owners aur dhabas Kulhad Factory se wholesale kulhad order karte hain. 60ml se 300ml tak sab sizes available.",
    nearby: [{ name: "Shahjahanpur", to: "/products" }, { name: "Pilibhit", to: "/products" }, { name: "Rampur", to: "/kulhad-rampur" }],
    details: [
      {
        heading: "Bareilly me hum kise supply karte hain?",
        body: "Bareilly ke chai stalls, mithai ki dukaanein, cafés, dhabas aur caterers hamare liye main target customers hain. Bada Bazaar, Shahamatganj aur Shyamganj jaise busy commercial areas me chai aur food businesses ki bheed hamesha rehti hai — yahi hamare liye sabse bade potential customers hain. Bareilly abhi hamare liye naya area hai aur hum yahan pehle regular customers ki talash me hain.",
      },
      {
        heading: "Bareilly tak delivery kaise hogi?",
        body: "Bareilly hamari Moradabad factory se lagbhag 110 km hai. Order ki quantity ke hisaab se hum apni gaadi ya transport chunte hain, aur aam taur par 3 din me maal pahuncha dete hain. Delivery charge quantity aur route par tay hota hai. Bareilly jaise bade sheher ke bulk orders me packing aur transport ki details hum dispatch se pehle customer ke saath confirm kar lete hain.",
      },
      {
        heading: "Bareilly ke liye kaun sa size behtar?",
        body: "Bareilly me 100ml aur 200ml kulhad sabse acche options hain. 100ml rozana chai aur regular beverage serving ke liye convenient rehta hai, jabki 200ml cafés, lassi aur catering orders me kaam aata hai. Shaadi ya event me customer apni serving ke hisaab se 200ml ya 250ml chunte hain. Hamare paas 60ml se 300ml tak poore 8 sizes stock me rehte hain.",
      },
      {
        heading: "Bareilly ka pehla order — kya milega",
        body: "Bareilly se abhi tak koi order record nahi hua hai, isliye hum yahan koi banawati customer story nahi likh rahe. Jo sach hai wo ye hai — hamari Moradabad factory se har mahine lakhon kulhad dispatch hote hain aur 5,000+ pieces tak ke bulk orders hum aaraam se handle karte hain. Bareilly ke pehle order me bhi wahi 1000°C par pakaya hua food-safe kulhad aur wahi crate packing milegi.",
      },
      {
        heading: "Bareilly se order kaise karein?",
        body: "Bareilly ke customers WhatsApp, call, email ya website form se order kar sakte hain. Payment online aur offline dono tarike se ho jaati hai. Bade orders me advance payment li ja sakti hai. Size, quantity aur delivery details batate hi hum rate aur delivery date bhej dete hain.",
      },
    ],
  },
  {
    slug: "kulhad-rudrapur",
    name: "Rudrapur",
    title: "Kulhad Wholesale Rudrapur — Factory Rate | Kulhad Factory",
    description: "Rudrapur me kulhad wholesale rate par chahiye? 60ml-300ml mitti ke kulhad, bulk order par factory price. Mazboot packing aur fast delivery. WhatsApp karein.",
    intro: "Rudrapur (Uttarakhand) — mitti ke kulhad wholesale aur bulk order. Rudrapur ke industrial area, canteens aur highway dhabas ke liye regular kulhad supply. Moradabad factory se approx 100 km — delivery 3-4 din me.",
    sub: "Rudrapur ke cafés, canteens aur chai dukano tak Kulhad Factory kulhad deliver karta hai. Mazboot packing, time par delivery aur factory pricing.",
    nearby: [{ name: "Bijnor", to: "/products" }, { name: "Budaun", to: "/kulhad-budaun" }, { name: "Noorpur", to: "/kulhad-noorpur" }],
    details: [
      {
        heading: "Rudrapur me hamare customers kaun hain?",
        body: "Rudrapur me hamari supply chai stalls, sweet shops, cafés, dhabas, caterers, factory canteens aur local food businesses tak jaati hai. Khaas taur par Kashipur Road, Kichha Road aur SIDCUL ke aas-paas ke business areas me kulhad ki demand milti hai. Rudrapur ke industrial environment ki wajah se canteens aur worker-focused food outlets bhi hamare liye important customers hain. Yahan regular business demand ke saath shaadi aur festival season me bulk orders badh jaate hain.",
      },
      {
        heading: "Rudrapur me delivery kaise hoti hai?",
        body: "Rudrapur hamari Moradabad factory se lagbhag 100 km door hai, phir bhi hum delivery ko apni gaadi aur transport — dono options se manage karte hain. Normal bulk orders quantity aur location ke hisaab se aam taur par 3-5 din me pahuncha diye jaate hain. Urgent requirement ho to transport ya shipping ka option bhi rakha ja sakta hai. Delivery charge order ki quantity aur method ke according tay hota hai.",
      },
      {
        heading: "Rudrapur me kaun sa kulhad size suitable hai?",
        body: "Rudrapur me 90ml aur 200ml kulhad sabse suitable rehte hain. 90ml kulhad chai stalls aur factory canteens ke liye convenient hai, jabki 200ml cafés, dhabas aur events me beverages ke liye accha option hai. Shaadi ya catering orders me 200ml size zyada practical rehta hai, kyunki isme chai aur doosre beverages acchi serving ke saath diye ja sakte hain. Iske alawa 60ml se 300ml tak sabhi sizes available hain.",
      },
      {
        heading: "Rudrapur ke naye customers ke liye",
        body: "Rudrapur hamare liye ek naya supply area hai aur hum yahan ke chai stalls, canteens aur food businesses ka swagat karte hain. Hamari Moradabad factory se har mahine lakhon kulhad dispatch hote hain, aur hum 5,000+ pieces tak ke bulk orders aaraam se handle karte hain. Rudrapur ke pehle order me bhi wahi cheezein milti hain jo hamare purane customers ko milti hain — consistent quality, mazboot crate packing aur tay samay par delivery.",
      },
      {
        heading: "Rudrapur me order kaise karein?",
        body: "Rudrapur ke customers website form, WhatsApp, call ya email ke through enquiry aur order kar sakte hain. Payment online ya offline — dono options ke according discuss ki ja sakti hai. Bade wholesale orders me advance payment ki requirement ho sakti hai. Order ki quantity, size aur delivery location confirm hone ke baad order process kiya jaata hai.",
      },
    ],
  },
  {
    slug: "kulhad-budaun",
    name: "Budaun",
    title: "Budaun Kulhad Supplier | Mitti Ke Kulhad | Kulhad Factory",
    description: "Budaun ke tea stalls, sweet shops, cafes ke liye kulhad supplier. Mitti ke kulhad wholesale, factory-direct price, 3-7 din me delivery. WhatsApp par order.",
    intro: "Budaun (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Budaun ke purane bazaar, mithai ki dukaanein aur caterers ke liye bharosemand wholesale kulhad supply. Moradabad factory se approx 90 km — delivery 2-3 din me.",
    sub: "Budaun me kulhad wholesale — food-safe clay kulhads, factory-direct pricing. Kulhad Factory se bulk order karke time par delivery paayein.",
    nearby: [{ name: "Nagina", to: "/kulhad-nagina" }, { name: "Noorpur", to: "/kulhad-noorpur" }, { name: "Bijnor", to: "/products" }],
    details: [
      {
        heading: "Budaun me hamare customers kaun hain?",
        body: "Budaun ke purane bazaar ki mithai ki dukaanein, chai stalls, cafés, dhabas aur caterers hamare regular customers hain. Ujhani Bazaar side ke commercial areas bhi isi route par padte hain. Budaun ke customers ke saath hamara kaafi accha rishta bana hua hai aur yahan se orders aate rehte hain. Shaadi aur catering season me badi quantity ki demand khaas taur par badh jaati hai.",
      },
      {
        heading: "Budaun me delivery kaise hoti hai?",
        body: "Budaun hamari Moradabad factory se lagbhag 90 km hai. Yahan tak hum transport ke zariye maal bhejte hain aur bade order me apni gaadi bhi laga dete hain. Shaadi jaise time-bound orders me hum delivery time ka khaas dhyan rakhte hain. Delivery charge per piece ke hisaab se liya jaata hai. Doori zyada hone ki wajah se Budaun ke orders me crate packing par extra dhyan diya jaata hai.",
      },
      {
        heading: "Budaun me kaun sa kulhad size zyada chalta hai?",
        body: "Budaun me shaadi aur bade functions ke liye 300ml kulhad ki demand rehti hai — badi serving ke liye ye sabse suitable hai. Mithai ki dukaanon me 250ml lassi kulhad chalta hai, aur rozana chai ke liye 70ml aur 100ml practical hain. Hamare paas 60ml se 300ml tak poore 8 sizes hamesha stock me rehte hain.",
      },
      {
        heading: "Budaun ke customers ka anubhav",
        body: "Budaun se humein regular orders milte rehte hain. Ek shaadi ke liye 300ml ke 1,000 pieces ka order aaya tha, jo time par pahuncha diya gaya tha. Budaun ke customers ke saath hamara kaafi accha business rishta hai, aur wahi bharosa har naye order me kaam aata hai. Chhota ho ya bada, har order me quality aur packing same rehti hai.",
      },
      {
        heading: "Budaun se order kaise karein?",
        body: "Budaun ke customers WhatsApp, call, email ya website form se order bhej sakte hain. Payment online aur offline dono tarike se ho jaati hai. Shaadi ya event ke orders me delivery date pehle se confirm kar li jaati hai. Size aur quantity batate hi hum rate aur delivery date bhej dete hain.",
      },
    ],
  },
  {
    slug: "kulhad-dhanora",
    name: "Dhanora",
    title: "Kulhad Price Dhanora — Bulk Order Supply | Kulhad Factory",
    description: "Dhanora me mitti ke kulhad chahiye? Shaadi aur events ke liye bulk order — wholesale price, tootne-se-bachane wali packing, time par delivery.",
    intro: "Dhanora (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Dhanora aur aas-paas ke gaon — shaadi aur event ke orders dhyan se pack karke time par pahunchte hain. Moradabad factory se approx 30 km — delivery 1-2 din me.",
    sub: "Dhanora me kulhad wholesale — mitti ke kulhad chai, coffee aur lassi ke liye. Kulhad Factory se bulk order karke delivery paayein.",
    nearby: [{ name: "Amroha", to: "/kulhad-amroha" }, { name: "Gajraula", to: "/kulhad-gajraula" }, { name: "Hasanpur", to: "/products" }],
    details: [
      {
        heading: "Dhanora me hamare customers kaun hain?",
        body: "Dhanora me hamare regular customers hain, jahan se humein samay-samay par kulhad ke bulk orders milte rehte hain. Yahan chai stalls, sweet shops, cafés, dhabas aur catering jaise businesses ke liye mitti ke kulhad ki supply ki jaati hai. Dhanora se humein alag-alag quantity ke orders milte rahe hain — chhote orders bhi aur bade bulk orders bhi — jisse hamare regular business relations bane hue hain.",
      },
      {
        heading: "Dhanora me delivery kaise hoti hai?",
        body: "Dhanora aur aas-paas ke areas me hum delivery ke liye apni gaadi ka istemal karte hain. Isse order seedha customer tak pahunchane me aasani hoti hai aur poore delivery process par hamara apna control rehta hai. Order ki quantity aur location ke according delivery ka samay tay kiya jaata hai, taaki maal sahi waqt par aur surakshit pahunche.",
      },
      {
        heading: "Dhanora me kaun sa kulhad size zyada chalta hai?",
        body: "Dhanora me 70ml aur 250ml kulhad ki demand sabse acchi hai. 70ml kulhad chai aur chhote beverages ke liye suitable rehta hai, jabki 250ml kulhad lassi aur bade beverages ke liye istemal hota hai. Customer apni requirement aur serving size ke hisaab se koi bhi size chun sakte hain — hamare paas 60ml se 300ml tak sabhi sizes available hain.",
      },
      {
        heading: "Dhanora ke customers ka anubhav",
        body: "Dhanora se humein kai baar acche orders mile hain. Yahan se 3,000 pieces ka ek order bhi aa chuka hai aur 500 pieces ke chhote orders bhi milte rehte hain. Alag-alag quantity me orders milne se humein Dhanora ke customers ke saath ek regular business connection banane me madad mili hai — chhota ho ya bada, har order ki packing aur quality same rehti hai.",
      },
      {
        heading: "Dhanora me order kaise karein?",
        body: "Dhanora ke customers humse WhatsApp ya email ke through order kar sakte hain. Customer ko sirf required kulhad ka size aur quantity batani hoti hai. Uske baad order ki details discuss karke confirmation de diya jaata hai. Bulk requirements ke liye WhatsApp ya email par direct enquiry karna sabse convenient rehta hai.",
      },
    ],
  },
  {
    slug: "kulhad-gajraula",
    name: "Gajraula",
    title: "Gajraula Kulhad Wholesale | Clay Cup Supplier | Kulhad Factory",
    description: "Gajraula industrial area ke cafes, canteens, dhabas ke liye clay cup supplier. Kulhad wholesale, factory-direct price, regular supply ka bharosa.",
    intro: "Gajraula (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Gajraula ka industrial area aur highway dhabas — dono ke liye regular kulhad supply ka bharosa. Moradabad factory se approx 45 km — delivery 2-3 din me.",
    sub: "Gajraula ke business owners Kulhad Factory se wholesale kulhad lete hain. Food-safe, unglazed mitti ke kulhad chai aur lassi ke liye.",
    nearby: [{ name: "Amroha", to: "/kulhad-amroha" }, { name: "Dhanaura", to: "/kulhad-dhanora" }, { name: "Hasanpur", to: "/products" }],
    details: [
      {
        heading: "Gajraula me hamare customers kaun hain?",
        body: "Gajraula me hamare kaafi purane aur regular customers hain. Yahan hum mainly chai wale, sweet shops, cafés, dhabas, caterers aur doosre local businesses ko mitti ke kulhad supply karte hain. Gajraula ke Chopla area me bhi hamari regular kulhad delivery jaati hai, jahan chai aur beverage businesses ke liye demand lagataar bani rehti hai.",
      },
      {
        heading: "Gajraula me delivery kaise hoti hai?",
        body: "Gajraula aur aas-paas ke areas me kulhad delivery ke liye hum apni gaadi ke saath local transport ka bhi istemal karte hain. Order ki quantity aur destination ke hisaab se delivery aam taur par 3-4 din me pahuncha di jaati hai. Is tarah chhote aur bulk dono orders ko manage karna aasaan ho jaata hai, aur packing bhi mazboot crates me hoti hai.",
      },
      {
        heading: "Gajraula me kaun sa kulhad size zyada chalta hai?",
        body: "Gajraula me 70ml aur 90ml kulhad ki demand sabse zyada hai. Ye dono sizes khaas taur par chai ke liye popular hain. Chai stalls aur local beverage businesses ke liye ye size convenient rehta hai, isliye Gajraula ki total supply me inka hissa kaafi accha rehta hai. Iske alawa 60ml se 300ml tak sabhi sizes available hain.",
      },
      {
        heading: "Gajraula ke customers ka anubhav",
        body: "Gajraula ke saath hamara bahut purana business rishta hai. Yahan ke kai customers lambe samay se humse kulhad le rahe hain, aur isi bharose ki wajah se Gajraula hamari supply ke important areas me se ek bana hua hai. Yahan se chai ke liye 70ml aur 90ml kulhad ki regular demand milti rehti hai, jise hum har mahine time par pura karte hain.",
      },
      {
        heading: "Gajraula me order kaise karein?",
        body: "Gajraula ke customers WhatsApp, email ya website par form bhar kar order bhej sakte hain. Order me required size aur quantity batane ke baad details confirm ki jaati hain. Payment ki suvidha online aur offline dono available hai, jisse customer apni convenience ke according payment kar sakte hain.",
      },
    ],
  },
  {
    slug: "kulhad-jaspur",
    name: "Jaspur",
    title: "Kulhad Jaspur — Supplier & Delivery | Kulhad Factory",
    description: "Jaspur me kulhad supplier — chai aur lassi shops ke liye mitti ke kulhad wholesale rate par. Ghar baithe bulk order, fast delivery. WhatsApp quote.",
    intro: "Jaspur (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Jaspur ki chai shops aur lassi corners — wholesale kulhad par factory-direct rate, koi beech ka daam nahi. Moradabad factory se approx 60 km — delivery 2-3 din me.",
    sub: "Jaspur me kulhad wholesale delivery — chai ki dukano aur cafés ke liye. Kulhad Factory se factory-direct price par kulhad order karein.",
    nearby: [{ name: "Kashipur", to: "/products" }, { name: "Thakurdwara", to: "/kulhad-thakurdwara" }, { name: "Moradabad", to: "/kulhad-guide" }],
    details: [
      {
        heading: "Jaspur me hamare potential customers",
        body: "Jaspur ki chai ki dukaanein, sweet shops, cafés, dhabas aur local food outlets kulhad ke natural customers hain. Jaspur Bazaar aur Kashipur Road side ke commercial businesses hamare liye khaas taur par important hain. Jaspur Uttarakhand me hai aur hamare Kashipur-Rudrapur route par hi padta hai, isliye yahan delivery hamare liye mushkil nahi hai. Abhi yahan hamara koi regular customer nahi bana hai.",
      },
      {
        heading: "Jaspur me delivery — Uttarakhand route par",
        body: "Jaspur hamari factory se lagbhag 60 km hai aur ye hamare Uttarakhand route ka pehla padav hai. Normal orders hum apni gaadi se bhej dete hain aur bulk quantity transport se jaati hai — delivery 1-2 din me ho jaati hai. Kyunki Kashipur aur Rudrapur bhi isi raste par aage padte hain, kai baar ek hi trip me teeno jagah ka maal chala jaata hai.",
      },
      {
        heading: "Jaspur ke liye size ka chunav",
        body: "Jaspur me 70ml aur 250ml kulhad do alag-alag zarurat pura karte hain. 70ml chai ke liye convenient rehta hai, jabki 250ml lassi aur bade beverages ke liye suitable hai. Catering aur shaadi orders me 200ml se 250ml tak ke size serving ke hisaab se chune jaate hain. Sabhi 8 sizes — 60ml se 300ml tak — hamesha stock me rehte hain.",
      },
      {
        heading: "Jaspur ka pehla order kaise shuru karein",
        body: "Jaspur se abhi tak koi order nahi aaya hai, isliye hum yahan koi jhoothi customer story nahi bana rahe. Lekin ek baat hamare paksh me hai — Jaspur hamare Uttarakhand route par sabse pehle padta hai, sirf 60 km. Naye customer ke liye trial order lena yahan sabse aasaan hai. Quality dekh kar phir bulk supply shuru ki ja sakti hai.",
      },
      {
        heading: "Jaspur se order kaise karein?",
        body: "Jaspur se order WhatsApp, call, email ya website form ke through diya ja sakta hai. Online aur offline dono payment options khule hain. Bulk order me advance payment quantity ke hisaab se tay hoti hai. Size, quantity aur delivery details final hote hi confirmation de diya jaata hai.",
      },
    ],
  },
  {
    slug: "kulhad-kashipur",
    name: "Kashipur",
    title: "Kashipur Mitti Ke Kulhad | Wholesale Rate | Kulhad Factory",
    description: "Kashipur me mitti ke kulhad wholesale — chai shops, dhabas aur shaadi ke bulk order. Kam price, mazboot packing, time par delivery. WhatsApp karein.",
    intro: "Kashipur (Uttarakhand) — mitti ke kulhad wholesale aur bulk order. Kashipur ke industrial area, chai shops aur lassi corners tak bulk kulhad orders ki time par delivery. Moradabad factory se approx 80 km — delivery 2-3 din me.",
    sub: "Kashipur me kulhad online — mitti ke kulhad wholesale price par. Kulhad Factory se order karein, chai aur lassi ke liye perfect, factory-direct rate.",
    nearby: [{ name: "Amroha", to: "/kulhad-amroha" }, { name: "Dhanaura", to: "/kulhad-dhanora" }, { name: "Gajraula", to: "/kulhad-gajraula" }],
    details: [
      {
        heading: "Kashipur me hamare customers kaun hain?",
        body: "Kashipur ke commercial area ke chai stalls, cafés, sweet shops aur dhabas hamare customers hain, aur industrial side ke food outlets bhi order karte hain. Kashipur aur Rudrapur dono ek hi route par padte hain, isliye kai baar hum dono jagah ka order ek saath deliver kar dete hain. Aaj kal yahan ke log kaafi orders kar rahe hain aur hamara customer base yahan lagataar badh raha hai.",
      },
      {
        heading: "Kashipur me delivery kaise hoti hai?",
        body: "Kashipur hamari Moradabad factory se lagbhag 80 km hai aur Uttarakhand me padta hai. Delivery 3 se 4 din me ho jaati hai. Kyunki Rudrapur bhi isi route par aage padta hai, hum kai baar dono sheher ka maal ek hi trip me bhej dete hain — isse delivery cost bhi kam padti hai aur time bhi bachta hai. Charge quantity aur route ke hisaab se tay hota hai.",
      },
      {
        heading: "Kashipur me kaun sa kulhad size zyada chalta hai?",
        body: "Kashipur me 200ml aur 250ml kulhad sabse zyada jaate hain — dono lassi ke liye istemal hote hain, jo yahan kaafi chalti hai. Chai ke liye customers 70ml lete hain. Cafés aur sweet shops apni serving ke hisaab se ye teeno sizes mix karke mangwate hain. Sabhi 8 sizes — 60ml se 300ml tak — hamesha available rehte hain.",
      },
      {
        heading: "Kashipur ke customers ka anubhav",
        body: "Kashipur me hamare kaafi customers hain aur aaj kal yahan se orders lagataar aa rahe hain. Hamari koshish yahi rehti hai ki yahan bharosa aur mazboot ho — isliye har order me quality aur packing par poora dhyan diya jaata hai. Rudrapur ke saath combined delivery ki wajah se yahan ke customers ko maal jaldi aur kam kharche me mil jaata hai.",
      },
      {
        heading: "Kashipur me order kaise karein?",
        body: "Kashipur ke customers WhatsApp, call, email ya website form se order kar sakte hain. Payment advance, online aur offline — sab chalta hai, lekin yahan zyadatar payment cash me hoti hai. Bade orders me advance payment li ja sakti hai. Quantity, size aur delivery details clear hote hi final confirmation de diya jaata hai.",
      },
    ],
  },
  {
    slug: "kulhad-meerut",
    name: "Meerut",
    title: "Kulhad Supplier Meerut — Clay Kulhad Price | Kulhad Factory",
    description: "Meerut me kulhad supplier — restaurants, cafes, chai tapri ke liye clay kulhad wholesale. Per-piece factory price, fast delivery. Quote lein.",
    intro: "Meerut (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Meerut — sports goods aur cafes ka shehar. Tapri se restaurant tak, kulhad supply time par.",
    sub: "Meerut ke cafés aur chai dukano tak Kulhad Factory kulhad deliver karta hai. Factory-direct pricing aur mazboot packing ke saath. Moradabad factory se approx 70 km — delivery 2-3 din me.",
    nearby: [{ name: "Modipuram", to: "/products" }, { name: "Roorkee", to: "/products" }, { name: "Muzaffarnagar", to: "/products" }],
    details: [
      {
        heading: "Meerut me kaun se businesses target hain?",
        body: "Meerut ek bada commercial aur industrial market hai, isliye yahan chai stalls, cafés, sweet shops, dhabas, caterers aur factory canteens hamare liye important customer segments hain. Partapur, Mohkampur aur Delhi Road jaise industrial-commercial areas me food outlets aur worker canteens me roz sainkadon chai ki cups chalti hain. Meerut abhi hamare liye naya market hai aur hum yahan shuruat karna chahte hain.",
      },
      {
        heading: "Meerut me delivery ki planning",
        body: "Meerut hamare delivery areas me comparatively door padta hai. Route aur order quantity ke hisaab se hum delivery 3 din ke aas-paas plan karte hain. Bulk shipment ke liye transport sabse convenient rehta hai, jabki urgent requirement me apni gaadi ka option bhi customer se discuss kiya jaata hai. Delivery charge quantity aur transport method par tay hota hai.",
      },
      {
        heading: "Meerut ke liye kaun sa size?",
        body: "Meerut me 90ml aur 300ml do alag zaruraton ko cover karte hain. 90ml chai stalls aur factory canteens ke liye suitable hai — jahan tez-tez chai chalti hai. 300ml lassi aur badi beverage serving ke liye useful rehta hai. Shaadi aur catering me 200ml se 300ml tak ke size menu ke hisaab se chune jaate hain. Poore 8 sizes stock me rehte hain.",
      },
      {
        heading: "Meerut ke naye customers ke liye",
        body: "Meerut ka koi order record ya customer feedback abhi hamare paas nahi hai, isliye hum yahan artificial testimonial nahi de rahe. Jo sach hai — door market me bulk supply ke liye quantity, packing aur transport ki planning pehle karni padti hai, aur ye kaam hum roz karte hain. Hamari factory se har mahine lakhon kulhad nikalte hain aur 5,000+ pieces ka order handle karna hamare liye aam baat hai.",
      },
      {
        heading: "Meerut me order kaise karein?",
        body: "Meerut ke customers WhatsApp, call, email ya website form se enquiry bhej sakte hain. Payment online aur offline dono options me discuss ki ja sakti hai. Bade wholesale orders me advance payment li ja sakti hai. Size, quantity, packing aur delivery details clear hote hi final confirmation de diya jaata hai.",
      },
    ],
  },
  {
    slug: "kulhad-noorpur",
    name: "Noorpur",
    title: "Noorpur Kulhad Wholesale | Factory Direct | Kulhad Factory",
    description: "Noorpur ki sweet shops aur dhabas ke liye mitti ke kulhad seedha factory se. Wholesale bulk price, eco-friendly clay cups, time par delivery.",
    intro: "Noorpur (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Noorpur ki sweet shops aur dhabas — eco-friendly kulhad, wholesale par factory-direct price. Moradabad factory se approx 40 km — delivery 2-3 din me.",
    sub: "Noorpur me kulhad wholesale — 100% natural mitti, lead-free aur biodegradable. Kulhad Factory se bulk order karke delivery paayein.",
    nearby: [{ name: "Budaun", to: "/kulhad-budaun" }, { name: "Nagina", to: "/kulhad-nagina" }, { name: "Bijnor", to: "/products" }],
    details: [
      {
        heading: "Noorpur me hamare customers kaun hain?",
        body: "Noorpur Bijnor district ka nagar palika area hai aur hamari factory ke kaafi paas padta hai. Yahan ke local market ke chai stalls, mithai ki dukaanein, snacks outlets aur dhabe hamare regular customers hain. Noorpur ke customers ke saath hamara lagbhag 1 saal purana rishta hai. Kai customers advance payment tak de dete hain, aur delivery ke baad review bhi dete hain — yahi bharosa hamari sabse badi taakat hai.",
      },
      {
        heading: "Noorpur me delivery kaise hoti hai?",
        body: "Noorpur hamari Moradabad factory se sirf 40 km hai, isliye ye hamare sabse paas wale areas me se ek hai. Yahan hum apni hi gaadi se maal bhejte hain aur delivery sirf 2 din me ho jaati hai. Doori kam hone ki wajah se transport ka kharcha bhi kam padta hai, aur chhote orders me bhi delivery aasaan rehti hai. Charge quantity ke hisaab se pehle hi bata diya jaata hai.",
      },
      {
        heading: "Noorpur me kaun sa kulhad size zyada chalta hai?",
        body: "Noorpur me 250ml aur 90ml kulhad ki demand sabse zyada hai. 250ml lassi aur bade beverages ke liye jaata hai, jabki 90ml rozana chai ke liye convenient rehta hai. Mithai ki dukaanein aur cafés apni serving ke hisaab se dono sizes lete hain. Hamare paas 60ml se 300ml tak sabhi 8 sizes stock me rehte hain.",
      },
      {
        heading: "Noorpur ke customers ka anubhav",
        body: "Noorpur se lagbhag 6 mahine pehle humein 2,100 pieces ka ek bada order mila tha, aur 250ml aur 90ml ka 1,350 pieces ka doosra order bhi gaya tha. Dono orders me quality bahut acchi rahi aur customers ne baad me positive review bhi diya. Yahan ke customers 1 saal se hamare saath jude hue hain aur kai baar advance payment bhi de dete hain.",
      },
      {
        heading: "Noorpur me order kaise karein?",
        body: "Noorpur ke customers WhatsApp, call, email ya website form se order kar sakte hain. Payment online aur offline dono me hoti hai — kai customers advance payment bhi karte hain. Kyunki area paas hai, delivery ki date hum jaldi confirm kar dete hain. Size aur quantity batate hi rate bhej diya jaata hai.",
      },
    ],
  },
  {
    slug: "kulhad-rampur",
    name: "Rampur",
    title: "Rampur Kulhad Supplier — Bulk Price | Kulhad Factory",
    description: "Rampur me kulhad wholesale supplier — restaurants, caterers ke liye mitti ke kulhad. Strong packing, factory price, time par delivery. WhatsApp order.",
    intro: "Rampur (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Rampur ki mashhoor khana tradition — restaurants aur caterers ke liye strong packing ke saath kulhad supply. Moradabad factory se approx 65 km — delivery 2-3 din me.",
    sub: "Rampur me kulhad wholesale delivery — chai stalls, cafés aur hotels ke liye. Kulhad Factory se factory-direct order karein.",
    nearby: [{ name: "Bareilly", to: "/kulhad-bareilly" }, { name: "Moradabad", to: "/kulhad-guide" }, { name: "Bilaspur", to: "/products" }],
    details: [
      {
        heading: "Rampur me hamare potential customers",
        body: "Rampur ke chai stalls, sweet shops, cafés, dhabas, caterers aur local food businesses kulhad ke seedhe customers hain. Bada Bazaar, Rajdwara aur Meston Ganj jaise commercial areas me chai aur food outlets ki achhi bheed rehti hai. Rampur apni khane-peene ki purani tradition ke liye jaana jaata hai, isliye yahan mitti ke kulhad wali chai ka scope kaafi accha hai. Abhi yahan hamara koi regular customer nahi hai.",
      },
      {
        heading: "Rampur me delivery kaise hogi?",
        body: "Rampur hamari factory se lagbhag 65 km hai, isliye ye hamare liye kaafi manageable route hai. Normal orders hum apni gaadi se bhej dete hain aur badi quantity transport se jaati hai — delivery aam taur par 2 din me ho jaati hai. Delivery charge kulhad ki quantity aur route ke hisaab se tay hota hai aur order confirm karte waqt hi bata diya jaata hai.",
      },
      {
        heading: "Rampur ke liye kaun sa size lein?",
        body: "Rampur me 60ml aur 100ml kulhad sabse useful options hain. 60ml chai stalls ke liye convenient hai — cutting chai ke liye perfect. 100ml cafés aur sweet shops me thodi badi chai ya beverage serving ke liye suitable rehta hai. Shaadi aur catering orders me 200ml ya 250ml bhi requirement ke hisaab se liya jaata hai. Sabhi 8 sizes available hain.",
      },
      {
        heading: "Rampur me shuruat kaise karein",
        body: "Rampur se abhi tak koi order record nahi hua hai, aur hum yahan koi banawati number ya testimonial nahi laga rahe. Sach ye hai ki 65 km ka ye route hamare liye aasaan hai aur 2 din me maal pahuncha dete hain. Naye customer ko wahi food-safe kulhad, wahi mazboot crate packing aur wahi factory rate milega jo hamare purane customers ko milta hai.",
      },
      {
        heading: "Rampur se order kaise karein?",
        body: "Rampur ke customers WhatsApp, call, email ya website form ke through order kar sakte hain. Payment online aur offline dono options me possible hai. Bade orders me advance payment ki requirement ho sakti hai. Order size, quantity aur delivery location confirm hone ke baad dispatch process shuru kar diya jaata hai.",
      },
    ],
  },
  {
    slug: "kulhad-sambhal",
    name: "Sambhal",
    title: "Sambhal Kulhad Supplier — Wholesale Rate | Kulhad Factory",
    description: "Sambhal me mitti ke kulhad supplier — 60ml-300ml wholesale price par. Chai stalls, sweet shops aur shaadi ke bulk order. Fast delivery, WhatsApp quote.",
    intro: "Sambhal (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Sambhal ke bazaar, chai stalls aur sweet shops ke liye har size ka kulhad. Moradabad factory se approx 40 km — delivery 1-2 din me.",
    sub: "Sambhal me kulhad wholesale — eco-friendly, unglazed mitti ke kulhad chai aur lassi ke liye. Kulhad Factory se bulk order karein, time par delivery aur factory-direct rate.",
    nearby: [{ name: "Bijnor", to: "/products" }, { name: "Budaun", to: "/kulhad-budaun" }, { name: "Noorpur", to: "/kulhad-noorpur" }],
    details: [
      {
        heading: "Sambhal me hamare customers kaun hain?",
        body: "Sambhal me hamare 10+ regular customers hain. Yahan chai stalls, sweet shops, cafés, dhabas, caterers aur kai tarah ke local businesses ko mitti ke kulhad supply kiye jaate hain. Sambhal me kulhad ki demand khaas taur par chai aur beverage businesses me rehti hai. Shaadi-vivah aur festivals ke season me bulk orders ki demand aur badh jaati hai, isliye us waqt hum pehle se stock taiyaar rakhte hain.",
      },
      {
        heading: "Sambhal me delivery kaise hoti hai?",
        body: "Sambhal me delivery ke liye hamari apni gaadi ka istemal hota hai. Normal delivery aam taur par 3-6 din me ho jaati hai. Delivery charges order ki quantity ke hisaab se decide hote hain — pehle order me 300 pieces tak delivery charges bilkul free hain. Agar customer ko zyada jaldi maal chahiye to shipping ka option bhi available rehta hai.",
      },
      {
        heading: "Sambhal me kaun sa kulhad size zyada chalta hai?",
        body: "Sambhal me 60ml aur 200ml kulhad ki demand sabse zyada hai. Chai wale mainly 60ml kulhad lete hain, jabki sweet shops aur cafés me 80ml, 200ml aur 250ml sizes ki demand milti hai. Shaadi aur events ke liye 200ml kulhad kaafi suitable rehta hai aur wahan iska istemal sabse zyada hota hai.",
      },
      {
        heading: "Sambhal ke customers ka anubhav",
        body: "Sambhal me hamare kaafi purane customers hain. Ek baar ek customer ne 2,500 pieces ka order diya tha, jisme kulhad ki quality bahut acchi rahi aur customer ne delivery ke baad positive feedback bhi diya. Aise regular customers ke saath lambe samay se business relationship bana hua hai, jo hamare liye bahut important hai.",
      },
      {
        heading: "Sambhal me order kaise karein?",
        body: "Sambhal ke customers website, WhatsApp, call ya email ke through order kar sakte hain. Payment online aur offline dono tarike se ki ja sakti hai. Bade orders par advance payment li ja sakti hai. Customer ki requirement ke hisaab se order jaldi se jaldi confirm karne ki koshish ki jaati hai.",
      },
    ],
  },
  {
    slug: "kulhad-nagina",
    name: "Nagina",
    title: "Nagina Kulhad Price — Wholesale Supply | Kulhad Factory",
    description: "Nagina ke tea stalls aur sweet shops ke liye kulhad wholesale. Mitti ke kulhad factory price par, fresh stock, quick dispatch. WhatsApp par quote.",
    intro: "Nagina (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Nagina ke mashhoor bazaar aur tea stalls — wholesale kulhad ka fresh stock aur quick dispatch. Moradabad factory se approx 55 km — delivery 2-3 din me.",
    sub: "Nagina ke dhabas aur chai dukano tak Kulhad Factory food-safe mitti ke kulhad wholesale price par deliver karta hai. 60ml se 300ml tak sab sizes available.",
    nearby: [{ name: "Bijnor", to: "/products" }, { name: "Budaun", to: "/kulhad-budaun" }, { name: "Noorpur", to: "/kulhad-noorpur" }],
    details: [
      {
        heading: "Nagina me hamare customers kaun hain?",
        body: "Nagina me hamare kaafi customers hain — chai stalls, sweet shops, cafés, dhabas, caterers aur local food businesses ko yahan kulhad supply kiye jaate hain. Nagina Bazaar, Baradari aur Ganna Samiti Chauraha ke aas-paas ke business areas me demand rehti hai. Nagina ke saath Seohara aur aas-paas ke areas me bhi hamari supply jaati hai. Shaadi aur catering season me bulk requirement kaafi badh jaati hai.",
      },
      {
        heading: "Nagina me delivery kaise hoti hai?",
        body: "Nagina me delivery aam taur par 2 din me ho jaati hai. Supply hamari apni gaadi se bheji jaati hai, aur zarurat padne par customer apni gaadi bhej kar bhi maal utha sakta hai. Delivery charge kulhad ki quantity ke hisaab se tay hota hai. Seohara jaise nearby areas me bhi hum apni gaadi se hi delivery manage karte hain.",
      },
      {
        heading: "Nagina me kaun sa kulhad size zyada chalta hai?",
        body: "Nagina me 60ml, 80ml, 200ml aur 250ml kulhad ki demand acchi hai. Chai ke liye 60ml aur 80ml sizes sabse popular hain, jabki 200ml aur 250ml lassi aur bade beverages ke liye liye jaate hain. Bulk orders me bhi customers high-quality kulhad hi maangte hain, isliye har size ki finishing aur mazbooti par dhyan diya jaata hai.",
      },
      {
        heading: "Nagina ke customers ka anubhav",
        body: "Nagina se humein kaafi orders mil chuke hain. Ek baar 250ml ke 1,400 pieces ka order seedha WhatsApp par aaya tha, aur 500 pieces ke chhote orders bhi regular milte rehte hain. Nagina ke customers ke saath hamara purana business connection hai aur quality aur supply ko lekar seedha communication banaa rehta hai.",
      },
      {
        heading: "Nagina me order kaise karein?",
        body: "Nagina ke customers WhatsApp, call, email ya website form se order kar sakte hain. Payment yahan zyadatar cash me hoti hai, aur online payment ka option bhi available hai. Quantity aur size confirm hone ke baad payment aur delivery ki details customer ke saath finalize kar li jaati hain.",
      },
    ],
  },
  {
    slug: "kulhad-hapur",
    name: "Hapur",
    title: "Hapur Kulhad Bulk Order — Supplier | Kulhad Factory",
    description: "Hapur me shaadi aur events ke liye kulhad bulk order — mitti ke kulhad wholesale price par. Time par delivery, tootne-se-bachane wali packing.",
    intro: "Hapur (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Hapur ke shaadi halls, roadside cafes aur highway dhabas — bulk kulhad orders ki pakki aur time par delivery. Moradabad factory se approx 120 km — delivery 3-4 din me.",
    sub: "Hapur me mitti ke kulhad wholesale — chai stalls, cafés aur dhabas ke liye. Kulhad Factory se 60ml-300ml kulhad order karein, factory-direct rate par.",
    nearby: [{ name: "Moradabad", to: "/kulhad-guide" }, { name: "Budaun", to: "/kulhad-budaun" }, { name: "Bijnor", to: "/products" }],
    details: [
      {
        heading: "Hapur me hamare customers kaun hain?",
        body: "Hapur ke chai stalls, sweet shops, cafés, highway dhabas aur catering businesses hamare customers hain. Ganga Expressway ke aas-paas ka developing corridor is area ko aur important banata hai. Hapur hamare liye abhi naya area hai — yahan se abhi tak 2 orders aaye hain, lekin dono customers purane aur bharosemand hain aur unka feedback bhi regular milta rehta hai.",
      },
      {
        heading: "Hapur me delivery kaise hoti hai?",
        body: "Hapur hamari factory se lagbhag 120 km door hai — hamare delivery areas me sabse door. Itni doori par hum mainly transport ka istemal karte hain aur delivery 3 se 7 din me ho jaati hai. Delivery charge minimum quantity ke hisaab se tay hota hai. Lambi doori ki wajah se Hapur ke orders me packing sabse mazboot crates me ki jaati hai, taaki poore raste kulhad surakshit rahein.",
      },
      {
        heading: "Hapur me kaun sa kulhad size zyada chalta hai?",
        body: "Hapur me 200ml aur 80ml kulhad sabse zyada jaate hain. 200ml khaas taur par lassi ke liye istemal hota hai, jo yahan kaafi popular hai. 80ml rozana chai serving ke liye liya jaata hai. Highway dhabas aur cafés inhi dono sizes ko pasand karte hain. Iske alawa 60ml se 300ml tak sabhi 8 sizes available hain.",
      },
      {
        heading: "Hapur ke customers ka anubhav",
        body: "Hapur se abhi tak humein 2 orders mile hain — ek 400 pieces ka aur doosra 1,700 pieces ka. Dono orders 200ml aur 80ml ke the, jo zyadatar lassi aur chai ke liye use hue. Customers ne delivery ke baad kaafi accha review diya. Yahan ke customer purane hain aur unka feedback hamesha aata rehta hai, jo hamare liye bahut keemti hai.",
      },
      {
        heading: "Hapur se order kaise karein?",
        body: "Hapur se order WhatsApp, call, email ya website form ke through bheja ja sakta hai. Yahan ke zyadatar customer online payment karna pasand karte hain, aur offline ka option bhi khula hai. Doori zyada hone ki wajah se bulk orders me advance payment li ja sakti hai. Size, quantity aur delivery location confirm hote hi hum transport aur delivery date bata dete hain.",
      },
    ],
  },
  {
    slug: "kulhad-thakurdwara",
    name: "Thakurdwara",
    title: "Thakurdwara Kulhad Supplier — Wholesale | Kulhad Factory",
    description: "Thakurdwara me mandir, mele, cafes ke liye mitti ke kulhad supplier. Wholesale rate par eco-friendly clay cups, fast delivery. WhatsApp quote.",
    intro: "Thakurdwara (Uttar Pradesh) — mitti ke kulhad wholesale aur bulk order. Thakurdwara ke mandir, mele aur cafes — sabke liye eco-friendly kulhad supply. Moradabad factory se approx 50 km — delivery 2-3 din me.",
    sub: "Thakurdwara ke business owners Kulhad Factory se kulhad wholesale lete hain. 100% natural mitti, food-safe aur eco-friendly.",
    nearby: [{ name: "Moradabad", to: "/kulhad-guide" }, { name: "Bilari", to: "/products" }, { name: "Kashipur", to: "/products" }],
    details: [
      {
        heading: "Thakurdwara me hamare customers kaun hain?",
        body: "Thakurdwara Moradabad district ka hi block hai, isliye ye hamare apne zile ka area hai. Yahan ke chai stalls, sweet shops, dhabas aur caterers hamare customers hain. Dilari side ke customers bhi isi route par aa jaate hain. Hum yahan pichhle 6 mahine se kaam kar rahe hain aur yahan ke log bahut acche hain — orders regular aate rehte hain aur baat-cheet hamesha seedhi aur saaf rehti hai.",
      },
      {
        heading: "Thakurdwara me delivery kaise hoti hai?",
        body: "Thakurdwara hamari factory se lagbhag 50 km hai aur Moradabad district ke andar hi padta hai, isliye delivery 24 se 72 ghante me ho jaati hai. Hum apni gaadi se maal bhejte hain, aur kaafi customers apni khud ki gaadi bhej kar bhi order utha le jaate hain — ye tarika dono ke liye kaafi useful rehta hai aur time bachta hai. Dilari route par bhi isi gaadi se maal chala jaata hai.",
      },
      {
        heading: "Thakurdwara me kaun sa kulhad size zyada chalta hai?",
        body: "Thakurdwara me 60ml aur 90ml kulhad ki demand sabse zyada hai — dono hi rozana chai serving ke liye perfect rehte hain. Kabhi-kabhi 250ml ke orders bhi aate hain, jo lassi aur bade beverages ke liye liye jaate hain. Sweet shops apni requirement ke hisaab se 100ml ya 200ml bhi lete hain. Sabhi 8 sizes hamesha stock me rehte hain.",
      },
      {
        heading: "Thakurdwara ke customers ka anubhav",
        body: "Thakurdwara me hum pichhle 6 mahine se supply kar rahe hain. Yahan se abhi tak 600 pieces ka order aaya hai aur 500 pieces ka bhi ek order gaya tha. Orders bhale hi abhi chhote hain, par regular aate rehte hain aur yahan ke customers ke saath baat-cheet bahut acchi rehti hai. Kai customers apni gaadi bhej kar khud maal le jaate hain, jisse delivery aur bhi jaldi ho jaati hai.",
      },
      {
        heading: "Thakurdwara me order kaise karein?",
        body: "Order WhatsApp, call, email ya website form se place kiya ja sakta hai. Payment online aur offline dono chalti hai. Agar customer apni gaadi bhejna chahe to wo bhi bilkul theek hai — maal factory se hi utha sakte hain. Quantity aur delivery details final hone ke baad confirmation de diya jaata hai.",
      },
    ],
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);
