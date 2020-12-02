function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
    return [startNum]
  } else {
    const store = rangeOfNumbers(startNum, endNum - 1);
    store.push(endNum);
    return store;
  }
};

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers
