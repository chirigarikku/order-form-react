var src = '../CreditCardVerifier.jsx';
jest.dontMock(src);
jest.dontMock('../american-express');
jest.dontMock('../mastercard');
jest.dontMock('../visa');

describe('CreditCardVerifier component', function() {
  var Component, RenderedComponent, React, TestUtils, Render;
  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    Component = require(src);
    Render = function(card, value) {
      return TestUtils.renderIntoDocument(
        <Component value={value} card={card}>
          <div>Yolocard</div>
        </Component>
      );
    }
  });
  
  describe('validate this.props.card', function() {
    beforeEach(function() { spyOn(console, 'warn'); });
    
    it('should throw a warning if the card props is not american-express, mastercard, or visa', function() {
      try{ Render('asdasd', 'adasd'); } catch(e){}
      expect(console.warn).toHaveBeenCalled();
    });
    
    it('should not throw a warning if the card is american-express, mastercard, or visa', function() {
      Render('mastercard', '12345');
      expect(console.warn).not.toHaveBeenCalled();
    });
  });
    
  describe('validation', function() {
    it('should hide if invalid', function() {
      RenderedComponent = Render('mastercard', '0123123123123123');
      expect(TestUtils.findRenderedDOMComponentWithTag(RenderedComponent, 'div')).toThrow();
    });
    
    it('should hide if valid', function() {
      RenderedComponent = Render('mastercard', '5123123123123123');
      var div = TestUtils.findRenderedDOMComponentWithTag(RenderedComponent, 'div');
      expect(div.getDOMNode().textContent).toBe('Mastercard');
    });
  });
});
