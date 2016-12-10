'use strict';

const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));
const debug = require('debug')('wasted:get-stats');

module.exports = function(filePath) {
  debug();
  return new Promise((resolve, reject) => {
    fsProm.statAsync(filePath)
    .then(resolve)
    .catch(reject);
  });
};
