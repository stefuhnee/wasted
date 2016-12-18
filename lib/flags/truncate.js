'use strict';

const debug = require('debug')('wasted:truncate');

module.exports = function(fileInfo, num) {
  debug();
  return fileInfo.slice(0, num || 5);
};
