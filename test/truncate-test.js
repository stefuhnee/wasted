'use strict';

const expect = require('chai').expect;
const truncate = require('../lib/flags/truncate');

describe('testing #truncate', function() {

  it('take an array of files and reduce it to 5', () => {
    let input = ['test.js', 'example.js', 'test.js', 'example.js', 'test.js', 'example.js', 'test.js', 'example.js'];

    expect(truncate(input).length).to.equal(5);
  });
});
