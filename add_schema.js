const fs=require("fs");
const f="src/routes/__root.tsx";
let s=fs.readFileSync(f,"utf8");
if(s.includes("\"@type\": \"WebSite\"")){console.log("ALREADY PRESENT - skip");process.exit(0);}
const anchor="},\n    ],";
const newBlock="},\n      {\n        type: \"application/ld+json\",\n        children: JSON.stringify({\n          \"@context\": \"https://schema.org\",\n          \"@type\": \"WebSite\",\n          name: site.name,\n          url: \"https://www.kulhad.shop\",\n        }),\n      },\n    ],";
const idx=s.lastIndexOf(anchor);
if(idx===-1){console.log("ANCHOR NOT FOUND - ruko batao");process.exit(1);}
s=s.slice(0,idx)+newBlock+s.slice(idx+anchor.length);
fs.writeFileSync(f,s);
console.log("WebSite schema ADDED");
