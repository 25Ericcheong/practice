/**
 * Splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array
 * @param {Array} arr - The array to split into groups
 * @param {Integer} size - The number of groups to break array into
 * @return {Array} - Returns an array within an array. Can have multiple arrays within a single array depending on the size and number of items in original array inputted
 */
function chunkArrayInGroups(arr, size) {
  let mainArr = [];
  let numMiniArr = Math.ceil(arr.length / size);
  let track = 0;

  for (let i = 0; i < numMiniArr; i++) {
    let miniArr = [];

    if (track == arr.length) {
      console.log(mainArr);
      return mainArr;
    }

    for (let j = 0; j < size; j++) {

       if (track == arr.length) {
         break;
       } 
      miniArr.push(arr[track]);
      track++;
    }
    mainArr.push(miniArr);
  }
  return mainArr;
}

// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].



/**
 * Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN
 * @param {Array} arr - The array to check if items are falsy or not and remove if there is any
 * @return {Array} - Returns an array that has no falsy values in it
 */
function removeFalsy(arr) {
  let store = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      store.push(arr[i]);
    }
  }
  return store;
}

// removeFalsy([7, "ate", "", false, 9]) should return [7, 9]



/**
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case. For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 * @param {String} str - The string to capitalize the first letter of word
 * @return {String} - Returns a string that has its first letter of word capitalized
 */
function titleCase(str) {
  let words = str.split(" ");
  let store = "";

  for (let i = 0; i < words.length; i++) {
    let lowerWord = words[i].toLowerCase();
    let otherHalf = lowerWord.slice(1, lowerWord.length)

    store += lowerWord.charAt(0).toUpperCase() + otherHalf + " ";
  }
  return store.slice(0,store.length - 1)
}

// titleCase('jsa hfsj') should return Jsa Hfsj
