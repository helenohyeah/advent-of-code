const format = (input) => input.trim().split('\n').map(e => e.trim());

const partOne = (input) => {

  const list = format(input);
  let validCount = 0;

  list.forEach(item => {
    const policy = item.split(':')[0];
    const times = policy.split(' ')[0];
    const timesLow = parseInt(times.split('-')[0]);
    const timesHigh = parseInt(times.split('-')[1]);
    const letter = policy.split(' ')[1];
    const password = item.split(':')[1].trim();

    // Counts number of times a letter appears in a string
    const countLetter = (string, letter) => {
      let count = 0;
      string.split('').forEach(char => char === letter ? count++ : null);
      return count;
    };

    // Increase count if password is valid (adheres to policy)
    (countLetter(password, letter) >= timesLow && countLetter(password, letter) <= timesHigh) ? validCount++ : null;
  });

  return validCount;
};

const partTwo = (input) => {

  const list = format(input);
  let validCount = 0;

  list.forEach(item => {
    const policy = item.split(':')[0];
    const pos = policy.split(' ')[0];
    const pos1 = parseInt(pos.split('-')[0]);
    const pos2 = parseInt(pos.split('-')[1]);
    const letter = policy.split(' ')[1];
    const password = item.split(':')[1].trim();

    // Increase count if letter exists at only 1 position of the password
    if (password.charAt(pos1 - 1) === letter && password.charAt(pos2 - 1) !== letter) {
      validCount++;
    } else if (password.charAt(pos1 - 1) !== letter && password.charAt(pos2 - 1) === letter) {
      validCount++;
    }
  });

  return validCount;
};

module.exports = {
  partOne,
  partTwo
};