'use strict';

const debug = require('debug')('wasted:show-hidden-files');

module.exports = function(fileInfo) {
  debug();
  return fileInfo.filter(file => {
    return file.mode !== 33060;
  });
};
