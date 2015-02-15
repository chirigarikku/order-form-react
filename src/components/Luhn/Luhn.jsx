/** @jsx React.DOM */
var React = require('react');
var Children = React.Children;

var validate = require('./algorithm');

var Luhn = React.createClass({
  propTypes: {
    /**
     * Input to check against Luhn
     */
    input: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired
  },

  render: function () {
    var {value, ...other} = this.props;
    var children = this.props.children;
    var valid = validate(this.props.input);

    return (
      <span {...other}>
        {Children.map(children, function(Child, i) {
          return (
            Child !== undefined && ( (i == 0 && valid) || ( i == 1 && !valid ) )
              ? Child
              : ''
          );
        })}
      </span>
    );
  }
});

module.exports = Luhn;