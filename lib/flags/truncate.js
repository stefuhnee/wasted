'use strict';

const debug = require('debug')('wasted:truncate');

module.exports = function(fileInfo) {
  debug();
  return fileInfo.slice(0, 5);
};
