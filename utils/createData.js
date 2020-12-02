const fs = require('fs');

const dataArr = fs
  .readFileSync('./data.txt')
  .toString()
  .split('\n');

const readData = fileName => {
  return fs
    .readFileSync(fileName)
    .toString()
    .split('\n');
};

const writeFile = (dataArr, fileName) => {
  const mappedArr = dataArr.map(str => `'${str}'`);
  fs.appendFile(fileName, `[${mappedArr}]`, err => {
    if (err) throw err;
  });
};

const createData = (path, newFileName) => {
  const data = readData(path);
  return writeFile(data, newFileName);
};

module.exports = { createData };
