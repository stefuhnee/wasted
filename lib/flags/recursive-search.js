'use strict';

const debug = require('debug')('wasted:recursive-search');

const mapDirectories = require('../map-directories');
const getAllStats = require('../get-all-stats');
const getRelevantInfo = require('../get-relevant-info');

module.exports = function(dirInfo) {
  debug();
  let proms = [];
  let files = [];
  let count = 0;

  function _recurse(filePaths) {
    debug('_recurse');

    return new Promise((resolve, reject) => {
      if (filePaths.length) {
        mapDirectories(filePaths)
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
            else if (count < 5) return _recurse([file]);
          });
          console.log('count', count);
          console.log('files', files[files.length - 1])
         resolve(files);
        })
        .catch(reject('error reading files'));
      }
    });
  }

  // return new Promise ((resolve, reject) => {
  _recurse(dirInfo).then(data => console.log('data', data))
    // .then(console.log);
  // })
};
