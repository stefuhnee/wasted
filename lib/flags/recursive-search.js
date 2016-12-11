'use strict';

const debug = require('debug')('wasted:recursive-search');

const mapDirectories = require('../map-directories');
const getAllStats = require('../get-all-stats');
const getRelevantInfo = require('../get-relevant-info');

module.exports = function(dirInfo) {
  debug();
  let proms = [];
  let files = [];

  function _recurse(filePaths) {
    let dirs = [];
    debug('_recurse');
    return new Promise((resolve, reject) => {
      // console.log(filePath);
      if (filePaths.length) {
        mapDirectories(dirInfo)
        .then(promArray => {
          proms = proms.concat.apply(proms, promArray);
          return proms;
        })
        .then(getAllStats)
        .then(stats => Promise.all(stats))
        .then(getRelevantInfo)
        .then(fileInfo => {
          fileInfo.forEach(file => {
            if (file.type === 'File') files.push(file);
            else dirs.push(file.path);
          });
          console.log('dirs', dirs);
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
