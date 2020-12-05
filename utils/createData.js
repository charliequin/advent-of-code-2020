const fs = require('fs');

const readData = fileName => {
  return fs
    .readFileSync(fileName)
    .toString()
    .split('\n');
};

const writeFile = (dataArr, fileName) => {
  const formatData = dataArr.map(str => `'${str}'`);
  fs.appendFile(fileName, `[${formatData}]`, err => {
    if (err) throw err;
  });
};

const createData = (path, fileName) => {
  const data = readData(path);
  return writeFile(data, fileName);
};

module.exports = { createData, readData };
