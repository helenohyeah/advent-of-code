const format = (input) => input.trim().split(/\n\n/g).map(item => item.split(/\n/g));

const partOne = (input) => {
  const allAnswers = format(input);
  
  const countAnswers = (answers) => {
    const tally = {};
    answers.join('').split('').forEach(answer => tally[answer] = true);
    const count = Object.keys(tally).length;
    return count;
  };

  const counts = allAnswers.map(answers => countAnswers(answers));
  const sum = counts.reduce((acc, cur) => acc + cur, 0);
  return sum;
};

const partTwo = (input) => {
  const allAnswers = format(input);

  const countAnswers = (answers) => {
    const tally = {};
    answers.forEach(answer => {
      answer.split('').forEach(letter => (tally[letter]) ? tally[letter] += 1 : tally[letter] = 1);
    });

    let count = 0;
    for (const key in tally) {
      (tally[key] === answers.length) ? count++ : null;
    }
    
    return count;
  };

  const counts = allAnswers.map(answers => countAnswers(answers));
  const sum = counts.reduce((acc, cur) => acc + cur, 0);
  return sum;
};

module.exports = {
  partOne,
  partTwo
};