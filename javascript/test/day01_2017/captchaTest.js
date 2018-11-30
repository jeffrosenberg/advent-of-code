const chai = require('chai');
const assert = require('assert');
const expect = chai.expect;
const src = require('../../src/day01_2017/captcha');

describe('day 01 2017', function() {
  it('should return 3 for an input of 1122', function() {
    var result = src.getCaptcha('1122');
    expect(result).to.equal(3);
  });

  it('should return 4 for an input of 1111', function() {
    var result = src.getCaptcha('1111');
    expect(result).to.equal(4);
  });

  it('should return 0 for an input of 1234', function() {
    var result = src.getCaptcha('1234');
    expect(result).to.equal(0);
  });

  it('should return 9 for an input of 91212129', function() {
    var result = src.getCaptcha('91212129');
    expect(result).to.equal(9);
  });
});