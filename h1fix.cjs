const fs = require("fs");
let s = fs.readFileSync("src/routes/index.tsx", "utf8");
const old = '<h1 style={{ backgroundImage: "linear-gradient(180deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", textShadow: "0 1px 2px rgba(0, 0, 0, 0.35)" }}';
const nuw = '<h1 style={{ backgroundImage: "linear-gradient(180deg, #FF9933 0%, #FFF4E0 50%, #138808 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" }}';
if (s.includes(old)) { s = s.replace(old, nuw); console.log("H1 fixed"); } else { console.log("H1 pattern NOT FOUND"); }
fs.writeFileSync("src/routes/index.tsx", s);
