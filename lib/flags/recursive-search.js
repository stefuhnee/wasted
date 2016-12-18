'use strict';

const debug = require('debug')('wasted:recursive-search');
const readDirs = require('../read-directories');
const getStats = require('../get-stats');
const getRelevantInfo = require('../get-relevant-info');

module.exports = function(dirInfo) {
  debug();

  function _recurse(filePaths) {
    debug('_recurse');
    return new Promise((resolve, reject) => {
      Promise.all(filePaths.map(readDirs))
      .then(fileNames => {
        fileNames = fileNames.reduce((acc, fileName) => {
          return acc.concat(fileName);
        }, []);
        return fileNames;
      })
      .then(allFiles => Promise.all(allFiles.map(getStats)))
      .then(getRelevantInfo)
      .then(resolve)
      .catch(reject);
    });
  }
  return _recurse(dirInfo);

};
