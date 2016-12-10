'use strict';

const chalk = require('chalk');

module.exports = function(uglyArray) {
  return uglyArray.forEach(item => {
    console.log(
      `${chalk.magenta.underline(item.type + ':')} \n${chalk.yellow(item.fileName)} - ${chalk.cyan(item.size + ' MB')} \n`
    )
  })
}
