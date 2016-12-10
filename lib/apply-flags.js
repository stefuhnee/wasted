'use strict';

const showHiddenFiles = require('./flags/show-hidden-files');
const hideDirs = require('./flags/hide-dirs');
const truncate = require('./flags/truncate');
const recursiveSearch = require('./flags/recursive-search').recurse;
const contains = require('./contains');

//flags
/*
  -h show hidden files
  -d show directories
  -t truncate to 5 largest
  -r recursive search
*/


module.exports = function(fileInfo, flags, path) {
  if (contains(flags, '-h')) fileInfo = showHiddenFiles(fileInfo);
  if (!contains(flags, '-d') && !contains(flags, '-r')) fileInfo = hideDirs(fileInfo);
  if (contains(flags, '-t')) fileInfo = truncate(fileInfo);
  if (contains(flags, '-r')) {
    let dirs = fileInfo.filter(file => file.type === 'Directory');
    dirs = recursiveSearch(dirs, path);
  }
  return fileInfo;
};
