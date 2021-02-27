// convert celsius to fahrenheit
function convertToF(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;
  return fahrenheit;
}

convertToF(30);

// reverse a string
function reverseString(str) {
  let temp = [];
  for (let i = 0; i < str.length; i++) {
    temp.push(str[i]);
  }
  str = "";

  for (let i = temp.length - 1; i > -1; i--) {
    str += temp[i];
  }
  return str;
}

reverseString("hello");

// factorize a num
function factorialize(num) {
  if (num == 0) {
    return 1;
  }

  let temp = 1;
  for (let i = 1; i <= num; i++) {
    temp *= i;
  }
  return temp;
}

factorialize(5);

// find the longest word in a sentence and output the number of words for longest word found
function findLongestWordLength(str) {
  let words = str.split(" ");
  let biggerWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > biggerWord.length) {
      biggerWord = words[i];
    }
  }
   
  return biggerWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
function largestOfFour(arr) {
  for (let i = 0; i < arr.length; i++) {
    let tempSubArray = arr[i];

    let tempNum = arr[i][0];
    for (let j = 1; j < tempSubArray.length; j++) {
      if (tempSubArray[j] > tempNum) {
        tempNum = tempSubArray[j];
      }
    }
    arr[i] = tempNum;
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false
function confirmEnding(str, target) {
  let words = str.split(" ");
  let targetLen = target.length - 1;

  let word = words[words.length - 1];
  let index = word.length - 1;
  for (let i = targetLen; i >= 0; i--) {

    if (word.charAt(index) != target.charAt(i)) {
      console.log("enter");
      return false;
    }

    index--;
  }
  return true;
}

confirmEnding("Bastian", "n");

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
function repeatStringNumTimes(str, num) {
  let store = "";
  for (let i = 0; i < num; i++) {
    store += str;
  }
  return store;
}

repeatStringNumTimes("abc", 3);

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {
  let words = str.split(" ");
  let countStr = words.length - 1;
  let store = "";

  for (let i = 0; i < words.length; i++) {
    countStr += words[i].length;
  }

  if (countStr > num) {
    for (let i = 0; i < num; i++) {
      store += str.charAt(i);
    }
    return store + "..."
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
function findElement(arr, func) {

  for (let i = 0; i < arr.length - 1; i++) {
    if (func(arr[i])) {
      return arr[i]
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  }
  return false;
}

booWho(null);

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
function titleCase(str) {
  let words = str.split(" ");
  let store = "";

  for (let i = 0; i < words.length; i++) {
    let lowerWord = words[i].toLowerCase();
    let otherHalf = lowerWord.slice(1, lowerWord.length)

    store += lowerWord.charAt(0).toUpperCase() + otherHalf + " ";
  }
  return store.slice(0,store.length - 1)
}

titleCase("I'm a little tea pot");

