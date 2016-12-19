'use strict';

const expect = require('chai').expect;
const getFilesInDir = require('../lib/get-files-in-dir');

describe('testing #get-files-in-dir', function() {
  let input = {
    path: `${__dirname}/data`,
  };

  it('should get a list of files from a given dir and prepend the path of the directory', (done) => {
    getFilesInDir(input)
    .then(result => {
      expect(result).to.deep.equal([`${__dirname}/data/test.txt`]);
      done();
    });
  });

  it('should catch errors', (done) => {
    getFilesInDir('not a path')
    .catch(err => {
      expect(err).to.not.equal(null);
      done();
    });
  });
});
