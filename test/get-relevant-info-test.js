'use strict';

const expect = require('chai').expect;
const getRelevantInfo = require('../lib/get-relevant-info');

describe('testing #get-relevant-info', function() {
  let fileStat = {
    mode: 1,
    path: `${__dirname}/test/data/test.txt`,
    isFile: () => true,
    size: 1000000,
  };
  let input = [fileStat];
  let result = getRelevantInfo(input);
  let expectedOutput = [{
    mode: 1,
    path: `${__dirname}/test/data/test.txt`,
    type: 'File',
    size: 1,
    fileName: 'test.txt',
  }];

  it('transform an array of objects to have the desired properties', () => {
    expect(result).to.deep.equal(expectedOutput);
  });
});
