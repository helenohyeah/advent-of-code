const assert = require('assert');
const { partOne, partTwo } = require('./solution');

describe('Day 3', () => {
  const testInput = `..##.......
  #...#...#..
  .#....#..#.
  ..#.#...#.#
  .#...##..#.
  ..#.##.....
  .#.#.#....#
  .#........#
  #.##...#...
  #...##....#
  .#..#...#.#`;

  describe('Part One', () => {
    it('should return 7 given test input', () => {
      assert.strictEqual(partOne(testInput), 7);
    });
  });
  
  describe('Part Two', () => {
    it('should return 336 given test input', () => {
      assert.strictEqual(partTwo(testInput), 336);
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