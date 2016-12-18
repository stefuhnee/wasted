'use strict';

const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));
const debug = require('debug')('wasted:map-directories');

const convertToPaths = require('./convert-to-paths');


module.exports = function(dirInfo) {
  debug();
  return new Promise((resolve, reject) => {
    fsProm.readdirAsync(dirInfo.path)
    .then(fileNames => convertToPaths(fileNames, dirInfo.path))
    .then(resolve)
    .catch(reject);
  });
};
