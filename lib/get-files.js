'use strict';

const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));
const debug = require('debug')('wasted:get-files');

module.exports = function(dirPath, cb) {
  debug();
  console.log('dirpath', dirPath);
  return fsProm.readdirAsync(dirPath)
    .then(fileNames => {
      console.log('dirPath', dirPath, '\nfileNames', fileNames);
      return cb(fileNames, dirPath);
    })
    .catch(console.error('error in get files'));
};
