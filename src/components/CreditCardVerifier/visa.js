var MIN = 13;
var MAX = 16;
var START = '4';

module.exports = function(input) {
  var length = input.length;
  
  return (length >= MIN && length <= MAX) && input.charAt(0) == START;
}
