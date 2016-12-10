'use strict';

const debug = require('debug')('wasted:map-directories');

const getFiles = require('./get-files');
const constructStatsArray = require('./construct-stats-array');

module.exports = function(dirInfo, filePath) {
  debug();
  return dirInfo.map(dir => {
    return new Promise((resolve, reject) => {
      getFiles(`${filePath}/${dir.fileName}`, constructStatsArray)
      .then(resolve)
      .catch(reject);
    });
  });
};
