'use strict';

const expect = require('chai').expect;
const applyFlags = require('../lib/apply-flags');

describe('testing #apply-flags', function() {
  let input = [{type: 'Directory'}, {type: 'File'}];

  it('should filter out directories by default', (done) => {
    applyFlags(input, '')
    .then(result => {
      expect(result.length).to.equal(1);
      done();
    });
  });

  it('should take an array of file objects, and a string a flags and return a modified array of objects depending on the flag', (done) => {
    applyFlags(input, '-d')
    .then(result => {
      expect(result.length).to.equal(2);
      done();
    });
  });
});
