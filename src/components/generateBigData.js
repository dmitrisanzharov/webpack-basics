// generateBigData.js (Run: node generateBigData.js)
const fs = require("fs");

const bigData = {
  message: "This is a massive JSON file to slow down Webpack.",
  data: []
};

// Generate 100 large objects with 1 million characters each
for (let i = 0; i < 100; i++) {
  bigData.data.push({
    id: i + 1,
    value: "x".repeat(100000) // 100,000 characters per object
  });
}

// Save as JSON
fs.writeFileSync("bigData.json", JSON.stringify(bigData, null, 2));
console.log("Generated bigData.json (≈10MB)!");