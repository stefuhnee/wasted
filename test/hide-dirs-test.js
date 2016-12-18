'use strict';

const expect = require('chai').expect;
const hideDirs = require('../lib/flags/hide-dirs');

describe('testing #hide-dirs', function() {
  let input = [{type: 'Directory'}, {type: 'File'}];

  it('should filter out directories', () => {
    expect(hideDirs(input).length).to.equal(1);
  });

});
