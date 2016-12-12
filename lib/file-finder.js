'use strict';

const path = require('path');
const debug = require('debug')('wasted:file-finder');

const getRelevantInfo = require('./get-relevant-info');
const applyFlags = require('./apply-flags');
const sortDesc = require('./sort-descending');
const prettyPrint = require('./pretty-print');
const convertToPaths = require('./convert-to-paths');
const getStats = require('./get-stats');
const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));

module.exports = function(dirPath) {
  debug();
  let flags = arguments[1];
  dirPath = path.resolve(dirPath);
  fsProm.readdirAsync(dirPath)
  .then(files => convertToPaths(files, dirPath))
  .then(fileNames => Promise.all(fileNames.map(getStats)))
  .then(getRelevantInfo)
  .then(fileInfo => applyFlags(fileInfo, flags, dirPath))
  .then(sortDesc)
  .then(prettyPrint)
  .catch(console.error('boop'));
};
