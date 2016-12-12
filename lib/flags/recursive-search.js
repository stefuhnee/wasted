'use strict';

const debug = require('debug')('wasted:recursive-search');

const mapDirectories = require('../map-directories');
const getStats = require('../get-stats');
const getRelevantInfo = require('../get-relevant-info');

module.exports = function(dirInfo) {
  debug();
  let proms = [];
  let recurseProms = [];
  let files = [];

  function _recurse(filePaths) {
    debug('_recurse');

    return new Promise((resolve, reject) => {
      if (files.length < 100) {
        mapDirectories(filePaths)
        .then(promArray => proms.concat.apply(proms, promArray))
        .then(fileNames => Promise.all(fileNames.map(getStats)))
        .then(stats => Promise.all(stats))
        .then(getRelevantInfo)
        .then(fileInfo => {
          fileInfo.forEach(file => {
            if (file.type === 'File') files.push(file);
            else recurseProms.push(_recurse([file]));
          });
          // console.log(recurseProms)
          return recurseProms;
        })
        .catch(reject('error reading files'));
      }
    })
    .then(console.log);
  }

  // return new Promise ((resolve, reject) => {
  _recurse(dirInfo).then(data => console.log('data', data));
    // .then(console.log);
  // })
};
