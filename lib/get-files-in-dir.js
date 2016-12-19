'use strict';

const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));
const debug = require('debug')('wasted:map-directories');

const convertToPaths = require('./convert-to-paths');


module.exports = function(dirInfo) {
  debug();
  return fsProm.readdirAsync(dirInfo.path || dirInfo)
  .then(fileNames => convertToPaths(fileNames, dirInfo.path || dirInfo));
};
