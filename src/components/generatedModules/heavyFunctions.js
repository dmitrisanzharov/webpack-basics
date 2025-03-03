// heavyFunctions.js
export function veryHeavyFunction(num) {
    let total = 0;
    for (let i = 0; i < 1e6; i++) { // 1 million iterations
      total += Math.sqrt(num) * Math.sin(i);
    }
    return total;
  }