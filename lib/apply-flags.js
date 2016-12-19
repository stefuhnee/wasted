'use strict';

const debug = require('debug')('wasted:apply-flags');

const hideHiddenFiles = require('./flags/hide-hidden-files');
const hideDirs = require('./flags/hide-dirs');
const truncate = require('./flags/truncate');
const recursiveSearch = require('./flags/recursive-search');
const contains = require('./contains');

//flags
/*
  -h show hidden files
  -d show directories
  -t truncate to 5 largest
  -r recursive search
*/


module.exports = function(fileInfo, flags) {
  debug();
  return new Promise((resolve, reject) => {
    if (!contains(flags, '-h')) fileInfo = hideHiddenFiles(fileInfo);
    if (!contains(flags, '-d') && !contains(flags, '-r')) fileInfo = hideDirs(fileInfo);
    if (contains(flags, '-t')) fileInfo = truncate(fileInfo);
    if (contains(flags, '-r')) {
      recursiveSearch(fileInfo)
      .then(result => {
        result = hideDirs(fileInfo.concat(result));
        resolve(truncate(result, 20));
      })
      .catch(reject);
    } else resolve(fileInfo);
  });
};
