'use strict';

const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));

module.exports = function(filePath) {
  return new Promise((resolve, reject) => {
    fsProm.statAsync(filePath)
    .then(resolve)
    .catch(reject);
  });
};
