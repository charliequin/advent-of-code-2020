const data = require('./data.js');

// Split data arr into organised arr
const splitStrings = data => {
  return data.map(str => str.split(' '));
};

// Get n: letter symbol
const getSymbol = str => str.charAt(0);

// Get min and max rules for symbol
const getRules = str => {
  const ints = str.split('-');
  return {
    min: ints[0],
    max: ints[1],
  };
};

// Get indexes for number rules
const getIndexes = str => {
  const ints = str.split('-');
  return [ints[0] - 1, ints[1] - 1];
};

// Verify passwords against part 1 criteria
const verifyPasswordsOne = data => {
  const formatData = splitStrings(data);

  return formatData
    .map(str => {
      const rules = getRules(str[0]);
      const symbol = getSymbol(str[1]);
      const password = str[2];

      const total = password.split('').filter(x => x === symbol).length;
      if (total >= rules.min && total <= rules.max) {
        return true;
      }

      return false;
    })
    .filter(str => str === true).length;
};

// Verify passwords against part 2 criteria
const verifyPasswordsTwo = data => {
  const formatData = splitStrings(data);

  return formatData
    .map(str => {
      const indexes = getIndexes(str[0]);
      const symbol = getSymbol(str[1]);
      const password = str[2].split('');

      const isFirst = password[indexes[0]] === symbol;
      const isSecond = password[indexes[1]] === symbol;

      if ((isFirst && !isSecond) || (!isFirst && isSecond)) {
        return true;
      }

      return false;
    })
    .filter(str => str === true).length;
};

// Answer 445
const partOne = data => verifyPasswordsOne(data);

// Answer 491
const partTwo = data => verifyPasswordsTwo(data);

module.exports = { partOne, partTwo };
