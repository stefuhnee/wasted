'use strict';

const debug = require('debug')('wasted:convert-to-paths');

module.exports = function(files, path) {
  debug();
  return files.map(file => file = `${path}/${file}`);
};
