const format = (input) => input.trim().split('\n').map(e => e.trim());

const partOne = (input, slope = { right: 3, down: 1 }) => {
  
  const mapPattern = format(input);

  // Calculate map repeats from map pattern and slope (right 3, down 1)
  const createMap = (pattern) => {
    const mapHeight = pattern.length;
    const mapRepeats = Math.ceil((mapHeight - 1) * slope.right / pattern[0].length);
    return pattern.map(row => row.repeat(mapRepeats));
  };

  const map = createMap(mapPattern);
  const position = { right: 1, down: 1 };
  let treeCount = 0;
  
  while(position.down < map.length) {
    // Move according to slope
    position.down += slope.down;
    position.right += slope.right;

    // Check for tree
    (map[position.down - 1].charAt(position.right - 1) === '#') ? treeCount++ : null;
  }

  return treeCount;
};

const partTwo = (input) => {

  const slopes = [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 }
  ];

  let multiplied = 1;

  slopes.forEach(slope => multiplied *= partOne(input, slope));

  return multiplied;
};

module.exports = {
  partOne,
  partTwo
};