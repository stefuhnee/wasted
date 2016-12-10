'use strict';

const path = require('path');
const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));

const getStats = require('./get-stats');
const getRelevantInfo = require('./get-relevant-info');
const applyFlags = require('./apply-flags');
const sortDesc = require('./sort-descending');
const prettyPrint = require('./pretty-print');

module.exports = exports = {};

exports.getFiles = function(dirPath) {
  let flags = Array.from(arguments)[1];
  dirPath = path.resolve(dirPath);
  fsProm.readdirAsync(dirPath)
  .then(fileNames => {
    this.fileNames = fileNames;
    let fileProms = [];
    fileNames.forEach(fileName => {
      fileProms.push(getStats(`${dirPath}/${fileName}`));
    });
    return fileProms;
  })
  .then(promisifiedFileInfo => Promise.all(promisifiedFileInfo))
  .then(stats => getRelevantInfo(stats, this.fileNames))
  .then(fileInfo => applyFlags(fileInfo, flags))
  .then(sortDesc)
  .then(prettyPrint)
  .catch(console.error);
}.bind(this);
