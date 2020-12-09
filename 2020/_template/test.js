const assert = require('assert');
const { partOne, partTwo } = require('./solution');

const testInput = ``;

describe('Day ...', () => {

  describe('Part One', () => {
    it('should ...', () => {
      assert.strictEqual(partOne(testInput), '...')
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