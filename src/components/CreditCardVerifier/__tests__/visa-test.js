var src = '../visa';
jest.dontMock(src);

describe('visa verifier', function() {
  var validator;
  beforeEach(function() { validator = require(src); });
  
  it('should have a length between 13 and 16 and starting number of 4', function() {
    expect(validator('4123123123123')).toBe(true);
    expect(validator('412312312312323')).toBe(true);
    expect(validator('4123123123123234')).toBe(true);
    
    expect(validator('3123123123123234')).toBe(false);
    expect(validator('3123123123123234')).toBe(false);
  });
});
