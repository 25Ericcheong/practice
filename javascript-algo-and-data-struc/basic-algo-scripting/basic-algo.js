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

