'use strict';

const debug = require('debug')('wasted:apply-flags');

const hideHiddenFiles = require('./flags/hide-hidden-files');
const hideDirs = require('./flags/hide-dirs');
const truncate = require('./flags/truncate');
const contains = require('./contains');

module.exports = function(fileInfo, flags) {
  debug();
  if (!contains(flags, '-h')) fileInfo = hideHiddenFiles(fileInfo);
  if (!contains(flags, '-d') && !contains(flags, '-r')) fileInfo = hideDirs(fileInfo);
  if (contains(flags, '-t')) fileInfo = truncate(fileInfo);
  return fileInfo;
};
