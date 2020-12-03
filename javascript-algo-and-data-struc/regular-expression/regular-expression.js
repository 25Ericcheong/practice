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
