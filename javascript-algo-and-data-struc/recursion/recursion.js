// take sum of first n elements of array
// if n = 0, should return 0
function sum(arr, n) {
  if (n == 0) {
    return 0;
  } else if (arr.length == 1 || n == 1) {
    return arr[0]
  } else {
    return sum(arr, n-1) + arr[n - 1];
  }
}
