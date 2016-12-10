'use strict';

const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));
const getStats = require('../get-stats');

// iterate through dirs, push the result of recursing each of them into a promise array, then Promise.all that array, then return.

module.exports = function(dirInfo, filePath) {
  dirInfo.forEach(dir => {
    
  })
}
