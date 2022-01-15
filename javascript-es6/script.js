// reference - https://awesomeopensource.com/project/airbnb/javascript
// object method shorthand, good practice
const atom = {
  value: 1,
  addValue(value) {
    return atom.value + value;
  },
}
console.log(atom.addValue(2));


// use property value shorthand
const lukeSkywalker = 'Like Skywalker';
const obj = {
  lukeSkywalker,
}


// only quote properties that are invalid identifiers
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
}
console.log(good.foo);


// do not call Object.prototype methods directly, such as hasOwnProperty, propertyIsEnumerable

// further studying reference - https://dev.to/aman_singh/what-s-the-deal-with-object-prototype-hasownproperty-call-4mbj
// understanding object.prototype - result from prototypal inheritance and the way prototype chain works
// chain works as such stuff -> Object.prototype -> null
var stuff = {name: 'aman'};
console.log(stuff.hasOwnProperty('name'));
console.log(Object.getPrototypeOf(stuff) === Object.prototype);

// can set up or override prototype chain with the use of setPrototypeOf
var person = {name : 'peter'};
var PersonPrototype = {getName() {return this.name}};
Object.setPrototypeOf(person, PersonPrototype);

console.log(person.getName());

// borrowing a function - have object borrow a function without object implementing it
function sayHello() { console.log(`Greetings ${this.name}`) };
var a = {name: 'peter'};

// done by using call and apply available on Function.prototype
// every function created inherits from Function.prototype
// this allows a object to 'borrow' sayHellow without the need to implement or have it anywhere on its prototype chain
sayHello.call(a);

// upon understanding prototypal inheritance and borrowing functions - can understand why one should use hasOwnProperty on Object.prototype and not on object instance
// this modifies the chain prototype
var a = Object.create(null); // chain is now a -> null
a.name = 'peter';

// this causes error because (based on 3.7 of https://awesomeopensource.com/project/airbnb/javascript#objects)
// object can be shadowed by properties on the object or object may be a null object as shown previously
// this will now cause an error and will break code if we use object instance since prototype chain has been modified to be null
// a.hasOwnProperty('name');

// as such, best practice is to do this
const has = Object.prototype.hasOwnProperty;
console.log(has.call(a, 'name'));


// prefer object spread syntax over Object.assign to shallow-copy objects. Use object rest parameter syntax to get a new object with certain properties omitted (based on 3.8 of https://awesomeopensource.com/project/airbnb/javascript#objects)
const original = { f: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { f: 1, b: 2, c: 3 }
const { f, ...noF } = copy;
console.log(noF);
console.log(original);


// use arra.push instead of direct assignment (based on 4.2 of https://awesomeopensource.com/project/airbnb/javascript#objects)
const someArray = [];
someArray.push(1);

// good practice to copy arrays
const itemsCopy = [...someArray]
someArray.push(2);
console.log(someArray);
console.log(itemsCopy);

// refer to 4.4 and 4.5 of https://awesomeopensource.com/project/airbnb/javascript#objects
// to convert an iterable object to an array, use spreads (...) instead of Array.from
// use Array.from to convert array-like object to an array;
const arrLike = {0 : 'foo', 1: 'bar', 2: 'baz', length: 3};
const arr = Array.from(arrLike);
console.log(arr)

// example of using Array.from for mapping
const someNumbers = {'0': 10, '1': 15, length: 2};
Array.from(someNumbers, value => value * 2); // => [20, 30]
// more exmaples for using Array.from -> https://dmitripavlutin.com/javascript-array-from-applications/

// use return statements in array method callbacks - ok to omit return if function body consists of single statement
console.log([[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  return flatten;
}));

// furhter look into this #TODO - still not sure
let inbox = [{Mockingbird: 'Eric Cheong'}]
inbox.filter((msg) => {
  const { subject, author } = msg;
  console.log(msg);

  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  }
  return false;
});
console.log(inbox);


// use object destructuring when accessing and using multiple properties of an object 
// refer to 5.1 of https://awesomeopensource.com/project/airbnb/javascript#objects
// saves repetitive code and prevents creation of temporary references
let user = {
  firstName: 'Eric',
  lastName: 'Cheong'
}

