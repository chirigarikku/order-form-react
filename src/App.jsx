/** @jsx React.DOM */
var React = require('react/addons');

var CreditCardIdentifier = require('./components/CreditCard/Identifier');
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
        <div className="form-group">
          <label> Bank Account </label>
          <div className="input-group">
            <input type="text" className="form-control" valueLink={this.linkState('bank_no')} />
            <span className="input-group-addon">
              <CreditCardIdentifier value={bank_no}>
                <span className="glyphicon glyphicon-question-sign" />
              </CreditCardIdentifier>

              { !! bank_no.length
                ? <Luhn input={bank_no} style={{ marginLeft: 5 }}>
                    <span style={{ color: 'green' }} className="glyphicon glyphicon-ok-sign" />
                    <span style={{ color: 'red' }} className="glyphicon glyphicon-remove-sign" />
                  </Luhn>
                : ''
              }
            </span>
          </div>
        </div>

        <button type="button" className="btn btn-success">Submit</button>
      </div>
    );
  }
});

React.render(
  <App />,
  document.querySelector('.container')
);