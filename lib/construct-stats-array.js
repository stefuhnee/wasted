'use strict';

const debug = require('debug')('wasted:construct-stats-array');

const getStats = require('./get-stats');

module.exports = function(fileNames, path) {
  debug();
  let fileProms = [];
  fileNames.forEach(fileName => {
    fileProms.push(getStats(`${path}/${fileName}`, fileName));
  });
  return fileProms;
};
