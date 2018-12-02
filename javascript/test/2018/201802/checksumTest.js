const chai = require('chai');
const expect = chai.expect;
const src = require('../../../src/2018/201802/checksum');

describe('2018 day 02', function() {
  it('should return a bitmask of 00 for an input of abcdef', function() {
    var result = src.getChecksumForLine('abcdef');
    expect(result).to.equal(0);
  });
  
  it('should return a bitmask of 11 (3) for an input of bababc', function() {
    var result = src.getChecksumForLine('bababc');
    expect(result).to.equal(3);
  });
  
  it('should return a bitmask of 01 (1) for an input of abbcde', function() {
    var result = src.getChecksumForLine('abbcde');
    expect(result).to.equal(1);
  });
  
  it('should return a bitmask of 10 (2) for an input of abcccd', function() {
    var result = src.getChecksumForLine('abcccd');
    expect(result).to.equal(2);
  });
  
  it('should return a bitmask of 01 (1) for an input of aabcdd', function() {
    var result = src.getChecksumForLine('aabcdd');
    expect(result).to.equal(1);
  });
  
  it('should return a bitmask of 01 (1) for an input of abcdee', function() {
    var result = src.getChecksumForLine('abcdee');
    expect(result).to.equal(1);
  });
  
  it('should return a bitmask of 10 (2) for an input of ababab', function() {
    var result = src.getChecksumForLine('ababab');
    expect(result).to.equal(2);
  });
});