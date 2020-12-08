/* 
===Part 1===
Find the two entries that sum to 2020
Multiply them together for the answer
*/

const format = (input) => input.trim().split('\n').map(Number);

const partOne = (input) => {
  // Sort numbers from smallest to largest
  const sorted = format(input).sort((a, b) => a - b);
  // Loop through each number (num1)
  let output;
  sorted.forEach((num1, index) => {
    // Inner loop through each number starting at the index
    for (let i = index + 1; i < sorted.length; i++) {
      // If sum is 2020 return multiplied together
      if (num1 + sorted[i] === 2020) {
        return output = num1 * sorted[i];
      // If sum is greater than 2020 move on to next number
      } else if (num1 + sorted[i] > 2020) {
        break;
      }
    }
  });
  return output;
}

/* 
===Part 2===
Find the three entries that sum to 2020
Multiply them together for the answer
*/

const partTwo = (input) => {
  const sorted = format(input).sort((a, b) => a - b);
  let output;
  sorted.forEach((num1, index) => {
    for (let i = index + 1; i < sorted.length; i++) {
      for (let j = index + 2; j < sorted.length; j++) {
        if (num1 + sorted[i] + sorted[j] === 2020) {
          // return console.log(`🎄 ${num1} + ${sorted[i]} + ${sorted[j]} = 2020\n🎄 Solution: ${num1 * sorted[i] * sorted[j]}`);
          return output = num1 * sorted[i] * sorted[j];
        } else if (num1 + sorted[i] + sorted[j] > 2020) {
          break;
        }
      }
    }
  });
  return output;
}

module.exports = {
  partOne,
  partTwo
};