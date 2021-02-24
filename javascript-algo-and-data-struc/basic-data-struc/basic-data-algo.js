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
