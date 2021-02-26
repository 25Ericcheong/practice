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

