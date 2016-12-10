'use strict';

const debug = require('debug')('wasted:recursive-search');

const mapDirectories = require('../map-directories');
const getRelevantInfo = require('../get-relevant-info');

// iterate through dirs, push the result of recursing each of them into a promise array, then Promise.all that array, then return.

// get files takes in a path and a cb, reads a directory, gets the file names, then calls the callback, ---> callback -- passes in the array of file names and the directory path that it was called with.

module.exports = function(dirInfo, path) {
  debug();

  function _recurse(dirs, dirPath) {
    return new Promise((resolve, reject) => {
      if (dirs.length) {
        Promise.all(mapDirectories(dirInfo, dirPath))
        .then(promArray => {
          let flattenedPromises = [].concat.apply([], promArray);
          return flattenedPromises;
        })
        .then(stats => getRelevantInfo(stats))
        .catch(reject('error reading files'));
      }
    });
  }

  return _recurse(dirInfo, path);
};
