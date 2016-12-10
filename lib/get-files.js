'use strict';

const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));
const debug = require('debug')('wasted:get-files');

module.exports = function(dirPath) {
  debug();
  return new Promise((resolve, reject) => {
    fsProm.readdirAsync(dirPath)
      .then(fileNames => {
        fileNames.forEach((file, i, arr) => arr[i] = `${dirPath}/${file}`);
        resolve(fileNames);
      })
      .catch(reject);
  });
};
