'use strict';

const showHiddenFiles = require('./flags/show-hidden-files');
const hideDirs = require('./flags/hide-dirs');
const truncate = require('./flags/truncate');
const recursiveSearch = require('./flags/recursive-search');

//flags
/*
  -h show hidden files
  -d show directories
  -t truncate to 5 largest
  -r recursive search
*/


module.exports = function(fileInfo, flags) {
  if (flags.indexOf('-h') !== -1) fileInfo = showHiddenFiles(fileInfo);
  if (flags.indexOf('-d') === -1) fileInfo = hideDirs(fileInfo);
  if (flags.indexOf('-t') !== -1) fileInfo = truncate(fileInfo);
  if (flags.indexOf('-r') !== -1) fileInfo = recursiveSearch(fileInfo);
  return fileInfo;
};
