'use strict';

const debug = require('debug')('wasted:file-finder');

const getRelevantInfo = require('./get-relevant-info');
const contains = require('./contains');
const truncate = require('./flags/truncate');
const applyFlags = require('./apply-flags');
const sortDesc = require('./sort-descending');
const prettyPrint = require('./pretty-print');
const getFilesInDir = require('./get-files-in-dir');
const recursiveSearch = require('./flags/recursive-search');
const getStats = require('./get-stats');

module.exports = function(dirPath, flags) {
  debug();
  getFilesInDir(dirPath)
  .then(fileNames => Promise.all(fileNames.map(getStats)))
  .then(getRelevantInfo)
  .then(files => contains(flags, '-r') ? recursiveSearch(files) :files)
  .then(files => truncate(files, 50))
  .then(fileInfo => applyFlags(fileInfo, flags))
  .then(sortDesc)
  .then(files => contains(flags, '-r') ? prettyPrint(files, true) : prettyPrint(files))
  .catch(console.error('boop'));
};
