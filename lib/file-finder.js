'use strict';

const path = require('path');
const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));

const getStats = require('./get-stats');

module.exports = function(dirPath) {
  dirPath = path.resolve(dirPath);
  fsProm.readdirAsync(dirPath)
  .then(fileNames => {
    let fileStats = [];
    fileNames.forEach(fileName => {
      getStats(`${dirPath}/${fileName}`).then(stats => {
          fileStats.push({
            fileName,
            size: stats.size / 1000000,
            type: stats.isFile() ? 'file' : 'directory',
          });
        if (fileStats.length === fileNames.length) {
          return fileStats.sort((a, b) => {
            return a.size > b.size;
          });
        }
      })
      .then(console.log)
      })
    })
  .catch(console.error);
};
