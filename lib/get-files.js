'use strict';

const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));
const debug = require('debug')('wasted:get-files');

module.exports = function(dirPath, cb) {
  debug();
  return fsProm.readdirAsync(dirPath)
    .then(fileNames => {
      if (this) this.fileNames = fileNames;
      return cb(fileNames, dirPath);
    })
    .catch(console.error('sup'));
};
