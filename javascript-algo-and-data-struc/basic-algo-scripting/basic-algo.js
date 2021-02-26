// convert celsius to fahrenheit
function convertToF(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;
  return fahrenheit;
}

convertToF(30);

// reverse a string
function reverseString(str) {
  let temp = [];
  for (let i = 0; i < str.length; i++) {
    temp.push(str[i]);
  }
  str = "";

  for (let i = temp.length - 1; i > -1; i--) {
    str += temp[i];
  }
  return str;
}

reverseString("hello");

