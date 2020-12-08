const assert = require('assert');
const { partOne, partTwo } = require('./solution');

describe('Day 2', () => {
  describe('Part One', () => {
    it('should return 2 given input', () => {
      const input = `1-3 a: abcde
      1-3 b: cdefg
      2-9 c: ccccccccc`;
      assert.strictEqual(partOne(input), 2);
    });
  });
  
  describe('Part Two', () => {
    it('should return 1 given input', () => {
      const input = `1-3 a: abcde
      1-3 b: cdefg
      2-9 c: ccccccccc`;
      assert.strictEqual(partTwo(input), 1);
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
