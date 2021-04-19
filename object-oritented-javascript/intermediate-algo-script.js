// Sum All Numbers in a Range
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
function sumAll(arr) {
  let smallerVal;
  let biggerVal;

  if (arr[0] < arr[1]) {
    smallerVal = arr[0];
    biggerVal = arr[1];
  } else {
    smallerVal = arr[1];
    biggerVal = arr[0];
  }
  let diff = biggerVal - smallerVal

  for (let i = smallerVal + 1; i < biggerVal; i++) {
    smallerVal += i;
  }

  return smallerVal + biggerVal;
}
console.log(sumAll([1, 4]));



// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.
function diffArray(arr1, arr2) {
  var newArr = [];
  let arrangedArr = biggerArr(arr1, arr2);
  let biggerArrItems = arrangedArr[0].sort();
  let smallerArrItems = arrangedArr[1].sort();

  for (let i = 0; i < biggerArrItems.length; i++) {
    let str = biggerArrItems[i];
    if (smallerArrItems.some(item => str === item)) {
      continue;
    } else {
      newArr.push(str);
    }
  }

  for (let i = 0; i < smallerArrItems.length; i++) {
    let str = smallerArrItems[i];
    if (biggerArrItems.some(item => str === item)) {
      continue;
    } else {
      newArr.push(str);
    }
  }
  
  return newArr;
}

function biggerArr(arr1, arr2) {
  if (arr1.length >= arr2.length) {
    return [arr1, arr2];
  } else {
    return [arr2, arr1];
  }
}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// Note: You have to use the arguments object.
function destroyer(arr) {
  let numToRemove = [];
  for (let i = 1; i < arguments.length; i++) {
    numToRemove.push(arguments[i]);
  }

  // filter out items that are found in numToRemove array
  return arr.filter(item => !(numToRemove.some(num => num == item)));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));



// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
function whatIsInAName(collection, source) {
  var arr = [];
  let sourceLen = Object.keys(source).length;
  for (let i = 0; i < collection.length; i++) {
    let item = collection[i];
    let track = 0;

    for (let key in item) {
      let value = item[key];

      if (source.hasOwnProperty(key) && source[key] == value) {
        console.log(track);
        track++;
      }
    }

    if (track == sourceLen) {
      arr.push(item);
    }
  }

  return arr;
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].



function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
    // Split the string at one of the following conditions (converted
    // to an array)
    // a whitespace character [\s] is encountered
    // underscore character [_] is encountered
    // or is followed by an uppercase letter [(?=[A-Z])]
    // Join the array using a hyphen (-)
    // Lowercase the whole resulting string
}
spinalCase("thisIsSpinalTap")
// spinalCase('This Is Spinal Tap');



// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.
function translatePigLatin(str) {
  let consonants = "";

  for (let i in str) {
    console.log(consonants);
    if (/[aeiou]/i.test(str.charAt(i))) {
      if (i == 0) {
        return str + "way";
      } else {
        return str.slice(i,str.length) + consonants + "ay";
      }
    } else {
      consonants += str.charAt(i);
    }
  }
  return consonants + "ay";
}

console.log((translatePigLatin("california")));



// Search and Replace
// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
function myReplace(str, before, after) {

  if (before.charAt(0) == before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  } else if (before.charAt(0) == before.charAt(0).toLowerCase()) {
    after = after.charAt(0).toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");



// DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
function pairElement(str) {
  let strArr = str.split('');
  let bigArr = [];

  bigArr = strArr.map(letter => {
    let letterArr = [letter];
    switch (letter) {
      case "C":
        letterArr.push("G");
        break;
      case "G":
        letterArr.push("C");
        break;
      case "A":
        letterArr.push("T");
        break;
      case "T":
        letterArr.push("A");
        break;
    }

    return letterArr;
  })

  return bigArr;
}

pairElement("GCG");



// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  let alphabets = 'abcdefgihjklmnopqrstuvwxyz';

  // cut alphabets string based on str argument given
  let sliceAlpha = alphabets.slice(
    alphabets.indexOf(str[0]),
    alphabets.indexOf(str[str.length - 1]) + 1
  );

  for (let i = 0; i < sliceAlpha.length; i++) {
    let letterExist = str.indexOf(sliceAlpha[i]);

    if (letterExist == -1) {
      return sliceAlpha[i];
    }
  }
  return undefined;
}

fearNotLetter("abce");



// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.
function uniteUnique(arr) {
  let store = [];

  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      let num = arguments[i][j];

      if (!store.includes(num)) {
        store.push(num)
      }
    }
  }

  // if wanted array to be sorted in ascending order
  // if a-b is < 0, then a will come first, if not then b will come next
  // store.sort(function(a, b){
  //   return a-b
  //   })
  return store;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));




// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
  
  
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

convertHTML("Dolce & Gabbana");



// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
function sumFibs(num){
  // num would be compared to fibonacci numbers
  var a = 1, b = 0, temp;
  let check = num;
  let sum = 0;
  sum += a;

  while (num >= 0){
    temp = a; // 1 -> 1 -> 2 -> 3 -> 5
    a = a + b; // 1 -> 2 -> 3 -> 5 -> 8
    b = temp; // 1 - > 1 -> 2 -> 3 -> 5
    num--;

    if (a > check) {
      return sum;
    } else if (a % 2 != 0) {
      sum += a;
    }
  }
  return sum;
}

console.log(sumFibs(75025));  



// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num
function sumPrimes(num) {
  let count = 0;
  for (let i = num; i > 1; i--) {
    if (isPrime(i)) {
      count += i;
    }
  }
  return count;
}

function isPrime(num) {
  for(var i = 2; i < num; i++) {
    if (num % i === 0) { return false; }
  }
  return num > 1;
}

sumPrimes(10);



// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
function smallestCommons(arr) {
	//order our array so we know which number is smallest and which is largest
	var sortedArr = arr.sort(sortNumber),
	//the smallest common multiple that leaves no remainder when divided by all the numbers in the rang
	smallestCommon = 0,
	//smallest multiple will always be the largest number * 1;
	multiple = sortedArr[1];

	while(smallestCommon === 0) {
		//check all numbers in our range
		for(var i = sortedArr[0]; i <= sortedArr[1]; i++ ){
			if(multiple % i !== 0 ){
				//if we find even one value between our set that is not perfectly divisible, we can skip to the next multiple
				break;
			}

			//if we make it all the way to the last value (sortedArr[1]) then we know that this multiple was perfectly divisible into all values in the range
			if(i == sortedArr[1]){
				smallestCommon = multiple;
			}

		}

		//move to the next multiple, we can just add the highest number.
		multiple += sortedArr[1];
	}

	console.log(smallestCommon);
	return smallestCommon;
}

function sortNumber(a, b) {
    return a - b;
}

smallestCommons([5,1]);



// Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array

function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true) {
      return arr.slice(i, arr.length);
    }
  }
  return [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });



// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
  return deepFlatten(arr);
}

// may have more levels in a single item of an array
function flatten(arr) {
  return [].concat(...arr)
}

function deepFlatten(arr) {
  return flatten(           // return shalowly flattened array
    arr.map(x=>             // with each x in array
      Array.isArray(x)      // is x an array?
        ? deepFlatten(x)    // if yes, return deeply flattened x
        : x                 // if no, return just x
    )
  )
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
