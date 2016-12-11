'use strict';

const debug = require('debug')('wasted:map-directories');

const getFiles = require('./get-files');

module.exports = function(dirInfo) {
  return Promise.all(dirInfo.map(dir => {
    return new Promise((resolve, reject) => {
      getFiles(dir.path)
      .then(resolve)
      .catch(reject);
    });
  }));
};
