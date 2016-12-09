'use strict';


require('./lib/file-finder')(process.argv[2] ? process.argv[2] : __dirname);
