# JavaScript for Everyone
![JS](https://cdn-images-1.medium.com/max/1600/1*H-25KB7EbSHjv70HXrdl6w.png)
## Table of Contents
1. [Introduction](#introduction)
2. [Setup](#setup)
3. [Variables](#variables)
4. [Data Types](#data-types)
5. [Operators](#operators)
6. [Conditionals](#conditionals)
7. [Arrays](#arrays)
8. [Loops](#loops)
9. [Functions](#functions)
10. [Scope](#scope)
11. [Hoisting](#Hoisting)
12. [Object](#object)
13. [Class](#class)
14. [Document Object Model](#document-object-model)
15. [Functional Programming](#functional-programming)
16. [Call Back and Higher Order Functions](#call-back-and-higher-order-functions)
17. [Destructuring](#destructuring)
19. [Rest and Spread](#rest-and-spread)
20. [Document Object Model](#document-object-model)
21. [Regular Expressions](#regular-expressions)
22. [Local Storage](#local-storage)
23. [Cookies](#cookies)

## Introduction
Welcome to JavaScript. ***Congratulations*** for deciding to learn JavaScript.
***JavaScript for Everone*** is a guide for both beginner and advanced JavaScript developers. In this step by step tutorial, I will teach you JavaScript, the most popular programming language in the history of mankind. You use JavaScript ***to add interactivity to websites, to develop mobile apps, desktop applications, games*** and nowadays JavaScript can be used for ***machine learning*** and ***AI***.
***JavaScript (JS)*** has increased in popularity in recent years and has been the leading
programming language for four consecutive years and is the most used programming language on
Github 
## Setup
First thing first, lets install text or code editor. Install code editor, it could be [vscode](https://code.visualstudio.com/), [atom](https://atom.io/), [bracket](http://brackets.io/), [notepad++](https://notepad-plus-plus.org/) or others. I recommend vscode.
Install either [Chrome](https://www.google.com/chrome/) or [Firefox](https://www.mozilla.org/en-US/firefox/new/?v=b) if you didn't have yet.
## Adding JavaScript to a web page
JavaScript can be added to a web pages in three ways:
* ***Inline script***
* ***Internal script***
* ***External script***

The following sections shows different ways of adding JavaScript code to your web page.
### Inline Script
Create a folder on your desktop or in any location and create an ***index.html*** file. Then paste the following code and open it in a browser, either in [Chrome](https://www.google.com/chrome/) or [Firefox](https://www.mozilla.org/en-US/firefox/new/?v=b).

```html
<DOCTYPE html>
<html>
  <head>
    <title>JavaScript for Everyone</title>
  </head>
  <body>
        <button onclick= "alert('Welcome to JavaScript!');">Click Me</button>
  </body>
</html>
```
### Internal script
Internal script can be written in the *head* or the *body* but it is preferrable to put it on the body of the html document.
```html
<DOCTYPE html>
<html>
  <head>
    <title>JavaScript for Everyone</title>
  </head>
  <body>
   <script>
     console.log('Welcome to JavaScript for Everyone')
    </script>
  </body>
</html>
```
### External script
```html
<DOCTYPE html>
<html>
  <head>
    <title>JavaScript for Everyone</title>
  </head>
  <body>
  //it could be in header or in the body
  // Here is the recommended place to put the script
  <script src="introduction.js"></script>
  </body>
</html>
```
#### Exercises:Setting Up your machine
## Variables
Variables are *containers* of data. Variables *store* data in a memory location. When a variable is declared a memory location is reserved and when it is assigned to a value, the memory space will be filled. To declare a variable we use, *var*, *let* or *const* key word. For a variable which changes at different time we use *let* but if the data doesn't change at all we use *const*. For example PI, country name, gravity.
```js
// Declaring different variables of different data types
let firstName = "Asabeneh"; // first name of a person
let lastName = "Yetayeh"; // last name of a person
let location = "Helsinki";// capital city
const country = "Finland"; // country
let age = 100; // age in years
let isMarried = true;
console.log(firstName, lastName, location, country, age);//Asabeneh, Yetayeh, Helsinki, Finland, 100

// Declaring variables with number values
const gravity = 9.81; // earth gravity  in m/s2
const boilingPoint = 100; // water boiling point, temperature in oC
const PI = 3.14; // geometrical constant
console.log(gravity, boilingPoint, PI); // 9.81, 100, 3.14
// Variables can also be declaring in one line
let name = "Asabeneh", //name of a person
  job = "teacher", 
  live = "Finland";
  console.log(name, job, live) 
```
#### Exercise - 1 : Variables
1. Declare variables to store your first name, last name,  marital status, country and age in multiple lines
1. Declare variables to store your first name, last name,  marital status, country and age in a single line
1. Declare two variables *myAge* and *yourAge* and assign them initial values and log to browser console. 
      Output:
      ```sh
      I am 25 years old.
      You are 30 years old.
      ```
## Comments
Commenting in JavaScript is similar to other programming languages. Comments can help to make code more readable.
There are two ways of commenting:
* *Single line commenting*
* *Multiline commenting*
```js
    // let firstName = 'Asabeneh'; single line comment
    // let lastName = 'Yetayeh'; single line comment
```
Multiline commenting:
```js
    /*
    let location = 'Helsinki';
    let age = 100;
    let isMarried = true;
    This is a Multiple line comment
    */
```
#### Exercise - 2 : Comments
1. Write a single line comment which says, *comments can make code readable*
1. Write a multiline comment which says, *comments can make code readable, easy to use*
*and informative*
 
## Data Types
In JavaScript and also other programming languages there are different kinds of data types. The following are JavaScript primitive data types:*String, Number, Boolean, undefined, Null* and *Symbol*.
#### Exercises - 3 : Data Types
1. The JavaScript typeof operator uses to check different data types. Check the data type of each variables from question number 1.

### Strings
Strings are text which are under ***single*** or ***double*** quote.
Lets' see some examples of string:
  ```js
  let firstName = 'Asabeneh';
  let lastName = 'Yetayeh';
  let country = 'Finland';
  let city = 'Helsinki';
  let language = 'JavaScript';
  let job = 'teacher'
```
#### String Concatination
```js
// Declaring different variables of different data types
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
let country = 'Finland';
let city = 'Helsinki';
let language = 'JavaScript';
let job = 'teacher'

let fullName = firstName + " " + lastName; // concatination, merging two string together.
console.log(fullName);

let personInfoOne = fullName + ".I am " + age + ". I live in " + country; // ES5
let personInfoTwo = `I am ${fullName}.I am ${age}. I live in ${country}`; //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoOne);
console.log(personInfoTwo);
```
#### Exercise - 3 : String
1. Declare a variable name company and assign it to an initial value **"Coding Academy"**.
1. Print the string  on the browser console using *console.log()*
1. Print the *length* of the string  on the browser console using *console.log()*
1. Change all the string to capital letters using *toUpperCase()* method
1. Change all the string to lowercase letters using *toLowerCase()* method
1. Cut(slice) out the first word of the string using *slice*, *substr()* or *substring()* method
1. Use *substr* to slice out the phase *because because because* in the following sentence:*'You cannot end a sentence with because because because is a conjunction'*
1. Check if the string contains a word *Academy* using *includes()* method
1. Split the *string* into *array* using *split()* method
1. Split the string Coding Academy at the space using *split()* method
1. "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" *split* the string at the comma  and change it to an array.
1. Change Coding Academy  to Microsoft Academy using *replace()* method.
1. What is character at index 10 in "Coding Academy" string use *charAt()* method.
1. What is the character code of A in 'Coding Academy' string using *charCodeAt()*
1. Use *indexOf* to determine the position of  the first occurrence of c in Coding Academy
1. Use *lastIndexOf* to determine the position of the last occurrence of c in Coding Academy.
1. Use *indexOf* to find the position of the first occurrence of the word *because* in the following sentence:*'You cannot end a sentence with because because because is a conjunction'*
1. Use *lastIndexOf* to find the position of the first occurrence of the word *because* in the following sentence:*'You cannot end a sentence with because because because is a conjunction'*
1. Use *search* to find the position of the first occurrence of the word *because* in the following sentence:*'You cannot end a sentence with because because because is a conjunction'*
1. Use *trim()* to remove if there is trailing whitespace at the beginning and the end of a string.E.g "  Coding Academy   ". 
1. Use *startsWith()* method with the string Coding Academy make the result true
1. Use *endsWith()* method with the string Coding Academy make the result true
1. Use *match()* method to find all the c’s in Coding Academy
1. Use *match()* to count the number all because's in the following sentence:*'You cannot end a sentence with because because because is a conjunction'*
1. Use *concat()* and merge 'Coding' and 'Academy' to a single string, 'Coding Academy'
1. Use *repeat()* method to print Coding Academy 5 times
1. Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

### Numbers
Numbers are integers and decimal values which can do all the arithemtic operations
Lets' see some examples of Numbers
```js
let age = 35;
let gravity = 9.81; // m/s2
let mass = 72 // keg
const PI = 3.14;// constant

//More Examples
const boilingPoint = 100; // oC, boiling point of water
var bodyTemp = 37; // oc body temperature
console.log(age, gravity, mass, PI, boilingPoint,bodyTemp)
```
### Booleans
 Boolean value is either true or false. Any comparisons return a boolean value which is either true or false. 
```js
let isLightOn = true;
let isRaining = false
let hungery = false;
let isMarried = true;

```
#### Exercise : Booleans
Boolean value is either true or false. 
1. Write three JavaScript statement which provide truthy value. 
1. Write three JavaScript statement which provide falsy value.
1. Use all the following comparison operators to compare the following values: >, < >=, <=, !=, !==,===. 
    Which are true or which are false ?
      1. 4 > 3
      1. 4 >= 3
      1. 4 < 3
      1. 4 <= 3
      1. 4 == 4
      1. 4 === 4
      1. 4 != 4
      1. 4 !== 4
      1. 4 != '4'
      1. 4 == '4'
      1. 4 === '4'

### Undefined
```js
let firstName;
console.log(firstName); //not defined, because it is not assigned to a value yet
```
### Null
```js
let empty = null;
console.log(empty); // -> null , means no value
```
#### Exercise : Data types
String, number, boolean, null, undefined and symbol(ES6) are JavaScript primitive data types.
- The JavaScript typeof operator uses to check different data types. Check the data type of each variables from question number 1.

## Operators
### Arthimetic Operators
Arthimetic operators are mathematical operators:+, -, *, /, *
```js
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
console.log(sum, diff,mult,div,remainder) // ->7,1,12,1.33,1

let PI = 3.14;
let radius = 100;// length in meter

const gravity = 9.81; // in m/s2
let mass = 72; // in Killogram
const boilingPoint = 100;// temperature in oC, boiling point of water
const bodyTemp = 37; // body temperature in oC

//Lets calculate area of a circle
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle) // -> 314 m
// Lets calculate weight of a substance
const weight = mass * gravity;
console.log(weigth) // -> 706.32 N(Newton)

//Concatinating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperatue is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(`The boiling point of water is ${boilingPoint} oC.\nHuman body temperatue is ${body} oC.\nThe gravity of earth is ${gravity} m / s2.`
);
```
#### Exercises:Arthimetic Operators:
JavaScript arithmetic operators are addition(+), subtraction(-), multiplication(*), division(/), modulus(%), increment(++) and decrement(--).
```js
let operandOne = 4;
let operandTwo = 3;
```
Using the above operands apply different JavaScript arithmetic operators

### Logical Operators
The following symbols are the common logical operators:
&&(ampersand) , ||(pipe) and !(negation).
&& gets true only if the two operands are true.
|| gets true either of the operand is true.
! negates true to false, false to true.

```js
//&& ampersand example
const check = 4 > 3 && 10 > 5; // true and true -> true
const check = 4 > 3 && 10 < 5; // true and false -> false
const check = 4 < 3 && 10 < 5; // false and false -> false
//|| pipe or, example
const check = 4 > 3 || 10 > 5; // true and true -> true
const check = 4 > 3 || 10 < 5; // true and false -> true
const check = 4 < 3 || 10 < 5; // false and false -> false
//! Negation examples
let check = 4 > 3 // -> true
let check = !(4 > 3) // -> false
let isLightOn = true;
let isLightOff = !isLightOn; // -> false
let isMarried = !false; // -> true
```
#### Exercises: Logical Operators
Which are true or which are false ?
1. 4 > 3 && 10 < 12
1. 4 > 3 && 10 > 12
1. 4 > 3 || 10 < 12
1. 4 > 3 || 10 > 12
1. !(4 > 3)
1. !(4 < 3)
1. !(false)
1. !(4 > 3 && 10 < 12)
1. !(4 > 3 && 10 > 12)
1. !(4 === '4')

### Comparison Operators

```js
4 > 3;
4 >= 4;
4 < 3
4 <= 3
4 != 3;
4 !== '4';
4 == '4'
4 === '4'
4 === 4
```
#### Exercises:Comparison Operators
Boolean value is either true or false. Any comparison return a boolean either true or false. 
Use all the following comparison operators to compare the following values: >, < >=, <=, !=, !==,===. 
Which are true or which are false ?
1. 4 > 3
1. 4 >= 3
1. 4 < 3
1. 4 <= 3
1. 4 == 4
1. 4 === 4
1. 4 != 4
1. 4 !== 4
1. 4 != '4'
1. 4 == '4'
1. 4 === '4'
## Conditionals
#### If
```js
if(condition){
  //code goes here
}
let isRaining = true;
if (isRaining) {
  console.log("Remember to take your rain coat.");
}
```
#### If Else
```js
if(condition){
  // if the condition meets
} else{
 // if condition doesn't meet
}
let isRaining = true;
if (isRaining) {
  console.log ('You need a rain coat.');
} else {
  console.log ('No need for a rain coat.');
}
```
#### If Else if else
```js
// if else if else
let weather = 'sunny';
if (weather === "rainy") {
  console.log("You need a rain coat.");
} else if (weather === "cloudy") {
  console.log("It might be cold, you need a jacket.");
} else if (weather === "sunny") {
  console.log("Go out freely.");
} else {
  console.log("No need for rain coat.");
}
```
#### Switch
Switch an alternative for if else if else
```js
var weather = "cloudy";
switch (weather) {
  case "rainy":
    console.log("You need a rain coat.");
    break;
  case "cloudy":
    console.log("It might be cold, you need a jacket.");
    break;
  case "sunny":
    console.log("Go out freely.");
    break;
  default:
    console.log(" No need for rain coat.");
    break;
}
// Switch More Examples
var dayUserInput = prompt('What day is it ?');
var day = dayUserInput.toLowerCase();
switch (day) {
  case 'monday':
    console.log('Today is Monday');
    break;
  case 'tuesday':
    console.log('Today is Tuesday');
    break;
  case 'wednesday':
    console.log('Today is Wednesday');
    break;
  case 'thursday':
    console.log('Today is Thursday');
    break;
  case 'friday':
    console.log('Today is Friday');
    break;
  case 'saturday':
    console.log('Today is Saturday');
    break;
  case 'sunday':
    console.log('Today is Sunday');
    break;

  default:
    console.log('It is not a week day.');
    break;
}
```
#### Ternary Operators
Another way to write conditionals is using ternary operators.
```js
let isRaining = true;
isRaining ?  console.log('You need a rain coat.') : console.log('No need for a rain coat.')
```
#### Exercises:Flow Control
- Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for.
Output:
```sh
Enter your age: 30
You are old enough to drive. 
```

Output:
```sh
Enter your age:15
You are left with 3 years to drive.
``` 	
- Compare the values of myAge and yourAge using if … else. Based on the comparison log   to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
Output:
```sh
Enter your age: 30
You are 5 years older than me. 
```
```sh
let a = 4;
let b = 3;
```
- If a is greater than b return a is greater than b else a is less than b.
Output:
```sh
4 is greater than 3
```
## Loops
In programming languages to carry out repetitive task we use different kinds of loop. The following examples are the commonly used loops.
### For Loop
```js
//For loop structure
for(initialization, condition, increment/decrement){
  // code goes here
}
for(let i = 0; i <= 5; i++){
  console.log(i)
}
 
```
### While loop
```js
let i = 0; 
while(i <= 5){
  console.log(i);
  i++;
}

```
### Do while loop
```js
let i = 0; 
do {
  console.log(i);
  i++;

} while (i <= 5)

```
#### Exercises:Loops
1. Iterate 0 to 10 using for loop, do the same using while and do while loop.
1. Iterate 10 to 0 using for loop, do the same using while and do while loop.
1. Iterate the array from above question using a for loop and print out the items.
1. Use for loop to iterate from 0 to 100 and print only even numbers
1. Use for loop to iterate from 0 to 100 and print only odd numbers
1. Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.
      ```js
      The sum all numbers is 5050.
      ```
1. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
      ```js
      The sum of all evens is 2550. And the sum of all odds is 2500.
      ```
## Arrays
In contrast to variables array can store *multiple values*. Each value in an array has an *index* and each index has *a reference in a memory address*. Each value can be accessed by using their *indexes*. The index of an array starts from *zero* and the last element is less by one from the lenght of the array.
```js
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // set of numbers
console.log(numbers.length) // => to know the size of the array, which is 6
console.log(numbers) // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0]) //  -> 0
console.log(numbers[5]) //  -> 100
let lastIdex = numbers.length - 1;
console.log(numbers[lastIndex]) -> 100
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB"
];
console.log(webTechs) // all the array items
console.log(webTechs.length) // => to know the size of the array, which is 7
console.log(webTechs[0]) //  -> HTML
console.log(webTechs[6]) //  -> MongoDB
let lastIdex = webTechs.length - 1;
console.log(webTechs[lastIndex]) -> MongoDB
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan"
  "Kenya"
];
console.log(countries) // -> all countries in array
console.log(countries[0]) //  -> Albania
console.log(countries[10]) //  -> Kenya
let lastIdex = countries.length - 1;
console.log(countries[lastIndex]) -> // Kenya

const shoppingCart = [
  "Milk",
  "Mango",
  "Tomato",
  "Potato",
  "Avocado",
  "Meat",
  "Eggs",
  "Sugar"
];
console.log(shoppingCart) // -> all shoppingCart in array
console.log(shoppingCart[0]) //  -> Milk
console.log(shoppingCart[7]) //  -> Sugar
let lastIdex = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex]) -> // Sugar
```
#### Exercises:Arrays
1. Declare an *empty* array;
1. Declare an array with more than 5 number of items
1. Find the length of your array
1. Declare an array called *mixedDataTypes*,put different data types and in your array and the array size should be greater than 5
1. Declare an array  variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
1. Print the array using *console.log()*
1. Print the number of companies in the array
1. Print out each company
1. Change companies to uppercase and print them out
1. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
1. Sort the array using *sort()* method
1. Reverse the array using *reverse()* method
1. Slice out the first 3 companies from the array
1. Slice out the last 3 companies from the array
1. Slice out the middle IT company or companies from the array
1. Remove the first IT company from the array
1. Remove the middle IT company or companies from the array
1. Remove the last IT company from the array
1. Remove all IT companies
1. Write a function called *modifyArray* takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
      ```js
      console.log(modifyArray(["Avocado", "Tomato", "Potato","Mango", "Lemon","Carrot"]);
      // →["Avocado", "Tomato", "Potato","Mango", "LEMON", "Carrot"]
      console.log(modifyArray(["Google", "Facebook","Apple", "Amazon","Microsoft",  "IBM"]);
      // →["Google", "Facebook","Apple", "Amazon","MICROSOFT",  "IBM"]
      console.log(modifyArray(["Google", "Facebook","Apple", "Amazon"]);
      // →"Not Found"
      ```
## More on Arrays


## Functions
A function is a block of code designed to perform a certain task.
A function is declared by a function key word followed by a name, followed by parentheses (). A parentheses can take a parameter. If a function take a parameter it will be called with argument. A function can also take a default paramenter.
A function can be declared or created in couple of ways:
* *Decleration function*
* *Expression function*
* *Anonymous function*
* *Arrow function*
### Function Declaration
```js
//function without parameter
function functionName(){
// code goes here
}
functionName() // calling function by its name and with parentheses

//function without parameter
function addTwoNumbers() {
  var numOne = 10;
  var numTwo = 20;
  var sum = numOne + numTwo;
  console.log(sum);
}
addTwoNumbers(); // function has to be called to be executed by it name

// function with one parameter
function functionName(parm1){
  //code goes ther
}
functionName(parm1); // during calling or invoking one argument needed
function areaOfCircle(r){
  let area = Math.PI * r * r;
  return area;
}
console.log(areaOfCircle(10)) // should be called with one argument
function square(number) {
  return number * number;
}
console.log(square(10));

// function with two parameters
function functionName(parm1, parm2){
  //code goes ther
}
functionName(parm1,parm2); // during calling or invoking two arguments needed
// Function without parater doesn' take input, so lets make a parameter with parameter
function sumTwoNumbers(numOne, numTwo) {
  var sum = numOne + numTwo;
  console.log(sum);
}
sumTwoNumbers(10, 20); // calling functions
// If a function doesn't return it doesn't store data, so it should return
function sumTwoNumbersAndReturn(numOne, numTwo) {
  var sum = numOne + numTwo;
  return sum;
}
console.log(sumTwoNumbersAndReturn(10, 20));
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(printFullName("Asabeneh", "Yetayeh"));
console.log(printFullName("Dean", "Phan"));

// function with multiple parameters
function functionName(parm1, parm2, parm3,...){
  //code goes ther
}
functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed


// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers));
    //calling a function
    AddTwoNumbers(4,3)
    const areaOfCircle = (radius) => {
      let area = Math.PI * radius * radius;
      return area;
    }

```
### Function Expression
```js
//Declaration function
function square (n) {
return n * n;
}
console.log(square(2)) // -> 4
// Function expression
const square = function (n){
  return n * n;
}
console.log(square(2)) // -> 4
```
### Anonymous Function
```js
// Self invoking functions
(function (n) {
 return n * n;
})(10);
```

### Arrow Function
```js
const square = (n) => {
  return n * n 
}
console.log(square(2)) // -> 4
// if we have only one line, it can be written as follows
const square = n => n * n; // -> 4

```
### Arrow Function vs Declaration Function
```js
```

#### Exercises:Functions
1. Declare a function *fullName* and it print out your full name.
1. Declare a function *fullName* and now it takes firstName, lastName as a parameter and it returns your full - name.
1. Declare a function *addNumbers* and it takes two two parameters and it returns sum.
1. An area of a rectangle is calculated as follows: *area = lenght x width*. Write a function which calculates  *areaOfRectangle*.
1. A perimeter of a rectangle is calculated as follows: *perimeter= 2x(lenght + width)*. Write a function which calculates  *perimeterOfRectangle*.
1. A volume of a rectangular prism is calculated as follows: *volume = lenght x width x height*. Write a function which calculates  *volumeOfRectPrism*.
1. Area of a circle is calculated as follows: *area = π x r x r*. Write a function which calculates  *areaOfCircle*
1. Circumference of a circle is calculated as follows: *circumference = 2πr*. Write a function which calculates  *circumOfCircle*
1. Density of a substance is calculated as follows:*density= mass/volume*.  Write a function which calculates  *density*.
1. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a fucntion which calculates a speed of a moving object, *speed*.
1. Weight of a substance is calculated as follows: *weight = mass x gravity*. Write a function which calculates  *weight*.
1. Temperature in oC can be converted to oF using this formula: *oF = (oC x 9/5) + 32*. Write a function which converst oC to oF  *convertCelciusToFahrenheit*.
1. Body mass index(BMI) is calculated as follows: *bmi = weight in Kg / (height x height) in m2*. Write a function which calculates  *bmi*. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is *underweight, normal, overweight* or *obsese* based the information given below.
    - The same groups apply to both men and women.
    - *Underweight*: BMI is less than 18.5
    - *Normal weight*: BMI is 18.5 to 24.9
    - *Overweight*: BMI is 25 to 29.9
    - *Obese*: BMI is 30 or more
1. Linear equation is calculated as follows: *ax + b = c*. Write a function which calculates value of a linear equation, *solveLinEquation*.
1. Quadratic equation is calculated as follows: *ax2 + bx + c = 0*. Write a function which calculates value or values of a quadratic equation, *solveQuadEquation*.
1. Declare a function name *printArray*. It takes array as a parameter and it prints out each value of thearray.
1. Declare a function name *reverseArray*. It takes array as a parameter and it returns the reverse of the array (dont’ use method).
1. Declare a function name *capitalizeArray*. It takes array as a parameter and it returns  the - capitalizedarray. 
1. Declare a function name *addItem*. It takes an item parameter and it returns an array after adding the item
1. Declare a function name *removeItem*. It takes an index parameter and it returns an array after removing an item
1. Declare a function name *sumOfNumbers*. It takes a number parameter and it adds all the numbers in that range.
1. Declare a function name *sumOfOdds*. It takes a number parameter and it adds all the odd numbers in that - range.
1. Declare a function name *sumOfEven*. It takes a number parameter and it adds all the even numbers in that - range.
1. Declare a function name evensAndOdds	. It takes a positive integer as parameter and it counts number of evens and odds in the number.
      output:
      ```she
      evensAndOdds(100);
      The number of odds are 50.
      The number of evens are 51.
      ```
1. Write a funcition which takes any number of arguments and return the sum of the arguments
      ```js
      sum(1,2,3) // -> 6
      sum(1,2,3,4) // -> 10
      ```
1. Declare a function name *randomHexaNumberGenerator*. When this function is called it generates  a random hexadecimal  number. The function return the hexadecimal number.
      output:
      ```she
      console.log(randomHexaNumberGenerator());
      '#ee33df'
      ```
1. Declare a function name *userIdGenerator*. When this function is called it generates seven character id. The function return the id.
      Output:
      ```sh
      console.log(userIdGenerator());
      41XTDbE
      ```
1. Modify question number n . Declare a function name *userIdGeneratedByUser*. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated. 
      ```sh
      userIdGeneratedByUser()
      "kcsy2
      SMFYb
      bWmeq
      ZXOYh
      2Rgxf
      "
      userIdGeneratedByUser()
      "1GCSgPLMaBAVQZ26
      YD7eFwNQKNs7qXaT
      ycArC5yrRupyG00S
      UbGxOFI7UXSWAyKN
      dIV0SSUTgAdKwStr
      "
      ```
1. Write a function name *rgbColorGenerator* and it generates rgb colors.
      Output:
      ```sh
      rgbColorGenerator()
      rgb(125,244,255)
      ```
1. Use the new Date() object to get *month, date, year, hour* and *minute*.
1. Write a function name *displayDateTime*  which display time in this format: 28/08/2018 04:08
      Output:
      ```sh
      displayDateTime()
      28/08/2018 04:08
      ```
 1. Call your function *shuffleArray*, it takes an array as a parameter and it returns a shuffled array
 1. Call your function *factorial*, it takes a whole number as a parameter and it return a factorial of the number
 1. Call your function *isEmpty*, it takes a parameter and it checks if it is empty or not
 1. Call your function *sum*, it takes any number of arguments and it returns the sum.

## Object
Everything can be an object and objects do have properties and properties have values.
```js
const person = {
  firstName:'Asabeneh',
  lastName:'Yetayeh',
  age:100,
  location:'Helsinki',
  skills:['HTML', 'CSS', 'JavaScript', 'React','Node','MongoDB', 'Python', 'D3.js']
  getFullName:function() {
    return `${this.firstName}${this.lastName}`
  }
}
person.nationality = 'Ethiopian'
person.live = 'Finland';

```
#### Exercises:Objects
- Create an object literal called *personAccount*. It has *firstName, lastName, incomes, expenses* properties and it has *totalIncomes, totalExpenses, acountInfo,addIncome, addExpence* and *accountBalance* methods. Incomes is a set of incomes and its description and the same for expenses. 

## Class
```js
class Person {
  constructor(firstName, lastName, age, location,skills){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
    this.skills = skills;
  }
  getFull () {
    return `${this.firstName} ${this.lastName}`
  }
}
```
#### Exercises:Classes
## localStorage
Local storage is used to store data on the browser.
```js
let skills = [
  {teck:'HTML',level:10},
  {tech:'CSS', level:9},
  {tech:'JS',level:8},
  {tech:'React', level:9},
  {tech:'Redux',level:10},
  {tech:'Node',level:8},
  {tech:'MongoDB',level:8}
  ]

let skillJSON = JSON.stringify(skills)
localStorage.setItem('skills',skillJSON);
let skillsObj = JSON.parse(localStorage.getItem('skills'),undefined, 4)
console.log(skillsObj)
localStorage.clear()
```
## Exercises:Local Storage
## Cookies
#### Exercises:Cookies
## Document Object Model
HTML document is structured as a JavaScript Object. Every HTML element has a different properties which can help to manipulate it. It is possible get, create, append or remove HTML elements using JavaScript. Check the examples below. Selecting HTML element using JavaScript is similar to select CSS. To select an HTML element, we use tag name, id, class name. To create an HTML element we use tag name.

### Getting Element
```js
let allTitles = document.getElementsByTagName('h1');
let allTitles = document.getElementsByClassName('title');
let firstTitle = document.getElementById('first-title');

let firstTitle = document.querySelect('h1');
let allDivs = document.querySelectorAll('div');
let span = document.querySelector('span');
let firstPara = document.querySelector('#first-para');
let allParas = document.querySelectorAll('.para');

```
### Creating Element
```js
let title = document.createElement('h1');
let firstTitle = document.getElementById('first-title');

```
### Adding attribute
```js
let title = document.createElement('h1');
let firstTitle = document.getElementById('first-title');
title.setAttribut('class', 'title');
title.setAttribut('id', 'first-title')

```
### Adding Text conent
```js
let title = document.createElement('h1');
let firstTitle = document.getElementById('first-title');
title.textContent = 'JavaScript for Everyone';

```

### Adding style
```js
let title = document.createElement('h1');
let firstTitle = document.getElementById('first-title');
title.textContent = 'JavaScript for Everyone';
title.style.color = 'green';
```

### Appending to parent
```js
let title = document.createElement('h1');
let firstTitle = document.getElementById('first-title');
title.textContent = 'JavaScript for Everyone';
title.style.color = 'green';

document.body.appendChild(title)
```
### Event Listeners
```js
const button = document.querySelector('button');
button.addEventListener('click', (e) => {
  console.log(e.target)
})

```
#### Exercises:Document Object Model

## Regular Expressions
```js
let pattern  = /[A-Z][a-z]{3,12}/
let name = 'Asabeneh';
pattern.test(name)
//output:true
```
#### Exercises:Regular Expressions
- Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
## Functional Programming
*any, every, find, filter, map, reduce ,some*
- Declare a function called getStringLists which takes an array as a parameter  and then returns an array only with string items.
- Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array from slack).
- Declare a getFirstTenCountries function and return an array of ten countries
- Declare a getLastTenCountries function and return an array of ten countries
- Find out with which letter are there many countries
