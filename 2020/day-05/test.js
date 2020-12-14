const assert = require('assert');
const { partOne, partTwo } = require('./solution');

const testInput = `FBFBBFFRLR
BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`;

describe('Day 5', () => {

  describe('Part One', () => {
    it('should get the highest seat Id given test input', () => {
      assert.strictEqual(partOne(testInput), 820)
    });
  });
  
  describe('Solution', () => {
    it('should print the solution given input', () => {
      const input = require('./input.js');
      console.log(`Part One: ${partOne(input)}`);
      console.log(`Part Two: ${partTwo(input)}`);
    });
  });
});