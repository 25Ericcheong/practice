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
