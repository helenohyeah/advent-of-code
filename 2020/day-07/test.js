const assert = require('assert');
const { partOne, partTwo } = require('./solution');

const testInput = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

describe('Day 7', () => {

  describe('Part One', () => {
    it.only('should return 4 given test input', () => {
      assert.strictEqual(partOne(testInput), 4);
    });
  });
  
  describe('Part Two', () => {
    it('should ...', () => {
      assert.strictEqual(partTwo(testInput), '...');
    });
  });
  
  describe('Solution', () => {
    it.only('should print the solution given input', () => {
      const input = require('./input.js');
      console.log(`Part One: ${partOne(input)}`);
      console.log(`Part Two: ${partTwo(input)}`);
    });
  });
});