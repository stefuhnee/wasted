'use strict';

const getStats = require('./get-stats');

module.exports = function(fileNames, path) {
  let fileProms = [];
  fileNames.forEach(fileName => {
    fileProms.push(getStats(`${path}/${fileName}`));
  });
  console.log('fileProms', fileProms);
  return fileProms;
};
