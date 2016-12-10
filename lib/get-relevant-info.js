'use strict';

const debug = require('debug')('wasted:get-relevant-info');

module.exports = function(info) {
  debug('relevant info', info);
  return info.map(stat => {
    return {
      fileName: stat.fileName,
      size: stat.size / 1000000,
      type: stat.isFile() ? 'File' : 'Directory',
      mode: stat.mode,
    };
  });
};
