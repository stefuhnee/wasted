'use strict';

const path = require('path');
const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));

const getStats = require('./get-stats');
const getRelevantInfo = require('./get-relevant-info');
const sortDesc = require('./sort-descending');

module.exports = function(dirPath) {
  let fileNamesArr;
  dirPath = path.resolve(dirPath);
  fsProm.readdirAsync(dirPath)
  .then(fileNames => {
    fileNamesArr = fileNames;
    let fileProms = [];
    fileNames.forEach(fileName => {
      fileProms.push(getStats(`${dirPath}/${fileName}`));
    });
    return fileProms;
  })
  .then(fileInfo => Promise.all(fileInfo))
  .then(stats => getRelevantInfo(stats, fileNamesArr))
  .then(sortDesc)
  .then(console.log)
  .catch(console.error);
};
