/** @jsx React.DOM */
var React = require('react');

var validate = require('./algorithm');

var Luhn = React.createClass({
  propTypes: {
    /**
     * Input to check against Luhn
     */
    input: React.PropTypes.string.isRequired
  },

  render: function () {
    var children = this.props.children;
    var isArray = Array.isArray(children);

    var success = isArray ? <children[0] /> : {children};
    var error = isArray ? <children[1] /> : '';

    return (
      <span {input, ...this.props}>
        { validate(this.props.input)
          ? success
          : error
        }
      </span>
    );
  }
});

module.exports = Luhn;