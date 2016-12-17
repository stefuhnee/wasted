'use strict';

const expect = require('chai').expect;
const getStats = require('../lib/get-stats');

describe('testing #get-stats', function() {

  it('should get stats for a file and add the path', (done) => {
    getStats(`${__dirname}/data/test.txt`)
    .then(result => {
      console.log(result);
      expect(result).to.have.property('mode');
      expect(result).to.have.property('size');
      expect(typeof result.size).to.equal('number');
      expect(result).to.have.property('path');
      expect(result.path.startsWith(__dirname)).to.equal(true);
      done();
    })
    .catch(console.log);
  });
});
