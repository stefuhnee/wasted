'use strict';

const expect = require('chai').expect;
const hideHiddenFiles = require('../lib/flags/hide-hidden-files');

describe('testing #hide-hidden-files', function() {
  let input = [{mode: 322}, {mode: 1}, {mode: 33060}];

  it('should filter out hidden files', () => {
    expect(hideHiddenFiles(input).length).to.equal(2);
  });
});
