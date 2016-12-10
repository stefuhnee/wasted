'use strict';

module.exports = function(unsortedArr) {
  return unsortedArr.sort((a, b) => {
    return b.size - a.size;
  });
};
