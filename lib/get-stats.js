'use strict';

const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));
const debug = require('debug')('wasted:get-stats');

module.exports = function(path) {
  debug();
  return new Promise((resolve, reject) => {
    fsProm.statAsync(path)
    .then(stats => {
      stats.path = path;
      console.log('stats', stats);
      resolve(stats);
    })
  .catch(reject);
  });
};
