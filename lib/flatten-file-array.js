'use strict';

const debug = require('debug')('wasted:flatten-file-array');

module.exports = function(fileNames) {
  debug();
  fileNames = fileNames.reduce((acc, fileName) => {
    return acc.concat(fileName);
  }, []);
  return fileNames;
};
