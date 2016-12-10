'use strict';

const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));
const debug = require('debug')('wasted:get-stats');

module.exports = function(filePath, fileName) {
  debug();
  return new Promise((resolve, reject) => {
    fsProm.statAsync(filePath)
    .then(stats => {
      stats.fileName = fileName;
      resolve(stats);
    })
    .catch(reject);
  });
};
