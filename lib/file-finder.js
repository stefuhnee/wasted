'use strict';

const path = require('path');
const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));

const getStats = require('./get-stats');

module.exports = function(dirPath) {
  dirPath = path.resolve(dirPath);
  fsProm.readdirAsync(dirPath)
  .then(getStats)
  .catch(console.error);
};
