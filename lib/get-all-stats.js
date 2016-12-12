'use strict';

const debug = require('debug')('wasted:get-all-stats');

const getStats = require('./get-stats');

module.exports = function(fileNames) {
  console.log('getting all stats');
  debug();
  return Promise.all(fileNames.map(getStats));
};
