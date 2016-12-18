'use strict';

const debug = require('debug')('wasted:recursive-search');
const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));
const readDirs = require('../read-directories');
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
      Promise.all(filePaths.map(readDirs))
      .then(fileNames => {
        Promise.all(fileNames.map(getStats))
        .then(console.log)
      });
    });
  }

  _recurse(dirInfo);
}
      //   .then(fileNames => Promise.all(fileNames.map(getStats)))
      //   .then(getRelevantInfo)
      //   .then(fileInfo => {
      //     fileInfo.forEach(file => {
      //       if (file.type === 'File') files.push(file);
      //       else recurseProms.push(_recurse([file]));
      //     });
      //     // console.log(recurseProms)
      //     return recurseProms;
      //   })
      //   .catch(reject('error reading files'));
      // }
    // })
