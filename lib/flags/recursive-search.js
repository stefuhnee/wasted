'use strict';

const debug = require('debug')('wasted:recursive-search');

const getFiles = require('../get-files');
const constructStatsArray = require('../construct-stats-array');

// iterate through dirs, push the result of recursing each of them into a promise array, then Promise.all that array, then return.

// get files takes in a path and a cb, reads a directory, gets the file names, then calls the callback, ---> callback -- passes in the array of file names and the directory path that it was called with.

module.exports = function(dirInfo, filePath) {
  debug();
  return new Promise((resolve, reject) => {
    Promise.all(dirInfo.map(dir => {
      return new Promise((resolve, reject) => {
        getFiles(`${filePath}/${dir.fileName}`, constructStatsArray)
        .then(resolve)
        .catch(reject);
      });
    }))
    .then(promArray => {
      let flattenedPromises = [].concat.apply([], promArray);
      resolve(flattenedPromises);
    })
    .catch(reject('error reading files'));
  });
};
