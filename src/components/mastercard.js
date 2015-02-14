var LENGTH = 16;
var START = 5;

module.exports = function(input) {
  return input.length == LENGTH && input.charAt(0) == START;
}
