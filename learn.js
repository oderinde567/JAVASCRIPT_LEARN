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

// let text = 'Hello World, Welcome to the World';
// console.log(text.indexOf("World"));


/*
        *-> Extracting parts
        slice (start, end)
        Extracts a section of a string (end not included).
*/

// Managing featured products images
// const productImages = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg',];

// Show Only first 3 images in main gallery, rest in thumbnail view.

// const mainGalleryImages = productImages.slice(0, 3);
// console.log(mainGalleryImages);
// const thumbnailImages = productImages.slice(3); // will display all images from img4 to img6.
// console.log(thumbnailImages);

// *** API DEVELOPMENT - Request Processing

// * Processing File Uploads
// Extracting file extension from uploaded
// const uploadedFile = 'quarterly-report.pdf';
// const fileExtension = uploadedFile.slice(uploadedFile.lastIndexOf('.' ) + 1);
// console.log(fileExtension);

// const uploadedFile = 'quarterly-report.html';
// const fileExtension = uploadedFile.slice(uploadedFile.lastIndexOf('.' ) + 1);
// console.log(fileExtension);

// ** Email & Notificatiion Systems
// Email Domain Extraction
// const email = "femi@company.com";
// const domain = email.slice(email.indexOf('@') + 1);
// console.log(domain);

// const username = email.slice(0, email.indexOf('@'));
// console.log(username);


/*
* -> substring(start, end)
similar to slice, but doesn't accept negative indexes.
*/

// const creditCard = "4111111111111111";
// const maskedCard = creditCard.substring(0, 4) + "********" + 
// creditCard.substring(12);
// console.log(maskedCard);


// ** URL Slug Generation
// const blogTitle = "How to Build Scalable Backend Systems in 2025";
// const slug = blogTitle.substring(0, 47).toLowerCase().replace(/ /g, "-"); // to lower case
// const slug = blogTitle.substring(0, 47).toUpperCase().replace(/ /g, "-"); // to upper case
// console.log(blogTitle.length); // to count the number of characters
// console.log(slug);


// ***** Array -> JAVASCRIPT
// ? what is an Array?
/*
An array is a data structure that store multiple values in a single values variable. Arrays can hold any type of data: numbers, strings, objects, even other arrays.
*/

// * Creating Arrays

// const fruits = ['apple', 'banana', 'orange'];
// const numbers = [1, 2, 3, 4, 5];
// const mixed = [1, 'hello', true, null, {name: 'john'}];
// const empty = [];

// Array Properties

//length.
//Return the number of elements in an array.

// const colors = ['red', 'green', 'blue'];
// console.log(colors.length);


// * -> Array Methods
// Adding/Removing Elements
// const animals = ['cat', 'dog'];
// animals.push('bird'); // this is used to add more files
// console.log(animals);
// File upload Tracking
//? Tracking uploaded files
// const uploadedFiles = [
//         {filename: 'document.pdf', size: '2.5MB'},
//         {filename: 'image.jpg', size: '1.8MB'}
// ];

// const newFile = {filename: 'video.mp4', size: '15.2MB'};

// uploadedFiles.push(newFile);
// console.log(uploadedFiles);


// Add multiple elements
// animals.push('fish', 'hamster');
// console.log(animals);


// pop()- Remove the last element
// const fruits = ['apple', 'banana', 'orange'];
// const removed = fruits.pop();
// console.log(removed);
// console.log(fruits);


// Unshift - Add elements to the beginning.
// const numbers = [2, 3, 4];
// numbers.unshift(1);
// console.log(numbers);
// numbers.unshift(-1, 0);
// console.log(numbers);

// shift() - Removes the first element.
// const colors = ['red', 'green', 'blue'];
// const removed = colors.shift();
// console.log(colors);

// ** Searching Elements
// indexOf() - Finds the index of an element
// ! User Authentication Check
// Checking if user is in blocked list
// const blockedUsers = ['user123', 'spammer456', 'bot789'];
// const loginAttempt = 'user123';
// const isBlocked = blockedUsers.indexOf(loginAttempt);
// console.log(isBlocked);

// includes() - checks if an element exists
// const pets = ['cat', 'dog', 'bird'];
// console.log(pets.includes('dog')); // prints true
// console.log(pets.includes('rat'));    // prints false


// includes() - checks if an elements exists.
const pets = ['cat', 'dog', 'bird'];
const found = pets.find(num => num === 'dog');
// console.log(found);


