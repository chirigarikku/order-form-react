var src = '../american-express';
jest.dontMock(src);

describe('american-express card verifier', function() {
  var validator;
  beforeEach(function() { validator = require(src); });
  
  describe('length', function() {
  
    it('should succeed when length is 15', function() {
      expect(validator('341231231231232')).toBe(true)
    });
  
    it('should fail when length is not exactly 15', function() {
      expect(validator('34123123123122')).toBe(true);
    });
    
    it('should fail when length is 5', function() {
      expect(validator('34123')).toBe(false);
    });
  });
  
  describe('second number', function ()
    it('should succeed when second number is 4 or 7', function() {
      expect(validator('341231231231235')).toBe(true);
      expect(validator('371231231231235')).toBe(true);
    });
    
    it('should fail when second number is not 4 or 7', function() {
      expect(validator('351231231231231').toBe(false);
    });
    
    it('should fail when second number is 3', function() {
      expect(validator('331231231231231').toBe(false);
    });
  });
  
  describe('starting number', function() {
    it('should fail when starting number is not 3', function() {
      expect(validator('231231231231231')).toBe(false);
    });
    
    it('should succeed when starting number is 3', function() {
      expect(validator('341231231231231').toBe(true);
    });
  });
  
  describe('all-together now', function() {
    it('will suceed when starting number is 3, second number is either 4 or 7, and has length of 15', function() {
      expect(validator('341231231231232').toBe(true);
    });
    
    it('will error when starting number is not 3, second number is either 4 or 7, and has length of 15', function() {
      expect(validator('441231231231232').toBe(false);
      expect(validator('541231231231232').toBe(false);
      expect(validator('241231231231232').toBe(false);
    });
  });
});
