'use strict';

const path = require('path');
const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));

const getStats = require('./get-stats');

module.exports = function(dirPath) {
  dirPath = path.resolve(dirPath);
  fsProm.readdirAsync(dirPath)
  .then(filePaths => {
    let promArray = [];
    filePaths.forEach(filePath => {
      getStats(`${dirPath}/${filePath}`).then(console.log)
    });
  })
  .then(console.log)
  .catch(console.error);
};
