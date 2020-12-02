const data = require('./data');

// Get pairs that total 2020
const getPairs = data => {
  let index = 0;

  for (let i = 0; i <= data.length; i++) {
    let number = data[index];

    if (data[i] !== number && data[i] + number === 2020) {
      return [data[i], number];
    }

    if (i === data.length) {
      i = 0;
      index++;
    }
  }
};

// Get triplets that total 2020
const getTriplets = data => {
  let index = 0;

  for (let i = 0; i <= data.length; i++) {
    let number = data[index];

    for (let j = 0; j <= data.length; j++) {
      if (data[i] !== number && data[i] + number + data[j] === 2020) {
        return [data[i], number, data[j]];
      }
    }

    if (i === data.length) {
      i = 0;
      index++;
    }
  }
};

// Answer 1006875
const partOne = data => {
  return getPairs(data);
};

// Answer 165026160
const partTwo = data => {
  return getTriplets(data);
};

module.exports = { partOne, partTwo };
