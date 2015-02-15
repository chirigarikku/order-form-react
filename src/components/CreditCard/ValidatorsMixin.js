var ValidatorsMixin = {
  _validators: {
    'american-express': require('./validators/american-express'),
    'mastercard': require('./validators/mastercard'),
    'visa': require('./validators/visa')
  },

  _identify: function(value, _default) {
    var validators = this._validators;
    var i; // Flag for identified

    switch(true) {
      case !!( i = validators['american-express'](value) ): if ( i ) return 'American Express';
      case !!( i = validators['mastercard'](value) ): if ( i ) return 'Mastercard';
      case !!( i = validators['visa'](value) ): if ( i ) return 'Visa';
    }

    return _default || '';
  }
};

module.exports = ValidatorsMixin;