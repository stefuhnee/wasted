'use strict';

const debug = require('debug')('wasted:contains');

module.exports = function(flags, flag) {
  debug();
  if (flags.indexOf(flag) !== -1) return true;
  return false;
};
