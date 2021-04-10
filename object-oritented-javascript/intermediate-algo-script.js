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


