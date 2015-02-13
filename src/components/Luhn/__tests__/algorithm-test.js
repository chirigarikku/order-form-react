// var luhn = require('../algorithm');
var src = '../algorithm';
jest.dontMock(src);

describe('Luhn algorithm', function() {
  var luhn;

  beforeEach(function() {
    luhn = require(src);
  })

  it('should return true', function() {
    expect(luhn('7992739877')).toBe(true);
    expect(luhn('79927398712')).toBe(true);
  });

  it('should return false', function() {
    expect(luhn('7992739871')).toBe(false);
    expect(luhn('79927398710')).toBe(false);
    expect(luhn('79927398711')).toBe(false);
    expect(luhn('79927398713')).toBe(false);
  });

  it('should return undefined', function() {
    expect(luhn('')).toBeUndefined();
  });
});