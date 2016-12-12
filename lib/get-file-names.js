'use strict';

const bluebird = require('bluebird');
const fsProm = bluebird.promisifyAll(require('fs'));
const debug = require('debug')('wasted:get-file-names');

module.exports = function(dirPath) {
  debug();
  return fsProm.readdirAsync(dirPath)
  .then(fileNames => {
    fileNames.forEach((file, i, arr) => arr[i] = `${dirPath}/${file}`);
    console.log(fileNames);
    return fileNames;
  })
  .catch(console.error);
      // ERROR HAPPENING HERE RIGHT AT BEGINNING
  // });
};
