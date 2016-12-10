'use strict';

const debug = require('debug')('wasted:apply-flags');

const showHiddenFiles = require('./flags/show-hidden-files');
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


module.exports = function(fileInfo, flags, path) {
  debug();
  return new Promise((resolve, reject) => {
    if (contains(flags, '-h')) fileInfo = showHiddenFiles(fileInfo);
    if (!contains(flags, '-d') && !contains(flags, '-r')) fileInfo = hideDirs(fileInfo);
    if (contains(flags, '-t')) fileInfo = truncate(fileInfo);
    if (contains(flags, '-r')) {
      let dirs = fileInfo.filter(file => file.type === 'Directory');
      recursiveSearch(dirs)
      // .then(console.log)
      .catch(reject('something went wrong in recursive search'));
    } else resolve(fileInfo);
  });
};
