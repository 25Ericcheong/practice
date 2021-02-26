function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0,2,'DarkSalmon','BlanchedAlmond')
  // Only change code above this line
  return arr;
}

// changes first 2 words and sub 2 new words into index inputted
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

function forecast(arr) {
  // Only change code below this line
  arr = arr.slice(2,4);
  return arr;
}

// prints 'warm' and 'sunny'
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

// prints 'learning', 'to' ... 'fun'
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

console.log(spreadOut());

// false if element doesn't exist in array and true if it does
function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) != -1) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
