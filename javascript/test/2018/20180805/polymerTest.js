const chai = require('chai');
const expect = chai.expect;
const src = require('../../../src/2018/201805/polymer');

describe('2018 day 05', function() {
  it('should return "c" from an input of "cAa"', function() {
    var result = src.react('cAa');
    expect(result).to.equal('c');
  });

  it('should return "d" from an input of "dAa"', function() {
    var result = src.react('dAa');
    expect(result).to.equal('d');
  });
});