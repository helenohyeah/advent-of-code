const input = require('./input');

/* 
===Part 1===
Find the two entries that sum to 2020
Multiply them together for the answer
*/

// Sort numbers from smallest to largest
const sorted = input.sort((a, b) => a - b);

// Loop through each number (num1)
sorted.forEach((num1, index) => {
  // Inner loop through each number starting at the index
  for (let i = index + 1; i < sorted.length; i++) {
    // If sum is 2020 return console log
    if (num1 + sorted[i] === 2020) {
      return console.log(`🎄 ${num1} + ${sorted[i]} = 2020\n🎄 Solution: ${num1 * sorted[i]}`);
    // If sum is greater than 2020 move on to next number
    } else if (num1 + sorted[i] > 2020) {
      break;
    }
  }
});