function getFullNameGood(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}
// or can also be written as such
function getFullNameBest({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

console.log(getFullNameBest(user));

// array destructuring
const arrDup = [1, 2, 3, 4]

// do not do this
const first = arrDup[0];
const second = arrDup[1];

// do this instead
const [first_, second_] = arrDup;
console.log(first_);
console.log(second_);

// object destructuring for multiple return values, not array destructuring
let inputs = {
  left : 'left',
  right : 'right',
  top : 'top',
  bottom : 'bottom'
}

// bad
function badProcessInput({left, right, top, bottom}) {
  // then a miracle occurs
  return [left, right, top, bottom];
}

// the caller needs to think about the order of return data
const [l, __, t] = badProcessInput(inputs);
console.log(l);
console.log(__);

// good
function goodProcessInput(inputs) {
  // then a miracle occurs
  return {left, right, top, bottom} = inputs;
}

// the caller selects only the data they need
let {left: ll_, top: tt_, isAdmin = false} = goodProcessInput(inputs);
// for the sake of proving - var is used here
console.log(ll_);
console.log(tt_);
console.log(isAdmin);

// Strings that goes over 100 characters, do not need to write across multiple lines using string concatenation
// bad
const errorMessage1 = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// bad
const errorMessage2 = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

// good
const errorMessage3 = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

// when building up strings, use template strings instead of concatenation
// bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// bad
function sayHi(name) {
  return `How are you, ${ name }?`;
}

// good
function sayHi(name) {
  return `How are you, ${name}?`;
}

// DO NOT use eval() on a string

// do not unnecessarily escape charcters - backslashes harm readability
// bad
const foos = '\'this\' \i\s \"quoted\"';

// good
const foo = '\'this\' is "quoted"';
const food = `my name is '${name}'`;


// about functions
// use named function expression as stated in 7.1 of https://awesomeopensource.com/project/airbnb/javascript#objects
// bad
function fofo() {
  // ...
}

// bad
const fooff = function () {
  // ...
};

// good
// lexical name distinguished from the variable-referenced invocation(s)
const short = function longUniqueMoreDescriptiveLexicalFoo() {
  // ...
  console.log('called');
};


// never declare a function in a non-function block eg. if, while, etc but a function declaration is not a statement
// bad
let currentUser = true;
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}

// good
let test;
if (currentUser) {
  test = () => {
    console.log('Yup.');
  };
  test();
}


// use default parameter syntax rather than mutating function arguments
// really bad
function handleThings(opts) {
  // No! We shouldn’t mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}

// avoid side effects with default parameters
var b = 1;
// bad
function count(a = b++) {
  console.log(a);
}
count();  // 1
count();  // 2
count(3); // 3
count();  // 3

// always put default parameters last
// bad
function handleThings(opts = {}, name) {
  // ...
}

// good
function handleThings(name, opts = {}) {
  // ...
}

// never mutate parameters
// bad
function f1(obj) {
  obj.key = 1;
}

// good
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}

// use ... to call variadic functions - spread operator
// bad
const x = [1, 2, 3, 4, 5];
console.log(x);
console.log.apply(console, x);

// good
const s = [1, 2, 3, 4, 5];
console.log(...s);

// bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

// good
new Date(...[2016, 8, 5]);


// about arrow functions from https://awesomeopensource.com/project/airbnb/javascript#objects
// when must use anonymous function - use arrow function notation
let store = [1, 2, 3]
// bad
let newStore = store.map(function (x) {
  const y = x + 1;
  return x * y;
});

// good
store.map((x) => {
  const y = x + 1;
  return x * y;
});
console.log(...newStore);
console.log(...store);

// if function consists of single statement returning an expression without side effects, omit braces and use implicit return
// We have several ways of writing our arrow functions. This is because arrow functions can have either "implied return" or "explicit return" keyword.

// With normal functions, if you want to return something, you have to use the return keyword. Arrow functions also have that. When you use the return keyword, it's called an explicit return. However, arrow functions up their game and allow something called implied return where the return keyword can be skipped. Let's look at some example
// bad
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

// good
let trySomething;
trySomething = [1, 2, 3].map((number) => `A string containing the ${number + 1}.`);
console.log(...trySomething);

// good
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number, index) => ({
  [index]: number,
}));

// No implicit return with side effects
function foovv(callback) {
  const val = callback();
  if (val === true) {
    // Do something if callback returns true
  }
}

// always include parentheses around argument
// bad
[1, 2, 3].map(x => x * x);

// good
[1, 2, 3].map((x) => x * x);

// avoid confusing arrow function syntax (=>) with comparison operators ( <=, >= )
// bad
// const itemHeight = (item) => item.height <= 256 ? item.largeSize : item.smallSize;

// // bad
// const itemHeight = (item) => item.height >= 256 ? item.largeSize : item.smallSize;

