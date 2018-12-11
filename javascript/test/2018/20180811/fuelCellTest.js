const chai = require('chai');
const expect = chai.expect;
const src = require('../../../src/2018/20180811/fuelCell');

describe('2018 day 11', function() {
  it('should return 4 from fuel cell (3,5) with serial number 8', function() {
    let result = src.powerByCoordinate(3, 5, 8);
    expect(result).to.equal(4);
  });
});