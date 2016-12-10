'use strict';

module.exports = function(unsortedArr) {
  return unsortedArr.sort((a, b) => {
    return a.size - b.size;
  });
};
