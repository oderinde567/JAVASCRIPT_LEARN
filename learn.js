


// console.log("Hello, good morning.");
// *variables -> VAR LET CONST

// *old way of declaring varibales before (ES6)
// var y = "Tauzee";
// console.log(y);
// var y = "Femi";
// console.log(y);


// False
// console.log(g);
// g = 'undefines'
// var g = "ayo";

// * Introduced in ES6 (2015) to fix issues with var.

// let age =25;
// Major issues with var.

// if (true) {
//     var x = 10;
// }
// console.log (x)

// if (true) {
//     let x = 10; (= is called assignment operator)
// }
// console.log(x);


// console.log(b); (temporal dead zone: A temporal dead zone (TDZ) is a JavaScript concept where variables declared with let or const exist but cannot be accessed until their declaration is reached in the code's execution.)
// let b = 5;

// let b = 5; (this works)
// console.log(b);


// * let is used to declare variables that can be reassigned but cannot be redeclared in the same scope.

// let age = 25;
// age = 26;
// console.log(age);

// Block Scope.

// if (true) {
//     let message = "Hello";
//     console.log(message); //works.
// }
// console.log(message) // ReferenceError.


// -> const - variables that stay constant
/* Definition:

Const is used to declare block-scoped variables that cannot be reassigned or redeclared.
*/

//const pi = 3.14159;
//console.log(pi);

//const president = "ABAT";
//presdient = "Ahmad";

// let tropical;

// tropical = "vanilla";
// console.log(tropical)
// tropical = "Tea";
// console.log(tropical)
// tropical = "Bread";
// console.log(tropical)

// ! you must assign a value when declaring a const variable.
// const y;

// const user = { name: "Femi", age: 19 };
// console.log(user);

// const firstname = "Ibraheem";
// console.log(firstname);
//! you can alter properties.
// consle.log(user);
// user.age = 26;
// user.name = "Segun";
// console.log(user);

//! you cannot reassign the object itself
// user = { name: "John" };
// console.log(user);

/*

            * -> WHAT ARE DATA TYPES?

Data types define the kind of value a variable can hold - like numbers, text or objects. 

JavaScript Data Types Overview

Javascript has two major categories of data types:


* -> Primitive (string, number, boolean, undefined, null, bigInt, symbol) immutable.

* -> object (object, array, function, date) etc. mutable.

* 1 primitive data types
primitive types are the most basic building blocks.
they hold single values (not collections) and are immutable --meani ng you can't change them directly.

*/

// * **** STRING

// used for text
let name = "Ibraheem";
let message = 'Hello';
let phrase = `My name is ${name}`; // template literal

// strings are immutable -- you can't change characters directly:

//let str = "hi";
// str
