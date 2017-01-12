'use strict';

const debug = require('debug')('wasted:flatten-file-array');

module.exports = function(fileNames) {
  debug();
  return fileNames.reduce((acc, fileName) => {
    return acc.concat(fileName);
  }, []);
};
