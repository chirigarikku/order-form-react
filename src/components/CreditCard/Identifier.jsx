/** @jsx React.DOM */
"use strict";
var React = require('react');
var ValidatorsMixin = require('./ValidatorsMixin');

var Identifier = React.createClass({
  mixins: [ValidatorsMixin],

  propTypes: {
    /**
     * Value to be tested against
     * @type {Mixed(String|Number)}
     */
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },

  render: function() {
    var {value, ...other} = this.props;
    var identification = this._identify(this.props.value, this.props.children);

    return (
      <span {...other}>{identification}</span>
    );
  }
});

module.exports = Identifier;