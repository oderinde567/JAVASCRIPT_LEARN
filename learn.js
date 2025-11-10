


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
// let name = "Ibraheem";
// let message = 'Hello';
// let phrase = `My name is ${name}`; // template literal

// strings are immutable -- you can't change characters directly:

//let str = "hi";
// str


// Number

//represent all numeric values (integers, decimals etc.)

// let age = 25;
// console.log(age)
// let price = 99.99;
// console.log(price)

// javascript doesn't have separate types for integers and floats - just number.

/*
Boolean
Represent true or false
*/
// let isOnline = true;
// console.log(isOnline)
// let isAdmin = false;
// console.log(isAdmin)

/*
            * -> Object (reference) data types

 * -> Obkects are collections of key-value pairs or complex sructures
 * ->They are mutBle and stored by refernce, not by value.
*/

// * Object

// const user = {
//     name: "Ahmahd",
//     age:28,
//     isPresident:true
// }     


// console.log(user.name, user.age, user.isPresident) // to dispaly them one by one
// console.log(user) // to display all at once

// * Array
// An ordered collection (list)of value

// const fruits = ["Apple", "Banana", "Orange", 90, true]
// console.log(fruits[2]) // to call one 

//!   De-structuring
// console.log(fruits.slice(-2));
// const [, e, , y, t] = fruits;
// console.log(e, y)



// * ***** STRING PROPERTIES

// Length
// Returns the number of characters in sting.

// let text = "Hello  World";
// console.log(text.length);

// let greet = "Hello World";
// console.log(greet.length);

//** String Methods
//* Accessing Characters

// Returns the character at a specified index.

// let prLanguage = "JavaScript"
// console.log(prLanguage.charAt(0));
// console.log(prLanguage.charAt(1));
// console.log(prLanguage.charAt(2));
// console.log(prLanguage.charAt(3));
// console.log(prLanguage.charAt(4));



//** Extracting part
// slice(start, end)
// Extract a section of string (end not included).

// let sentence = "how are you doing?";
// console.log(sentence.slice(0,5))
// console.log(sentence.slice(5));

/*searching & finding
indexof (searchvale, startposition)
Returns the fist index of the specified value, or -1 ir not found.
*/

let text = 'Hello World, Welcome to the World';
console.log(text.indexOf("World"));


