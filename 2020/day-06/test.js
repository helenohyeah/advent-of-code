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
    it.only('should return 11 given test input', () => {
      assert.strictEqual(partOne(testInput), 11)
    });
  });
  
  describe('Part Two', () => {
    it('should ...', () => {
      assert.strictEqual(partTwo(testInput), '...')
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