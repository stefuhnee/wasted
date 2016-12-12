'use strict';

const path = require('path');
const debug = require('debug')('wasted:file-finder');

const getRelevantInfo = require('./get-relevant-info');
const applyFlags = require('./apply-flags');
const sortDesc = require('./sort-descending');
const prettyPrint = require('./pretty-print');
const getFiles = require('./get-file-names');
const getAllStats = require('./get-all-stats');

module.exports = function(dirPath) {
  debug();
  let flags = arguments[1];
  dirPath = path.resolve(dirPath);
  getFiles(dirPath)
  .then(fileNames => getAllStats(fileNames, dirPath))
  .then(promisifiedFileInfo => Promise.all(promisifiedFileInfo))
  .then(stats => getRelevantInfo(stats))
  .then(fileInfo => applyFlags(fileInfo, flags, dirPath))
  .then(sortDesc)
  .then(prettyPrint)
  .catch(console.error('errrrafafsafaafa'));
};
