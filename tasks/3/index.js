const data = require('./data.js');

// Check string position for tree
const checkIsTree = str => (str === '#' ? true : false);

// Map through data by given steps
const traverseData = (data, steps) => {
  let index = 0;
  let trees = 0;

  data.map((str, idx) => {
    if (idx % steps.y === 0) {
      if (index >= str.length) {
        index = index - str.length;
      }

      const isTree = checkIsTree(str.charAt(index));

      if (isTree) {
        trees += 1;
      }

      index += steps.x;
    }
  });

  return trees;
};

// Answer 272
const partOne = traverseData(data, { x: 3, y: 1 });
// Answer 85
const partTwo = traverseData(data, { x: 1, y: 1 });
// Answer 66
const partThree = traverseData(data, { x: 5, y: 1 });
// Answer 73
const partFour = traverseData(data, { x: 7, y: 1 });
// Answer 35
const partFive = traverseData(data, { x: 1, y: 2 });

module.exports = { partOne, partTwo, partThree, partFour, partFive };
