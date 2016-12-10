'use strict';

const debug = require('debug')('wasted:recursive-search');

const mapDirectories = require('../map-directories');
const getAllStats = require('../get-all-stats');
const getRelevantInfo = require('../get-relevant-info');

// iterate through dirs, push the result of recursing each of them into a promise array, then Promise.all that array, then return.

// get files takes in a path and a cb, reads a directory, gets the file names, then calls the callback, ---> callback -- passes in the array of file names and the directory path that it was called with.

module.exports = function(dirInfo) {
  debug();
  let proms = [];
  let files = [];
  let dirs = [];

  function _recurse(filePath) {
    debug('_recurse');
    return new Promise((resolve, reject) => {
      // console.log(filePath);
      if (filePath.length) {
        mapDirectories(dirInfo)
        .then(promArray => {
          proms = proms.concat.apply(proms, promArray);
          return proms;
        })
        .then(getAllStats)
        .then(stats => Promise.all(stats))
        .then(getRelevantInfo)
        .then(fileInfo => {
          dirs = [];
          fileInfo.forEach(file => {
            file.type === 'File' ? files.push(file) : dirs.push(file.path);
          })
          console.log('FILES', files);
          console.log('DIRS', dirs);
          return dirs;
        })
        .then(_recurse)
        .catch(reject('error reading files'));
      }
      resolve(files);
    });
  }

  return _recurse(dirInfo);
};
