/** @jsx React.DOM */
var React = require('react/addons');

var CreditCardVerifier = require('./components/CreditCardVerifier/CreditCardVerifier');
var Luhn = require('./components/Luhn/Luhn');

var App = React.createClass({
  // Two-way data binding helper
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return { bank_no: '' };
  },

  render: function () {
    var bank_no = this.state.bank_no;

    return (
      <div style={{ width: 500, marginLeft: 'auto', marginRight: 'auto' }}>
        {bank_no}
        <div className="input-group">
          <input type="text" className="form-control" valueLink={this.linkState('bank_no')} />
          <span className="input-group-addon">
            <CreditCardVerifier value={bank_no} card="american-express">
              <span>American Express</span>
              <span>?</span>
            </CreditCardVerifier>

            <CreditCardVerifier value={bank_no} card="mastercard">
              <span>Mastercard</span>
              <span>?</span>
            </CreditCardVerifier>

            <CreditCardVerifier value={bank_no} card="visa">
              <span>Visa</span>
              <span>?</span>
            </CreditCardVerifier>

            <Luhn input={bank_no}>
              <span style={{ color: 'green' }} className="glyphicon glyphicon-check" />
              <span style={{ color: 'red' }} className="glyphicon glyphicon-remove" />
            </Luhn>
          </span>
        </div>
      </div>
    );
  }
});

React.render(
  <App />,
  document.querySelector('.container')
);