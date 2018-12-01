const chai = require('chai');
const assert = require('assert');
const expect = chai.expect;
const src = require('../../src/day01_2017/captcha');

describe('day 01 2017', function() {
  it('should return 3 for an input of 1122, step 1', function() {
    var result = src.getCaptcha('1122');
    expect(result).to.equal(3);
  });

  it('should return 4 for an input of 1111, step 1', function() {
    var result = src.getCaptcha('1111');
    expect(result).to.equal(4);
  });

  it('should return 0 for an input of 1234, step 1', function() {
    var result = src.getCaptcha('1234');
    expect(result).to.equal(0);
  });

  it('should return 9 for an input of 91212129, step 1', function() {
    var result = src.getCaptcha('91212129');
    expect(result).to.equal(9);
  });

  it('should return 6 for an input of 1212, step n/2', function() {
    const input = '1212';
    var result = src.getCaptcha(input, (input.length)/2);
    expect(result).to.equal(6);
  });

  it('should return 0 for an input of 1221, step n/2', function() {
    const input = '1221';
    var result = src.getCaptcha(input, (input.length)/2);
    expect(result).to.equal(0);
  });

  it('should return 4 for an input of 123425, step n/2', function() {
    const input = '123425';
    var result = src.getCaptcha(input, (input.length)/2);
    expect(result).to.equal(4);
  });

  it('should return 12 for an input of 123123, step n/2', function() {
    const input = '123123';
    var result = src.getCaptcha(input, (input.length)/2);
    expect(result).to.equal(12);
  });

  it('should return 4 for an input of 12131415, step n/2', function() {
    const input = '12131415';
    var result = src.getCaptcha(input, (input.length)/2);
    expect(result).to.equal(4);
  });
});