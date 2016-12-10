'use strict';

const chalk = require('chalk');

module.exports = function(uglyArray) {
  return uglyArray.forEach(item => {
    console.log(
      `${chalk.red.bold.underline('File')}: ${chalk.green(item.fileName)}`
    )
  })
}
