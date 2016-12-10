'use strict';

const debug = require('debug')('wasted:sort-descending');

module.exports = function(unsortedArr) {
  debug();
  return unsortedArr.sort((a, b) => {
    return b.size - a.size;
  });
};
