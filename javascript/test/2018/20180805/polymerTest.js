const chai = require('chai');
const expect = chai.expect;
const src = require('../../../src/2018/201805/polymer');

describe('2018 day 05', function() {
  it('should return an empty string from an input of "aA"', function() {
    var result = src.react('aA');
    expect(result).to.equal('');
  });

  it('should return "c" from an input of "cAa"', function() {
    var result = src.react('cAa');
    expect(result).to.equal('c');
  });

  it('should return "d" from an input of "dAa"', function() {
    var result = src.react('dAa');
    expect(result).to.equal('d');
  });

  it('should return an empty string from an input of "abBA"', function() {
    var result = src.react('abBA');
    expect(result).to.equal('');
  });

  it('should return "abAB" from an input of "abAB"', function() {
    var result = src.react('abAB');
    expect(result).to.equal('abAB');
  });

  it('should return "aabAAB" from an input of "aabAAB"', function() {
    var result = src.react('aabAAB');
    expect(result).to.equal('aabAAB');
  });
});