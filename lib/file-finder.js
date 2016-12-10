'use strict';

const path = require('path');

const getRelevantInfo = require('./get-relevant-info');
const applyFlags = require('./apply-flags');
const sortDesc = require('./sort-descending');
const prettyPrint = require('./pretty-print');
const getFiles = require('./get-files');
const constructStatsArray = require('./construct-stats-array');

module.exports = exports = {};

exports.getFiles = function(dirPath) {
  let flags = arguments[1];
  dirPath = path.resolve(dirPath);
  getFiles.call(this, dirPath, constructStatsArray)
  .then(promisifiedFileInfo => Promise.all(promisifiedFileInfo))
  .then(stats => getRelevantInfo(stats, this.fileNames))
  .then(fileInfo => applyFlags.call(this, fileInfo, flags, dirPath))
  .then(sortDesc)
  .then(prettyPrint)
  .catch(console.error);
}.bind(this);
