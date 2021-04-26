// Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
function palindrome(str) {
  let lowerStr = str.toLowerCase();

  // remove all non alphanumeric
  lowerStr = lowerStr.replace(/[^0-9a-z]/gi, '')

  var len = Math.floor(lowerStr.length / 2);
  for (var i = 0; i < len; i++)
    if (lowerStr[i] !== lowerStr[lowerStr.length - i - 1]) {
      return false;
    }
  return true;

  // or a one liner solution & shortcut
  // return str == str.split('').reverse().join('');

}

palindrome("0_0 (: /-\ :) 0-0");



// Roman Numeral Converter
// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.
function convertToRoman(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
  let roman = ''

  for ( let i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

convertToRoman(11);