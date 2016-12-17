'use strict';

const debug = require('debug')('wasted:map-directories');

const getFiles = require('./convert-to-paths');

module.exports = function(dirInfo) {
  debug();
  return Promise.all(dirInfo.map(dir => {
    return new Promise((resolve, reject) => {
      getFiles(dir.path)
      .then(resolve)
      .catch(reject);
    });
  }));
};
