'use strict';

const debug = require('debug')('wasted:recursive-search');

const mapDirectories = require('../map-directories');
const getAllStats = require('../get-all-stats');
const getRelevantInfo = require('../get-relevant-info');

module.exports = function(dirInfo) {
  debug();
  let proms = [];
  let files = [];

  function _recurse(dirs) {
    debug('_recurse');
    return new Promise((resolve, reject) => {
      // console.log(filePath);
      if (dirs.length) {
        mapDirectories(dirInfo)
        .then(promArray => {
          proms = proms.concat.apply(proms, promArray);
          return proms;
        })
        .then(getAllStats)
        .then(stats => Promise.all(stats))
        .then(getRelevantInfo)
        .then(fileInfo => {
          fileInfo.forEach((file, i, arr) => {
            if (file.type === 'File') {
              console.log('IAM A FILE')
              files.push(file);
              arr[i] = file.path;
            } else {
              console.log('I AM A DUR')
              arr.splice(i, 1);
            }
          });
          console.log('fileInfo', fileInfo)
          if (Array.isArray(fileInfo)) return fileInfo;
          return [ fileInfo ];
        })
        .then(_recurse)
        .catch(reject('error reading files'));
      }
      resolve(files);
    });
  }

  return _recurse(dirInfo);
};
