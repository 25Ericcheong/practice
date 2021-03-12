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

// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

titleCase("I'm a little tea pot");

function frankenSplice(arr1, arr2, n) {
  let combine = [];
  let store = arr2.slice(n, arr2.length);
  let temp = arr2.slice(0, n);
  loopAddArr(temp, combine);
  loopAddArr(arr1, combine);
  loopAddArr(store, combine);

  return combine;
}

function loopAddArr(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
  }
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  let store = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      store.push(arr[i]);
    }
  }
  return store;
}

bouncer([7, "ate", "", false, 9]);

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
function getIndexToIns(arr, num) {
  
  // bubble sort
  for (let lastIndex = arr.length - 1; lastIndex > 0; lastIndex--) {
    for (let i = 0; i < lastIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
  }

  let track = 0;
  for (let i = 0; i < arr.length; i++) {
    track = i;
    if (arr[i] >= num) {
      return i;
    }
  }

  if (arr[track] <= num) {
    return track + 1;
  }

  return 0;
}

function swap(arr, i, j) {
  if (i == j) {
    return;
  }
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

getIndexToIns([40, 60], 50);

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien
function mutation(arr) {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();

  for (let i = 0; i < secondWord.length; i++) {
    if (firstWord.indexOf(secondWord.charAt(i)) == -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  let mainArr = [];
  let numMiniArr = Math.ceil(arr.length / size);
  let track = 0;

  for (let i = 0; i < numMiniArr; i++) {
    let miniArr = [];

    if (track == arr.length) {
      console.log(mainArr);
      return mainArr;
    }

    for (let j = 0; j < size; j++) {

       if (track == arr.length) {
         break;
       } 
      miniArr.push(arr[track]);
      track++;
    }
    mainArr.push(miniArr);
  }
  return mainArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
