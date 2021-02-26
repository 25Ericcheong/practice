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

// will remove arrays within nested array if a particular elem exists in the array within the nested array
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {

    let temp = arr[i]
    for (let j = 0; j < temp.length; j++) {
      console.log(temp[j]);
      if (temp[j] == elem) {
        temp = [];
        break;
      }
    }

    if (temp.length != 0) {
      newArr.push([...temp])
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

let myNestedArray = [
  // Only change code below this line
  [
    // an array within an array, 3 levels deep
    ['unshift', false, 1, 2, 3, 'complex', 'deep'],
    [
      // an array nested 4 levels deep
      ['loop', 'shift', 6, 7, 1000, 'deeper'],
    ],
    [
      [
        // 3 arrays nested 5 levels deep
        ['concat', false, true, 'spread', 'deepest'],
        ['mutate', 1327.98, 'splice', 'slice', 'push'],
        ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
      ]
    ]
  ]
  // Only change code above this line
];
