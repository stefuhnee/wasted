'use strict';

const chalk = require('chalk');

module.exports = function(uglyArray) {
  return uglyArray.forEach(item => {
    process.stdout.write(
      `${chalk.magenta.bold.underline(item.type + ':')} \n${chalk.yellow(item.fileName)} - ${chalk.cyan(item.size + ' MB')}\n`
    );
  });
};
