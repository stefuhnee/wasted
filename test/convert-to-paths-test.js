'use strict';

const expect = require('chai').expect;
const convertToPaths = require('../lib/convert-to-paths');

describe('testing #convert-to-paths', function() {

  it('take an array of file names a current directory and convert the strings to paths', () => {
    let input = ['test.js', 'example.js'];
    let expected = [`${__dirname}/test.js`, `${__dirname}/example.js`];

    expect(convertToPaths(input, __dirname)).to.deep.equal(expected);
  });
});
