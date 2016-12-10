'use strict';

module.exports = function(fileInfo) {
  return fileInfo.filter(file => {
    return file.mode !== 33060;
  });
};
