'use strict';

module.exports = function(info, fileNames) {
  return info.map((stat, idx) => {
    return {
      fileName: fileNames[idx],
      size: stat.size / 1000000,
      type: stat.isFile() ? 'file' : 'directory',
    };
  });
};
