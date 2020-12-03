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
// ES5
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear); // 3

// ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear); // 3



// class syntax to define constructor function
// ES5
// var Vegetable = function(veggieName) {
//     this.name = veggieName;
// }

// ES6
class Vegetable {
  constructor (veggieName) {
      this.name = veggieName
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// setters and getters
class Thermostat {
  constructor(fahrenheit) {
      this._temp = 5/9 * (fahrenheit - 32);
  }

  get temperature() {
      return (this._temp);
  }

  set temperature(updatedTemp) {
      this._temp = updatedTemp;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius



// to export functions and import them in another script
// say this is a different file
// we can export these functions as such
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {uppercaseString, lowercaseString};

// to import functions 
// assuming file is called string_function.js
import {uppercaseString, lowercaseString} from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");

import * as stringFunctions from "./string_functions.js"
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// to create an export fallback
function subtract(x, y) {
  return x - y;
}

export default function (x,y) {
  return x - y;
}

// to import a default export
// The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({})
// imagine it is from a file called math_functions.js
import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);



// create a javascript promise
const makeServerRequest = new Promise((resolve, reject) => {
});

// promise has three states: pending, fulfilled, and rejected. The promise `created before is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

// The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere.

makeServerRequest.then(result => {
  console.log(result);
});

// Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve.

makeServerRequest.catch(error => {
  console.log(error);
});

// handle a rejected promise with catch
// catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called.

