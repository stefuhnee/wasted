'use strict';

module.exports = function(info, fileNames, flags) {
  let fileInfo = info.map((stat, idx) => {
    return {
      fileName: fileNames[idx],
      size: stat.size / 1000000,
      type: stat.isFile() ? 'file' : 'directory',
      mode: stat.mode,
    };
  });
  if (flags.indexOf('-h') === -1) return fileInfo;
  console.log('hit me');
  return fileInfo.filter(file => {
    return file.mode !== 33060;
  });
};
