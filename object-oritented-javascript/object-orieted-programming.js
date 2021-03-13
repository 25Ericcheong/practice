let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has 4 legs."}
};

dog.sayLegs();
// prints This dog has 4 legs

// constructors
// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might
function Doggie() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

// creating instance of Dog called hound
let hound = new Doggie();

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog('Norman','Black')

// practice to check myHouse is an instance of House
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(1);
myHouse instanceof House;

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}


let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

// use prototype properties to reduce code duplication
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;
// Only change code above this line
let beagle = new Dog("Snoopy");


// there is a dfiference between own property and prototype property. 
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

// special constructor can be used to check reference of instance to constructor function. Generally, should use instanceof instead
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor == Dog) {
    return true;
  } else {
    return false;
  }
}

// more efficient way prototype to constructor function
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs : 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("I is dog");
  }
};
