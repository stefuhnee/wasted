'use strict';


require('./lib/file-finder').getFiles(process.argv[2] ? process.argv[2] : __dirname);
