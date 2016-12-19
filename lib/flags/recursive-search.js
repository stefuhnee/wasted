'use strict';

const debug = require('debug')('wasted:recursive-search');
const readDirs = require('../read-directories');
const getStats = require('../get-stats');
const getRelevantInfo = require('../get-relevant-info');

module.exports = function(dirInfo) {
  debug();
  let count = 0;

  function _recurse(filePaths) {
    let dirs = filePaths.filter(file => file.type === 'Directory');
    count++;
    debug('_recurse');
    return Promise.all(dirs.map(readDirs))
    .then(fileNames => {
      fileNames = fileNames.reduce((acc, fileName) => {
        return acc.concat(fileName);
      }, []);
      return fileNames;
    })
    .then(allFiles => Promise.all(allFiles.map(getStats)))
    .then(getRelevantInfo)
    .then(files => {
      if (count < 5) return _recurse(files);
      else {
        return new Promise((resolve) => {
          resolve(files);
        });
      }
    });
  }

  return _recurse(dirInfo);

};
