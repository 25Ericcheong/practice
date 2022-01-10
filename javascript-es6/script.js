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
