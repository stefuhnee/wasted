'use strict';

const chalk = require('chalk');
const debug = require('debug')('wasted:pretty-print');

module.exports = function(uglyArray) {
  debug();
  return uglyArray.forEach(item => {
    process.stdout.write(
      `${chalk.yellow.bold.underline(item.type + ':')} \n${item.fileName} - ${chalk.cyan(item.size + ' MB')}\n`
    );
  });
};
