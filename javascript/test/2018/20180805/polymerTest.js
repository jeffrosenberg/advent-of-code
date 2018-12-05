const chai = require('chai');
const expect = chai.expect;
const src = require('../../../src/2018/201805/polymer');

describe('2018 day 05', function() {
  it('should return "c" from an input of "cAa', function() {
    var result = src.react('cAa');
    expect(result).to.equal('c');
  });
});