// ////////////////////////////////////
// Primitive Data Types
// ////////////////////////////////////

// Number
let num1 = 42;
let num2 = 3.14;

// String
let greeting = "Hello, World!";

// Boolean
let isJavaScriptFun = true;

// Undefined
// A variable that has been declared but not assigned a value.
let unassigned;
console.log(unassigned);

// Null
// Represents the intentional absence of any object value.
let emptyValue = null;

// Symbol
// Introduced in ES6, it is a unique and immutable value.
let key1 = Symbol("key");
let key2 = Symbol("key");
console.log(key1 == key2);

const email = Symbol("Email");

const employee = {
  name: "John",
  age: 30,
  [email]: "a@b.c",
};

console.log(Object.keys(employee));
console.log(employee.name);
console.log(employee["name"]);
console.log(employee[email]);

for (let key in employee) {
  console.log(employee[key]);
}

console.log(Object.getOwnPropertySymbols(employee));

// ////////////////////////////////////
// Non Primitive Data Types
// ///////////////////////////////////

// Object
// Used to store collections of data and more complex entities.
let person = {
  name: "Bhumika",
  age: 20,
};
console.log(person);

// Array
// A special type of object used for storing ordered collections.
let arr = [1, 2, 3, 4, 5, "s", 1.2];
console.log(arr);

// Function
// Also an object, represents a block of code designed to perform a particular task.
function add(a, b) {
  return a + b;
}

// Adding a custom property to the function
add.description = "This function adds two parameters.";
add.string = function (a, b) {
  return `${a}${b}`;
};

console.log(add(2, 3));
console.log(add("2", 3));
console.log(add(2, "3"));
console.log(add.description);
console.log(add.string(2, 3));

// Functions as Constructors
// Functions can be used as constructors to create objects
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    return `Hi!, I am ${this.name}`;
  };
}

const john = new Person("John", 30);
console.log(john.name);
console.log(john);
console.log(john.greet());

class Person2 {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const ram = new Person2("John", 30);
console.log(ram.greet());
