'use strict';

const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));

module.exports = function(dirPath, cb) {
  return fsProm.readdirAsync(dirPath)
    .then(fileNames => {
      if (this) this.fileNames = fileNames;
      return cb(fileNames, dirPath);
    })
    .catch(console.error('sup'));
};
