const assert = require('assert');
const { partOne, partTwo } = require('./solution');

const testInput = `abc

a
b
c

ab
ac

a
a
a
a

b`;

describe('Day 6', () => {

  describe('Part One', () => {
    it('should return 11 given test input', () => {
      assert.strictEqual(partOne(testInput), 11)
    });
  });
  
  describe('Part Two', () => {
    it('should return 6 given test input', () => {
      assert.strictEqual(partTwo(testInput), 6)
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