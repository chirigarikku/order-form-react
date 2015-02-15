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
    ]),

    /**
     * Default value if all identification fails
     * @type {Mixed(String|Number)}
     */
    defaultValue: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },

  render: function() {
    var identification = this._identify(this.props.value, '?');

    return (
      <span>{identification}</span>
    );
  }
});

module.exports = Identifier;