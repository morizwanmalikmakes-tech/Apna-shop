p = "src/lib/cities.ts"
s = open(p).read()

DHANORA = '''    details: [
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
'''

old = '''    nearby: [{ name: "Amroha", to: "/kulhad-amroha" }, { name: "Gajraula", to: "/kulhad-gajraula" }, { name: "Hasanpur", to: "/products" }],
  },'''
assert old in s, "DHANORA NEARBY NOT FOUND"
assert s.count(old) == 1, "MARKER NOT UNIQUE"
s = s.replace(old, old[:-4] + DHANORA + '  },', 1)
open(p, 'w').write(s)
print("  cities.ts: Dhanora details added")
