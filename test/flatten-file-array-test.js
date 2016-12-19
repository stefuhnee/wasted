'use strict';

const expect = require('chai').expect;
const flattenFileArray = require('../lib/flatten-file-array');

describe('testing #flatten-file-array', function() {
  let input = [[1, 2], [3], [4, 5, 6, 7]];

  it('should take a nested array and flatten it (one level)', () => {
    expect(flattenFileArray(input)).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
  });

});
