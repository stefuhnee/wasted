'use strict';

const debug = require('debug')('wasted:get-relevant-info');

module.exports = function(info) {
  debug();
  return new Promise((resolve) => {
    let relevantInfo = info.map(stat => {
      return {
        path: stat.path,
        fileName: stat.path.slice(stat.path.lastIndexOf('/') + 1),
        size: stat.size / 1000000,
        type: stat.isFile() ? 'File' : 'Directory',
        mode: stat.mode,
      };
    });
    resolve(relevantInfo);
  });
};
