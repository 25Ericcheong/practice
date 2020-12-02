// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length + 1; i++) {
      if (i == contacts.length) {
          return "No such contact";
      }
      
      if (contacts[i].firstName == name) {
          console.log(name);
          if (!contacts[i].hasOwnProperty(prop)) {
              return "No such property";
          } else {
              return contacts[i][prop];
          }
      }
  }
}

lookUpProfile("Akira", "likes");
// test cases can be found here https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup
