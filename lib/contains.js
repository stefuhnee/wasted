'use strict';

module.exports = function(flags, flag) {
  if (flags.indexOf(flag) !== -1) return true;
  return false;
};
