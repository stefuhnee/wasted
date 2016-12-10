'use strict';

const chalk = require('chalk');

module.exports = function(uglyArray) {
  return uglyArray.forEach(item => {
    process.stdout.write(
      `${chalk.yellow.bold.underline(item.type + ':')} \n${item.fileName} - ${chalk.cyan(item.size + ' MB')}\n`
    );
  });
};
