#!/usr/bin/env node
'use strict';

let filePath;
let args;

if (process.argv[2] && !process.argv[2].startsWith('-')) {
  filePath = `${process.cwd()}/${process.argv[2]}`;
  args = process.argv.slice(3);
} else {
  filePath = process.cwd();
  args = process.argv.slice(2);
}

require('../lib/file-finder')(filePath, args);
