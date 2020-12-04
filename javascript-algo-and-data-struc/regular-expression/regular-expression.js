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
let quoteSample = "The quick brown fox.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex); 
console.log(result)
// [ 'T','h','e',
//   'q','u','i','c','k',
//   'b','r','o','w','n',
//   'f','o','x',]

// match numbers and letters of alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; 
let result = quoteSample.match(myRegex); // outputs an array that has has either 1 letter or number for each element

// match single characters not specified
// Create a single regex that matches all characters that are not a number or a vowel.
let quoteSample = "3 blind mice.";
let myRegex = /[^1-9|^aeiou]/ig; 
let result = quoteSample.match(myRegex); 

// match characters that occur one or more times
//For example, /a+/g would find one match in "abc" and return ["a"]. Because of the +, it would also find a single match in "aabc" and return ["aa"].
// If it were instead checking the string "abab", it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no "a" in the string "bcd", it wouldn't find a match.
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex);
console.log(result); // outputs ['ss','ss']

// match characters that occur zero or more times
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

// chewieQuote has been initialized as "Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/; // Change this line
// Create a regex chewieRegex that uses the * character to match an uppercase "A" character immediately followed by zero or more lowercase "a" characters in chewieQuote
let result = chewieQuote.match(chewieRegex);
console.log(result);
// [ 'Aaaaaaaaaaaaaaaa',
//   index: 0,
//   input: 'Aaaaaaaaaaaaaaaarrrgh!',
//   groups: undefined ]

// find characters with lazy matching
// You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

// Regular expressions are by default greedy, so the match would return ["titani"] It finds the largest sub-string possible to fit the pattern.

// However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"]
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h*?1>/;
let result = text.match(myRegex); // finds <h1> only

// match beginning string patterns
// caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal); // will be true because Cal is at the beginning of string

// match ending string patterns
// a way to search for patterns at the end of strings.
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // will be true becauase caboose is at the end of string
let result = lastRegex.test(caboose);

// match all letters and numbers - shorthand
// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true

// Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

