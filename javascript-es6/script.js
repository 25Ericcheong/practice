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
