'use strict';

const debug = require('debug')('wasted:get-relevant-info');

module.exports = function(info) {
  debug('relevant info', info);
  return info.map(stat => {
    return {
      path: stat.path,
      fileName: stat.slice(stat.path.lastIndexOf('/')),
      size: stat.size / 1000000,
      type: stat.isFile() ? 'File' : 'Directory',
      mode: stat.mode,
    };
  });
};
