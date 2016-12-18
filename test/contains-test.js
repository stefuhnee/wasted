'use strict';

const expect = require('chai').expect;
const contains = require('../lib/contains');

describe('testing #contains', function() {
  let input = ['-s', '-f'];

  it('should test to see if an array of strings contains flags', () => {
    expect(contains(input, '-s')).to.equal(true);
    expect(contains(input, '-f')).to.equal(true);
    expect(contains(input, '-t')).to.equal(false);
  });

});
