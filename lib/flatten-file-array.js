'use strict';

module.exports = function(fileNames) {
  fileNames = fileNames.reduce((acc, fileName) => {
    return acc.concat(fileName);
  }, []);
  return fileNames;
};
