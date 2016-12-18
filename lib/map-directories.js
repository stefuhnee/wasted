'use strict';

const debug = require('debug')('wasted:map-directories');

const getStats = require('./get-stats');

module.exports = function(dirInfo) {
  debug();
  dirInfo.map(dir => {
    return new Promise((resolve, reject) => {
      getStats(dir.path)
      .then(resolve)
      .catch(reject);
    });
  });
};
