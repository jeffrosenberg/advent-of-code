const chai = require('chai');
const expect = chai.expect;
const src = require('../../../src/2018/20180811/fuelCell');

describe('2018 day 11', function() {
  describe('calculate power by coordinate:', function() {
    it('should return 4 from fuel cell (3,5) with serial number 8', function() {
      let result = src.powerByCoordinate(3, 5, 8);
      expect(result).to.equal(4);
    });

    it('should return -5 from fuel cell (122,79) with serial number 57', function() {
      let result = src.powerByCoordinate(122, 79, 57);
      expect(result).to.equal(-5);
    });

    it('should return 0 from fuel cell (217,196) with serial number 39', function() {
      let result = src.powerByCoordinate(217, 196, 39);
      expect(result).to.equal(0);
    });

    it('should return 4 from fuel cell (101,153) with serial number 71', function() {
      let result = src.powerByCoordinate(101, 153, 71);
      expect(result).to.equal(4);
    });
  });

  describe('calculate power for entire grid:', function() {
    it('should return (33,45) from the grid with serial number 18', function() {
      let result = src.maxPowerBySerialNumber(18, 300, 300);
      let expected = { x: 33, y: 45, };
      expect(result).to.equal(expected);
    });
  });
});