// using test method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Outputs true

// match literal string with different possibilities
let petString = "James has a pet cat.";
let petRegex = /fish|dog|cat|bird/; // any sentence that has any of the word listed
let result = petRegex.test(petString);

// ignore case while matching
// with flag i
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // find freecodecamp while ignoring letter casing
let result = fccRegex.test(myString);

// extract a specific word from sentence
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); // Extract word coding

// find more than the first match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // catch all words with twinkle and ignore letter casing
let result = twinkleStar.match(starRegex); // will give ['Twinkle', 'twinkle']

// match anything with wildcard period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // as long as sentence has the following 2 letters un, test method will output true
let result = unRegex.test(exampleStr); // outputs fun

// match single character with multiple possibilities
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null

// another example
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // find vowels in string, catch all letter aeiou and ignore letter casing
let result = quoteSample.match(vowelRegex); 
console.log(result);
// outputs the following
// [ 'e', 'a', 'e',
//   'o',
//   'u',
//   'i',
//   'e',
//   'a', 'o', 'e',
//   'o', 'e',
//   'I',
//   'a', 'e',
//   'o',
//   'o', 'e',
//   'i',
//   'o', 'e',
//   'o',
//   'i', 'e',
//   'i' ]

// match letters of the alphabet with the use of hyphen character
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

// another example
