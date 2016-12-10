'use strict';

const debug = require('debug')('wasted:get-all-stats');

const getStats = require('./get-stats');

module.exports = function(fileNames) {
  console.log('getting all stats')
  return new Promise((resolve, reject) => {
    let fileProms = [];
    fileNames.forEach(fileName => {
      fileProms.push(
        getStats(fileName)
        // .catch(reject('errrrrrrr'))
      );
    });
    resolve(fileProms);
  });
};
