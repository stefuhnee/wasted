'use strict';

const debug = require('debug')('wasted:construct-stats-array');

const getStats = require('./get-stats');

module.exports = function(fileNames, path) {
  debug(fileNames, path);
  return new Promise((resolve, reject) => {
    let fileProms = [];
    fileNames.forEach(fileName => {
      fileProms.push(
        getStats(`${path}/${fileName}`, fileName)
        .catch(reject('errrrrrrr'))
      );
    });
    debug(fileProms);
    resolve(fileProms);
  });
};
