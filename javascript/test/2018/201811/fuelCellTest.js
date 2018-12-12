const chai = require('chai');
const expect = chai.expect;
const src = require('../../../src/2018/201811/fuelCell');

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
    it('should return (1,4,3) from a 10x10 grid with serial number 10', function() {
      let result = src.getMaxPower(10, 10, 10);
      let expected = { x: 1, y: 4, totalPower: 16, resultSize: 3, };
      
      expect(result.x).to.equal(expected.x);
      expect(result.y).to.equal(expected.y);
      expect(result.totalPower).to.equal(expected.totalPower);
      expect(result.resultSize).to.equal(expected.resultSize);
    });

    it('should return (33,45,3) from a grid with serial number 18', function() {
      let result = src.getMaxPower(18);
      let expected = { x: 33, y: 45, totalPower: 29, resultSize: 3, };

      expect(result.x).to.equal(expected.x);
      expect(result.y).to.equal(expected.y);
      expect(result.totalPower).to.equal(expected.totalPower);
      expect(result.resultSize).to.equal(expected.resultSize);
    });

    it('should return (21,61,3) from a grid with serial number 42', function() {
      let result = src.getMaxPower(42);
      let expected = { x: 21, y: 61, totalPower: 30, resultSize: 3, };
      
      expect(result.x).to.equal(expected.x);
      expect(result.y).to.equal(expected.y);
      expect(result.totalPower).to.equal(expected.totalPower);
      expect(result.resultSize).to.equal(expected.resultSize);
    });

    it('should return (90,269,16) from a grid with serial number 18', function() {
      this.timeout(0);

      let result = src.getMaxPower(18, 300, 300, 1, 300);
      let expected = { x: 90, y: 269, resultSize: 16, };
      
      expect(result.x).to.equal(expected.x);
      expect(result.y).to.equal(expected.y);
      expect(result.resultSize).to.equal(expected.resultSize);
    });

    it('should return (232,251,12) from a grid with serial number 42', function() {
      this.timeout(0);

      let result = src.getMaxPower(42, 300, 300, 1, 300);
      let expected = { x: 232, y: 251, resultSize: 12, };
      
      expect(result.x).to.equal(expected.x);
      expect(result.y).to.equal(expected.y);
      expect(result.resultSize).to.equal(expected.resultSize);
    });
  });
});