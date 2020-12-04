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
let chewieRegex = /Aa*/;
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
let alphabetRegexV2 = /\w/gi;
let result = quoteSample.match(alphabetRegexV2).length;

// match everything but letters and numbers
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]

// Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/ig;
let result = quoteSample.match(nonAlphabetRegex).length;

// match all numbers
// The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/ig;
let result = movieName.match(numRegex).length; // counts number of digits in this string

// match all non-numbers
// Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/ig;
let result = movieName.match(noNumRegex).length;

// challenge
// conditions are as such
// 1) Usernames can only use alpha-numeric characters.
// 2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
// 3) Username letters can be lowercase and uppercase.
// 4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

// test cases can be found here
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
let result = userCheck.test(username);
console.log(result);

// additional information
// ^            - start of input
// [a-z]        - first character is a letter
// [0-9][0-9]+  - ends with two or more numbers
// |            - or
// [a-z]+       - has one or more letters next
// /d*          - and ends with zero or more numbers
// $            - end of input
// i            - ignore case of input

// another way of doing
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);

// additional information
// ^            - start of input
// [a-z]        - first character is a letter
// [0-9]{2,0}   - ends with two or more numbers
// |            - or 
// [a-z]+       - has one or more letters next
// \d*          - and ends with zero or more numbers
// $            - end of input
// i            - ignore case of input

// match whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let result = sample.match(countWhiteSpace); // matches all whitespaces found

// match non-whitespace
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let result = sample.match(countNonWhiteSpace); // matches all non-whitespaces

// specify upper and lower number of matches
// For example, to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false

// has to match Oh(3x to 6x of it) no
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);

// check for all or none
// You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element
let favWord = "favorite";
let favRegex = /favou?rite/; // can have u or not have it at all
let result = favRegex.test(favWord);

// positive and negative lookahead
// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

// On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/; // checks if u exists
let qRegex = /q(?!u)/;  // ensures u does not exists
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]

// A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true

// challenge
let sampleWord = "12abcde";
let pwRegex = /(?=^\D\w*\d{2})(?=\w{6,})/;
let result = pwRegex.test(sampleWord);

// additional information
// first ?=
// ^        - start of input 
// \D       - must be non-digit
// \w*      - ends with one or more alphanumeric
// \d{2}    - there must be at 2 consecutive digits
// second ?=
// \w{6,}   - string must be at least 6 character or larger long

// Checks for mixed grouping of characters
let myString = "Franklin D. Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; 
let result = myRegex.test(myString); 

// additional information
// you must either have Franklin or Elanor and must end with Roosevelt
