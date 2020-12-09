const format = (input) => input.split(/\n\n/g).map(item => item.replace(/\n/g, ' '));

const partOne = (input) => {

  const passports = format(input);
  const reqFields = [ 'ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt' ];
  
  // Check passport keys for all required fields 
  let validCount = 0;
  passports.forEach(passport => reqFields.every(field => passport.includes(field)) ? validCount++ : null);

  return validCount;
};

const partTwo = (input) => {

  // Additional formatting to turn passport data into objects
  const passports = format(input).map(passportData => {
    const passport = {};
    passportData.split(' ').map(field => passport[field.split(':')[0]] = field.split(':')[1]);
    return passport;
  });

  const checkBirthYear = (byr) => (byr.length === 4 && byr >= 1920 && byr <= 2002);
  const checkIssueYear = (iyr) => (iyr.length === 4 && iyr >= 2010 && iyr <= 2020);
  const checkExpirationYear = (eyr) => (eyr.length === 4 && eyr >= 2020 && eyr <= 2030);
  const checkHeight = (hgt) => {
    const unit = hgt.substring(hgt.length - 2);
    const value = hgt.substring(0, hgt.length - 2);
    if (unit === 'cm') {
      return (Number(value) >= 150 && Number(value) <= 193)
    } else if (unit === 'in') {
      return (Number(value) >= 59 && Number(value) <= 76)
    } else {
      return false;
    }
  };
  const checkHairColor = (hcl) => hcl.match(/^#[a-f0-9]+$/g);
  const checkEyeColor = (ecl) => ecl.match(/amb|blu|brn|gry|grn|hzl|oth/);
  const checkPassportId = (pid) => (pid.length === 9 && Number(pid));
  
  const reqFields = [ 'ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt' ];
  const checkFields = (passport) => reqFields.every(field => Object.keys(passport).includes(field));
  const checkValues = (passport) => {
    return (
      checkBirthYear(passport.byr)
      && checkIssueYear(passport.iyr)
      && checkExpirationYear(passport.eyr)
      && checkHeight(passport.hgt)
      && checkHairColor(passport.hcl)
      && checkEyeColor(passport.ecl)
      && checkPassportId(passport.pid)
    );
  };

  // Check passpots for all required fields and valid values
  let validCount = 0;
  passports.forEach(passport => (checkFields(passport) && checkValues(passport)) ? validCount++ : null);

  return validCount;
};

module.exports = {
  partOne,
  partTwo
};