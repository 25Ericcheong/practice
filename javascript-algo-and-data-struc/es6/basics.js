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

