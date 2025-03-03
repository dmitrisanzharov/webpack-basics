// generateModules.js (Run with: node generateModules.js)
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "generatedModules");
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

for (let i = 1; i <= 1000; i++) {
  fs.writeFileSync(
    path.join(dir, `module${i}.js`),
    `import { veryHeavyFunction } from "./heavyFunctions";\nexport const data${i} = veryHeavyFunction(${i});\n`
  );
}

console.log("Generated 1,000 modules for Webpack stress testing!");