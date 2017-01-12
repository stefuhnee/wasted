'use strict';

const debug = require('debug')('wasted:recursive-search');

const getFilesInDir = require('../get-files-in-dir');
const getStats = require('../get-stats');
const getRelevantInfo = require('../get-relevant-info');
const flattenArray = require('../flatten-file-array');

module.exports = function(dirInfo) {
  debug();
  let count = 0;

  function _recurse(filePaths) {
    debug('_recurse');
    count++;
    let dirs = filePaths.filter(file => file.type === 'Directory');
    return Promise.all(dirs.map(getFilesInDir))
    .then(flattenArray)
    .then(allFiles => Promise.all(allFiles.map(getStats)))
    .then(getRelevantInfo)
    .then(files => count < 5 ? _recurse(files) : files);
  }

  return _recurse(dirInfo);

};
