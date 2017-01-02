'use strict';

const debug = require('debug')('wasted:file-finder');

const getRelevantInfo = require('./get-relevant-info');
const contains = require('./contains');
const applyFlags = require('./apply-flags');
const sortDesc = require('./sort-descending');
const prettyPrint = require('./pretty-print');
const getFilesInDir = require('./get-files-in-dir');
const getStats = require('./get-stats');

module.exports = function(dirPath, flags) {
  debug();
  getFilesInDir(dirPath)
  .then(fileNames => Promise.all(fileNames.map(getStats)))
  .then(getRelevantInfo)
  .then(fileInfo => applyFlags(fileInfo, flags))
  .then(sortDesc)
  .then(files => {
    contains(flags, '-r') ? prettyPrint(files, true) : prettyPrint(files);
  })
  .catch(console.error('boop'));
};