// // good
// const itemHeight = (item) => (item.height <= 256 ? item.largeSize : item.smallSize);

// good
const itemHeight = (item) => {
  const { height, largeSize, smallSize } = item;
  return height <= 256 ? largeSize : smallSize;
};

// enforce location of arrow function bodies withi mplicit return
// // bad
// (foo) =>
//   bar;

// (foo) =>
//   (bar);

// // good
// (foo) => bar;
// (foo) => (bar);
// (foo) => (
//    bar
// )

// further research and understanding of anonymous and arrow functions
// anonymous function has its own function context and therefore has no reference available to this.phrase
const printNumbersAnonFunc = {
  phrase: 'The current value is:',
  numbers: [1, 2, 3, 4],

  loop() {
    this.numbers.forEach(function (number) {
      console.log(this.phrase, number)
    })
  },
}

// arrow function has same exact same function context as function that created it, giving it access to both arguments and test object
const printNumbersArrow = {
  phrase: 'The current value is:',
  numbers: [1, 2, 3, 4],

  loop() {
    this.numbers.forEach((number) => {
      console.log(this.phrase, number)
    })
  },
}

printNumbersAnonFunc.loop()
printNumbersArrow.loop()

// anonymous function vs named functions vs arrow functions
// named function
// function declarations are hoisted - meaning they are loaded into memory at compilation. This explains why function call works even before function declaration appears
console.log(brag(3));

function brag(count) {
  return (`I can do ${count} pushups`);
}

console.log(brag(3));

// anonymous function or function expression
// anon function are not hoisted
// may want to use it as a callback to another function and since not going to use it again elsewhere, doesn't need a name
var brag = function(count) {
     return(`I can do ${count} pushups`);
} 
console.log(brag(3));

// arrow function or lambda function
var brag = (count) => {
     return(`I can do ${count} pushups`)
};
console.log(brag(3));


// avoid manipulating prototype directly as stated in https://awesomeopensource.com/project/airbnb/javascript#objects
// bad
function Queue(contents = []) {
  this.queue = [...contents];
}
Queue.prototype.pop = function () {
  const value = this.queue[0];
  this.queue.splice(0, 1);
  return value;
};

// good
class Queuef {
  constructor(contents = []) {
    this.queue = [...contents];
  }
  pop() {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  }
}


// use extends for inheritance to inherit prototype functionality
// bad
// const inherits = require('inherits'); -> for node.js modules
const inherits = function() {};
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
  return this.queue[0];
};

// good
class PeekableQueuef extends Queue {
  peek() {
    return this.queue[0];
  }
}


// methods can return this to help with method chaining
// good
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();
console.log(luke.jump().setHeight(20));


// bad
class Jedis {
  constructor() {}

  getName() {
    return this.name;
  }
}

// bad
class ReyBad extends Jedis {
  constructor(...args) {
    super(...args);
  }
}s

// good
class ReyGood extends Jedis {
  constructor(...args) {
    super(...args);
    this.name = 'Rey';
  }
}


// avoid duplicate class members
// bad
class Foo {
  bar() { return 1; }
  bar() { return 2; }
}


// Class methods should use this or be made into a static method unless an external library or framework requires using specific non-static methods. Being an instance method should indicate that it behaves differently based on properties of the receiver
// bad
class Foog {
  bar() {
    console.log('bar');
  }
}

// good - this is used
class Fooh {
  bar() {
    console.log(this.bar);
  }
}

// good - constructor is exempt
class Fooj {
  constructor() {
    // ...
  }
}

// good - static methods aren't expected to use this
class Fook {
  static bar() {
    console.log('bar');
  }
}

//  Don’t use iterators. Prefer JavaScript’s higher-order functions instead of loops like for-in or for-of
// Use map() / every() / filter() / find() / findIndex() / reduce() / some() / ... to iterate over arrays, and Object.keys() / Object.values() / Object.entries() to produce arrays so you can iterate over objects
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}
sum === 15;

// good
let sum2 = 0;
numbers.forEach((num) => {
  sum2 += num;
});
sum2 === 15;

// best (use the functional force)
const sum3 = numbers.reduce((total, num) => total + num, 0);
sum3 === 15;

// bad
const increasedByOne = [];
for (let i = 0; i < numbers.length; i++) {
  increasedByOne.push(numbers[i] + 1);
}

// good
const increasedByOne2 = [];
numbers.forEach((num) => {
  increasedByOne2.push(num + 1);
});

// best (keeping it functional)
const increasedByOne3 = numbers.map((num) => num + 1);
