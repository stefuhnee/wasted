'use strict';

const path = require('path');
const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));

const getStats = require('./get-stats');
const getRelevantInfo = require('./get-relevant-info');
const sortDesc = require('./sort-descending');
const prettyPrint = require('./pretty-print');

module.exports = exports = {};

//flags
/*
  -h show hidden files
  -d show directories
  -t truncate to 5 largest
*/

exports.getFiles = function(dirPath) {
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
  .then(fileInfo => Promise.all(fileInfo))
  .then(stats => getRelevantInfo(stats, this.fileNames))
  .then(sortDesc)
  .then(prettyPrint)
  .catch(console.error);
}.bind(this);
