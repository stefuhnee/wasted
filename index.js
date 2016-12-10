'use strict';

const filePath = process.argv[2] && !process.argv[2].startsWith('-') ? process.argv[2] : __dirname;

const args = filePath === __dirname ? process.argv.slice(2) : process.argv.slice(3);

require('./lib/file-finder')(filePath, args);
