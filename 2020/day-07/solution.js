const format = (input) => input.trim().split(/\n/g);

const partOne = (input) => {
  // const rules = {};
  const rules = format(input).map(rule => {
    const type = rule.split(' contain ')[0].slice(0, -1);
    const contents = rule.split(' contain ')[1];
    // console.log('type:', type, '\ncontents:', contents);
    // rules[type] = contents;
    return { type, contents };
  });
  // console.log('rules:\n', rules);

  
  // Get parent bags
  // rules.forEach(rule => {
    //   if(rule.contents.includes(childBag)) parentBags.push(rule.type);
    // });
  
  // const options = [];
  const options = {};
  let childBags = ['shiny gold bag'];

  while(childBags.length > 0) {
    // console.log('childBags:', childBags);
    let parentBags = [];
    rules.forEach(rule => {
      if(childBags.some(bag => rule.contents.includes(bag))) {
        parentBags.push(rule.type);
        // options.push(rule.type);
        options[rule.type] = true;
      };
    });
    // console.log('parentBags:', parentBags);
    childBags = parentBags;
  }
  // console.log('options:', options);
  return Object.keys(options).length;

  // // Tracks which bag types can hold a shiny gold bag
  // const options = ['shiny gold bag'];

  // // const match = (rules, options) => options.some(option => rules.some(rule => rule.contents.includes(option)));
  // const match = (rules, options) => {
  //   rules.some(rule => options.some(option => rule.contents.includes(option)));
  // }

  // while (match(rules, options)) {
  //   // console.log('rules loop start:', rules);
  //   rules.forEach((rule, index) => {
  //     options.forEach(option => {
  //       if(rule.contents.includes(option)) {
  //         options.push(rule.type);
  //         rules.splice(index, 1);
  //       }
  //     });
  //   });
  //   // console.log('rules loop end:', rules);
  // }
  
  // // console.log('options:', options);
  // return options.length - 1;
};

const partTwo = (input) => {

};

module.exports = {
  partOne,
  partTwo
};