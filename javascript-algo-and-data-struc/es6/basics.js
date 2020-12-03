// uses rest parameter
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1,2,3)); // returns 6
// The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array



// uses spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // creates a duplicate of arr1

arr1[1] = 2;
console.log(arr2); // ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
console.log(arr1); //  ['JAN', 2, 'MAR', 'APR', 'MAY']



// destructuring assignment
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES; 
console.log(today, tomorrow); // 77 88

// can then assign variable names to values from dictionary
const { today : highToday, tomorrow : highTomorrow } = HIGH_TEMPERATURES; 
console.log(highToday, highTomorrow);

// destructuring assignment of nested objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today : { low : lowToday, high : highToday } } = LOCAL_FORECAST;
// instead of the following codes below
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

// swapping of variables with destructuring 
let a = 8, b = 6;
[b, a] = [a, b]

// destructuring assignment with the rest parameter to reassign elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [item1, item2, ...arr] = list; // Change this line
  return arr;
}
const arr = removeFirstTwo(source); // returns [3,4,5,6,7,8,9,10]

// destructuring assignment to pass an object as function parameter
// only calculate the average of min and max of object

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({ max, min }) => (max + min) / 2.0; 
console.log(half(stats)); // 28.015



// template literals
// use of ` (not ' or ")
// string is multi-line - saves the need of \n
// use of ${} as placeholder - do not need + operator for concatenation
// Can even include other expression by ${a + b}

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
  const failureItems = [];

  for (let i = 0; i < arr.length; i++) {
    const line = `<li class="text-warning">${arr[i]}</li>`;
    console.log(line);
    failureItems.push(line);
  }
  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList); 
// prints the following
// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]

// concise object literal declarations using object property shorthand
const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson('eric', 12, 'male')); 
// outputs { name: 'eric', age: 12, gender: 'male' } 



// concise declarative functions with ES6
// from this (ES5)
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear); // 3

// to this (ES6)
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear); // 3


