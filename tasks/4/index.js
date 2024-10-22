const fs = require('fs');

const { readData } = require('../../utils/createData');
const data = require('./data.js');
const { valHeight, valDates, valHair, valEye, valId } = require('./validators');

const writeFile = (dataArr, fileName) => {
  let passportArr = [];
  let passportObj = {};

  dataArr.map(str => {
    // If string is blank wipe values and push passport
    if (str === '') {
      passportArr.push(passportObj);
      passportObj = {};
    }

    // Format strings to object
    str.split(' ').map(str => {
      const splitStr = str.split(':');
      if (!(splitStr[0] === '')) {
        const obj = { [splitStr[0]]: splitStr[1] };
        passportObj = { ...passportObj, ...obj };
      }
    });
  });

  const stringified = JSON.stringify(passportArr, null, 2);

  fs.appendFile(fileName, stringified, err => {
    if (err) throw err;
  });
};

const createData = (path, fileName) => {
  const data = readData(path);
  return writeFile(data, fileName);
};

const verifyPassports = (dataArr, partNum) => {
  const passportKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  let validPassports = 0;

  dataArr.map(passport => {
    const hasRequiredKeys = passportKeys.every(item => passport.hasOwnProperty(item));
    const hasValidValues = passport => {
      const birthYear = valDates(passport['byr'], 1920, 2002);
      const issueYear = valDates(passport['iyr'], 2010, 2020);
      const expiryYear = valDates(passport['eyr'], 2020, 2030);
      const height = valHeight(passport['hgt']);
      const hair = valHair(passport['hcl']);
      const eye = valEye(passport['ecl']);
      const id = valId(passport['pid']);

      return birthYear && issueYear && expiryYear && height && hair && eye && id;
    };

    switch (partNum) {
      case 0:
        if (hasRequiredKeys) {
          return (validPassports += 1);
        }
      case 1:
        if (hasRequiredKeys && hasValidValues(passport)) {
          return (validPassports += 1);
        }
      default:
        return;
    }
  });

  return validPassports;
};

// Answer 219
const partOne = verifyPassports(data, 0);

// Answer 127
const partTwo = verifyPassports(data, 1);

module.exports = { partOne, partTwo };
