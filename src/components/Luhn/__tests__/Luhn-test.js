var src = '../Luhn.jsx';
jest.dontMock(src);
jest.dontMock('../algorithm');

describe('Luhn component', function() {
  var Component, RenderedComponent, React, TestUtils, Render;
  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    Component = require(src);
    Render = function(i) {
      return TestUtils.renderIntoDocument(
        <Component value={i}>
          <div>Success</div>
          <div>Error</div>
        </Component>
      );
    };
  });

  it('should display success', function() {
    RenderedComponent = Render('79927398712');
    var div = TestUtils.findRenderedDOMComponentWithTag(RenderedComponent, 'div')
    expect(div.getDOMNode().textContent).toBe('Success');
  });

  it('should display error', function() {
    RenderedComponent = Render('79927398710');
    var div = TestUtils.findRenderedDOMComponentWithTag(RenderedComponent, 'div')
    expect(div.getDOMNode().textContent).toBe('Error');
  });
  it('should display none');
});