// find() - Returns the first elements tha matches a condition.
// const numbers = [5, 12, 8, 130, 44];
// const found = numbers.find(num=> num > 10);
// console.log(found);

const users =[
        [101, "layla@mail.com", 'active'],
        [102, "john@mail.com",  'inactive'],
        [103, "mike@email.com", 'active'],
];


//! looking for the user
// const foundUser = users.find(user => user [0] === 102)
const foundUser = users.filter(user => user[2] === 'active');
// console.log(foundUser);

/*
        Transforming Arrays
map() - Creates a new array by transforming each element
*/

const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);
const names = ['Thakzin', 'Ibnu', 'Tauzee', 'Ashiwaju', 'Ahmeedi'];
const uppercase = names.map(name => name.toUpperCase());
// console.log(uppercase);
// console.log(doubled);


// * slice() - Extracts a portion of an array (doesn't modify original)

// ** Server Load Distribution
// const servers = [
//     ['web01', 'primary', '80%'],
//     ['web02', 'primary', '75%'],
//     ['web03', 'secondary', '60%'],
//     ['web04', 'secondary', '55%'],
//     ['web05', 'backup', '10%']
// ];
// const secondaryServers = servers.slice(2,4);
// console.log(secondaryServers);

// ** -> splice() - Adds/removes elements (modifies original)

/*
        The splice() method changes the  contents of an array by:

        * -> removing 
        * -> replacing, or 
        * -> adding elements at specific positions. 
        
        It modifies the original array (unlinnk sice() which returns a new one).
 */

// Removing an item from a shopping cart.

// let cart = ['Shirt', 'Trouser', 'Shoes', 'Watch',];
// cart.splice(1, 2);
// console.log(cart);

// Adding a new item to the middle of a list.

// const playlist = ['Song A', 'Song B', 'Song D',];
// playlist.splice(2, 1, 'Song C');
// console.log(playlist);

// Managing a To-Do List
// let tasks = ['wake up', 'brush', 'exercise', 'breakfast'];
// tasks.splice(1, 1, 'Shower');
// console.log(tasks);


// **** JAVASCRIPT OBJECT

// An object is data stucture that stores information in keyvalues pairs.
// Each key (also called a property) is like a label, and the value is the data stored under that label.

// let person = {
//         name: "Femi",
//         age: 25,
//         course: "Computer Science",
//         job: "Backend Engineer",
//         tel: "08144979938",
//         "First name": "Femi"
// };

// Accessing Object Values
// There are two main wyas to access an object's value.
// console.log(person.name);
// console.log(person.tel);

// * Bracket notation
// console.log(person["job"]);
// console.log(person["First name"]);

// Adding and updating properties
// you can ass new properties or update existing ones easily.

// person.country = "Nigeraia";
// person.age = 26;
// console.log(person);

// Deleting properties.
// delete person.course;
// console.log(person);

// ** Nested Objects
// let person = {
//         name: "Ahmed Ashiwaju",
//         address: {
//                 city: "Abuja",
//                 zip: 100270,
//         },
//         hobbies: ["Campaign", "Indiffernt"]
// };

// console.log(person.address.city);
// console.log(person.hobbies[0]);
// console.log(person.hobbies[1]);
// console.log(person.hobbies.indexOf("Campaign"));

/*
        * *** -> LOOP 
        A loop lets you repeat a block code multiple times - automatically.
                Types of Loopd in Javascript
        Loop Type (for, while, do...while, for....of, for....in)

        for -> When you know how many times to repeat.
        while -> When you don't know the exact count, but have a condition
        do...while -> Similar to while, but runs at least once. 
        for...of -> To loop throught arrays or strings
        for...in -> To loop through object properties
*/

        // for(let i =1; i < 5; i++){
        //         console.log(i);
        // }

        // const dirtyDishes = ["plate", "bowl", "cup", "fork", "spoon"];

        // for(let i = 0; i < dirtyDishes.length; i++){
        //         console.log(`washing: ${dirtyDishes[i]}`);
        //         console.log(`${dirtyDishes[i]} is now clean`);
        // }

// * Grocery Shopping (Working with Lists)
// Checking items off your shopping list
// const shoppingList = ["milk", "eggs", "bread", "cheese",]
// const cart = [];

