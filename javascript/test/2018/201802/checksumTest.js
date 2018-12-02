const chai = require('chai');
const assert = require('assert');
const expect = chai.expect;
const src = require('../../../src/2018/201802/checksum');

describe('2018 day 02', function() {
  it('should return 00 for an input of abcdef', function() {
    var result = src.getChecksumForLine('abcdef');
    expect(result).to.equal(0);
  });
  
  it('should return 11 (3) for an input of bababc', function() {
    var result = src.getChecksumForLine('bababc');
    expect(result).to.equal(3);
  });
});