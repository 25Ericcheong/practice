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



