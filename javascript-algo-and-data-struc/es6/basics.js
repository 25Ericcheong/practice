const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1,2,3)); // returns 6
// The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array