// for (let i = 0; i < shoppingList.length; i++){
//         console.log(`Added ${shoppingList[i]} to cart`)
//         cart.push(shoppingList[i]);
// }
// console.log("Cart contains:", cart);

// ** while loop
// Runs as long as the condition is true.
// let i = 0;
// while(i < 5){
//         console.log(i);
//         i++;
// }


// ** charging your phone
// monitoing battery level hile charging

// let batteryLevel = 15; // starting with low battery
// const chargingRate = 8; // % per iteration

// console.log("phone charging started ...");
// while(batteryLevel < 100){
//         batteryLevel += chargingRate;

//         if(batteryLevel > 100) batteryLevel = 100;
//         console.log(`Battery: ${batteryLevel}%`);

//         if(batteryLevel >= 80){
//         console.log("Almost full! Fast charging slowing down...");
//    }
// }
// console.log(batteryLevel);

// console.log("Battery fully charged!");


// *** do...while Loop
// RUns at least once, then, checks the condition.
//the do...while loop is special because it gurantees the code runs at least once, then continues as long as the condtion remains true.
// let i = 0;
// do{
//         console.log(i);
//         i++;
// } while(i < 5);


// *** password Length Checker
// let passwords = ["123", "pass", "mysecurepass123", "abc",];
// let index = 0;
// let validpassword = "";

// do{
//         let currentpassword = passwords[index];
//         console.log(`Checking password: ${currentpassword}`);

//         if(currentpassword.length >= 8){
//                 validpassword = currentpassword;
//                 console.log(`valid password found: ${validpassword}`);
//         } else{
//                 console.log(`Too short! Minimm 8 characters required.`);
//         }
//         index++;
// } while(index < passwords.length && validpassword === "");


// *** ATM withdrawal validator
// let balance = 1000;
// let withdrawAmount = 1500;
// let attempts = 0;

// do{
//     attempts++;
//     console.log(`Attempt ${attempts}: Trying to withdraw $${withdrawAmount}`);
//     if(withdrawAmount <= balance){
//         balance -= withdrawAmount;
//         console.log(`success! withdrew $${withdrawAmount}.New balance: $${balance}`);
//         break;
//     }else{
//       console.log(`insufficient funds. Balance: $${balance}`);
//       withdrawAmount -= 200; //Reduce withdraawal amount.
//     }
// }while (withdrawAmount > 0)


// *** for...of loop (ES6)
//  used to loop through arrays, strings, map, sets, etc.

// const fruits = ["apple", "banana", "orange"];
// for(const fruit of fruits){
//     console.log(fruits);
// }


//  *** Email spam filter.

// let emails = [
//     "helo@compaany.com",
//     "spam@lottery.com",
//     "friend@email.com",
//     "winner@fake.com",
//     "boss@work.com",
// ];

// let spamkeywords = ["spam", "lottery", "winner", "fake"];
// for (let email of emails){
//     let isSpam = false;
//     for(let keyword of spamkeywords){
//         if(`email.includes(keywords)`){
//             isSpam = true;
//             break;
//         }
//     }

//     if(isSpam){
//         console.log(`❌ SPAM: ${email}`);
//     }else{ console.log(`✔ INBOX: ${email}`)
//     }
// }


// ** ConditionalStatements
// Conditional statement check conditions (true/fals expressions) and decide

// In javascript, the main conditional statements are:
/*

        *`if`
        *`if...else`
        *`else if`
        *`switch`
        *`Ternary operator`? :`
        * Optional chaining + nullish coalescing (modern JS).
*/

// if statement
// Runs a bloxk only if the condition is true.

// let age = 20;
// if(age >= 18){
//         console.log("you are an adult");
// }

// if ...else statement
// if the condition is true -> run block A
// Else -> run block B

// let age = 15;
// if(age >= 18){
//         console.log("Adult");
// } 
// else{
//         console.log("Minor");
// }

// else if statement
// * used when you need check multiple conditions.

let score = 75;
if(score >= 90){
        console.log("A");
} else if (score >= 70){
        console.log("B")
} else if(score >= 50){
        console.log("C")
} else{
        console.log("Fail");
}


// ** Switch Statement
// used when you are checking one value against many cases/
// cleaner than many else if statements.

let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// * Ternary Operator `? :`.
// Short form and `if...else` 
// Good for simple decisions.

let age = 18;

let message = age >= 18 ? "Adult" : "Minor";
// not ?is if and : is else
// console.log(message);


