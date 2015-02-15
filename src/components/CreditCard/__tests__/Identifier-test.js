var src = '../Identifier.jsx';

jest.dontMock(src);
jest.dontMock('../ValidatorsMixin');
jest.dontMock('../validators/american-express');
jest.dontMock('../validators/mastercard');
jest.dontMock('../validators/visa');

describe('Identifier component', function() {
  var React, TestUtils, Component, RenderedComponent, Render;
  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    Component = require(src);
    Render = function(value, d) {
      return TestUtils.renderIntoDocument(
        <Component value={value} defaultValue={d} />
      );
    }
  });

  it('should show American express', function() {
    RenderedComponent = Render('341231231231232');
    var span = TestUtils.findRenderedDOMComponentWithTag(RenderedComponent, 'span');
    expect(span.getDOMNode().textContent).toBe('American Express');
    expect(span.getDOMNode().textContent).not.toBe('');
  });

  it('should show Mastercard', function() {
    RenderedComponent = Render('5123123123123123');
    var span = TestUtils.findRenderedDOMComponentWithTag(RenderedComponent, 'span');
    expect(span.getDOMNode().textContent).toBe('Mastercard');
  });

  it('should show Visa', function() {
    RenderedComponent = Render('4123123123123');
    var span = TestUtils.findRenderedDOMComponentWithTag(RenderedComponent, 'span');
    expect(span.getDOMNode().textContent).toBe('Visa');
  });

  it('should show `?` if unidentified', function() {
    RenderedComponent = Render('1');
    var span = TestUtils.findRenderedDOMComponentWithTag(RenderedComponent, 'span');
    expect(span.getDOMNode().textContent).toBe('?');
  });
});