module.exports = function(input) {
  var length = input.length;
  var total = 0;

  if ( !length ) return;

  // Luhn states to start from the end position to the start.
  // And then to double the value of each even position, and each
  // digit to itself.
  // e.g. 8 -> 8 * 2 -> 16 -> 1 + 6 -> 7
  var even; // Placeholder to store the digits in every even position
  var isNth = true; // Flag if the nth position is part of the second digit (1, 2, 3, 4, 5), 5, 3, 1 are second digits
  for ( var i = length - 1; i >= 0; i-- ) {
    total += isNth
      ? (even = (input[i] * 2).toString()).length == 2 ? decimal(even[0]) + decimal(even[1]) : decimal(even)
      : decimal(input[i]);

    isNth = !isNth;
  }

  console.log(total);
  return total % 10 == 0;
}

/**
 * Parse to decimal (shorthand for parseInt, 10)
 */
function decimal(i) { return parseInt(i, 10); }