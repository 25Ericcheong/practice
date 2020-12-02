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
// Only change code below this line
[b, a] = [a, b]

// destructuring assignment with the rest parameter to reassign elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [item1, item2, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source); // returns [3,4,5,6,7,8,9,10]
