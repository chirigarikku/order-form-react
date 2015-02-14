var src = '../mastercard';
jest.dontMock(src);

describe('mastercard card verifier', function() {
  var validator;
  beforeEach(function() { validator = require(src); });
  
  it('should have a length of 16 and starting number of 5', function() {
    expect(validator('5123123123123123')).toBe(true);
    expect(validator('512312312312312')).toBe(false);
    expect(validator('1123123123123123')).toBe(false);
  });
});
