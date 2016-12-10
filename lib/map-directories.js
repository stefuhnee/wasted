'use strict';

const debug = require('debug')('wasted:map-directories');

const getFiles = require('./get-files');
const constructStatsArray = require('./get-all-stats');

module.exports = function(dirInfo, filePath) {
  debug();
  return Promise.all(dirInfo.map(dir => {
    return new Promise((resolve, reject) => {
      getFiles(`${filePath}/${dir.fileName}`)
      .then(resolve)
      .catch(reject);
    });
  }));
};
