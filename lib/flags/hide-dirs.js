'use strict';

const debug = require('debug')('wasted:hide-dirs');

module.exports = function(fileInfo) {
  debug();
  return fileInfo.filter(file => {
    return file.type !== 'Directory';
  });
};
