'use strict';

const debug = require('debug')('wasted:recursive-search');

const mapDirectories = require('../map-directories');
const getAllStats = require('../get-all-stats');
const getRelevantInfo = require('../get-relevant-info');

// iterate through dirs, push the result of recursing each of them into a promise array, then Promise.all that array, then return.

// get files takes in a path and a cb, reads a directory, gets the file names, then calls the callback, ---> callback -- passes in the array of file names and the directory path that it was called with.

module.exports = function(dirInfo, path) {
  debug();
  let proms = [];

  function _recurse(dirs, dirPath) {
    return new Promise((resolve, reject) => {
      console.log(dirInfo, `${dirPath}/${dirInfo.fileName}`);
      if (dirs.length) {
        mapDirectories(dirInfo, dirPath)
        .then(proms => getAllStats(proms, dirPath))
        .then(promArray => {
          proms = proms.concat.apply(proms, promArray);
          return proms;
        })
        .then(Promise.all)
        .then(stats => getRelevantInfo(stats))
        .then(result => _recurse(result, dirPath))
        .then(result => debug(result))
        .catch(reject('error reading files'));
      }
      resolve(proms);
    });
  }

  return _recurse(dirInfo, path);
};
