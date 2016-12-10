'use strict';

const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));
const debug = require('debug')('wasted:get-files');

module.exports = function(dirPath) {
  debug();
  return new Promise((resolve, reject) => {
    fsProm.readdirAsync(dirPath)
      .then(fileNames => {
        console.log('dirPath', dirPath, '\nfileNames', fileNames);
        resolve(fileNames);
      })
      .catch(reject);
  });
};
