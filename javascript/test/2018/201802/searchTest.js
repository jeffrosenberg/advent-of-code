const chai = require('chai');
const expect = chai.expect;
const src = require('../../../src/2018/201802/search');

describe('2018 day 02 part 2', function() {
  it('should return "fgij" as the output for the example input', function() {
    const input = [
      'abcde',
      'fghij',
      'klmno',
      'pqrst',
      'fguij',
      'axcye',
      'wvxyz',
    ];
    var result = src.search(input);
    expect(result).to.equal('fgij');
  });
});