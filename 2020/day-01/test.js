const assert = require('assert');
const { partOne, partTwo } = require('./solution');

describe('Day 1', () => {
  describe('Part One', () => {
    it('should return 514579 given input', () => {
      const input = `1721
      979
      366
      299
      675
      1456`;
      assert.strictEqual(partOne(input), 514579);
    });
  });
  
  describe('Part Two', () => {
    it('should return 241861950 given input', () => {
      const input = `1721
      979
      366
      299
      675
      1456`;
      assert.strictEqual(partTwo(input), 241861950);
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
