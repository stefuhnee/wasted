'use strict';

const expect = require('chai').expect;
const sortDesc = require('../lib/sort-descending');

describe('testing #sort-descending', function() {

  it('should sort an array of objects in descending order by size', () => {
    let input = [{size: 34}, {size: 2}, {size: 12}, {size: 200}];
    let expected = [{size: 200}, {size: 34}, {size: 12}];

    expect(sortDesc(input)).to.deep.equal(expected);
  });
});
