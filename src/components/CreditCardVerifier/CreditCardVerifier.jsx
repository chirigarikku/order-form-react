/** @jsx React.DOM */
var React = require('react');

var validators = {
  'american-express': require('./american-express'),
  'mastercard': require('./mastercard'),
  'visa': require('./visa')
};

var CreditCardVerifier = React.createClass({
  propTypes: {
    /**
     * Value to be verified
     */
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired,
    
    /**
     *
     */
    card: function(props, propName) {
      var value = props[propName];
      var validCards = ['american-express', 'mastercard', 'visa'];
      
      if ( validCards.indexOf(value) == -1 ) {
        var err = 'Invalid card option. Accepted are ' + validCards.join(', ');
        throw new Error(err);
      }
    }
  },
  
  render: function() {
    var valid = validators[this.props.card](this.props.value);
    
    return (
      <span>
        { valid ? this.props.children : '' }
      </span>
    );
  },
});

module.exports = CreditCardVerifier;
