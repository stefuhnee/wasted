'use strict';

const path = require('path');
const debug = require('debug')('wasted:file-finder');

const getRelevantInfo = require('./get-relevant-info');
const applyFlags = require('./apply-flags');
const sortDesc = require('./sort-descending');
const prettyPrint = require('./pretty-print');
const getFilesInDir = require('./get-files-in-dir');
const getStats = require('./get-stats');

module.exports = function(dirPath) {
  debug();
  let flags = arguments[1];
  dirPath = path.resolve(dirPath);
  getFilesInDir(dirPath)
  .then(fileNames => Promise.all(fileNames.map(getStats)))
  .then(getRelevantInfo)
  .then(fileInfo => applyFlags(fileInfo, flags))
  .then(sortDesc)
  .then(prettyPrint)
  .catch(console.error('boop'));
};