// *** Function in javascript.
// a function is reusable block of code that performs a specific task
// you write function once, and use it many times.

// why use functions?

/*
        * -> reduce code repetition.
        * -> organize code into readable parts.
        * -> make code reusable.
        * -> make programs cleaner.
*/

// **  Basic FUnction Structure


        // function greet(){
        // console.log("Hello!");
        // }

        // greet();




// * `function` -> keyword. 
// * `greet` -> function name. 
// * `()` -> parameters area. 
// * `{}` -> function body.
 

/*
        To run the function:
        ***********
        greet()// outputs: Hello!
        ***********
*/

// * Funtion Parameters & Arguments
// Parameters -> placeholders inside the funtion
// Arguments -> actual values you pass

/*
        **********************
        function greet (name){
             console.log("Hello" + name);
             console.log("Hello"+" "+ name);
        }
    
        greet("Ibraheen"); // argument:"Ibraheem"
        **********************
*/


// Return Statement.
// A functon can return a value.

/*
        ******************
        function add(){
                return a + b;
        }
        console.log(add(5, 3)); // 8
        *********************
        once `return` runs, the fuction stops execution.
*/
function returnName(){
        return .098*678;
        // return "Ib'nu";
}
// console.log(returnName());
//  Default parameters
/* 
        *********************
        function greet(name = "Guest"){
                console.log("Hello" + name);
        }
        greet(); // Hello Guest
        greet("Sam"); // Hello sam
        **********************
*/

// * Function Declaration

// function functionName(parameters){
//         return Value;
// }

// Function Expressions
// A function stored in a variable
// const greet = function(){
//         console.log("Hi");
// }
// greet();

const multiply = function(a, b){
        return a * b;
}
// console.log(multiply(5, 3)); // 15


// * Arrow Functions(ES6+)

const functionName = (parameters) => {
        // function body.
        return Value;
};

// single parameter (parenthesis optional)
const square = x => x * x;

// No parameters
const sayHello = () => "Hello";

// Implicit return
const add = (a, b) => a+b;

// --- CALLING THEM ---
// console.log(square(5));
// console.log(sayHello());

// console.log(add(10, 20));


//using Math.pow()
let result2 = Math.pow(5, 2);
// console.log(result2); // 25

// Immediately Invoked FUnction Expressions (IIFE)
(function(){

})();

// or with arrow function
(() => {
        // code  here
});

// ** Examples
// (function(){
//         const add = (a, b) => a + b;
//         const result = add(5, 7);
//         console.log("The sum is : ", result);
// })();

// (() => {
//         const square = x => x * x;
//         const value = square(6);
//         console.log("The square is:", value);
// })();


// ***  SOLUTION

// function removeDuplicates(array){
//  return [...new Set(array)];
// }
// console.log(removeDuplicates([1,2,2,3,4,4,5,6,6,6,7,7,8,]));


// ? Write a function redundant that takes in a string str and returns a function that returns str

function redundant(str){
        return function(){
                return str;
        }
}
 const f1 = redundant("apple");

//  console.log(f1());


 // *** Create a function that takes a number as an argument, increase the number by +1 and returns the result.

 function addition(num){
        return num + 1;

 }
//  console.log(addition(0));

//*******************************
 function addition(num){        
        return num + 1;
       
 }

 //*******************************
 function addition(num){
        return num + 1;
        
 }
//  console.log(addition(-3));


// **** Object Oriented Programming in JavaScript
// **** Creating Object


const person = {
        name: "john",
        age: 30,

        // * Method
        greet: function(){
                return `hello, my name is ${this.name}`;
        }
}
// console.log(person.name);
// console.log(person.greet());


// **** B4 Es6
//! By convention, constructor functions are named starting with an uppercase letter. Its purpose is to initializ new `person` objects.
function Person(name, age){

        // ! the `this` keyword inside the constructor refers to that newly created object.
        this.name = name;
        this.age = age;

        // * Method
        this.greet = function(){
                return `Hello, my name is ${this.name}`;
        }
}

// Creating instance
const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);

console.log(person1.greet());
console.log(person2.greet());


//*** Arrya Properties

function Libery(name, books){
        this.name = name;
        this.books = books || [];

        this.addBook = function(book){
                this.books.push(book);
        };
}

const lib = new Libery("City Library", ["Math", "English"]);
lib.addBook("Physics");

console.log(lib.books);










