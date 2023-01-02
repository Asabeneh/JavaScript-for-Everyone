<div align="center">
  <h1> JavaScript for Everyone</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

  <sub>Author:
  <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
  <small> January, 2018</small>
  </sub>
</div>

<div>

<small>Support the **author** to create more educational materials</small>  
<a href = "https://www.paypal.me/asabeneh"><img src='./images/paypal_lg.png' alt='Paypal Logo' style="width:10%"/></a>

</div> 

![JS](./images/javascript_for_everyone.png)
- [Introduction](#introduction)
- [Setup](#setup)
- [Requirements](#requirements)
- [Setup](#setup-1)
  - [Install Node.js](#install-nodejs)
  - [Browser](#browser)
    - [Installing Google Chrome](#installing-google-chrome)
    - [Opening Google Chrome Console](#opening-google-chrome-console)
    - [Writing Code on browser Console](#writing-code-on-browser-console)
      - [Console.log](#consolelog)
      - [Console.log with multiple arguments](#consolelog-with-multiple-arguments)
      - [Comment](#comment)
      - [Syntax](#syntax)
    - [Arithmetics](#arithmetics)
  - [Code Editor](#code-editor)
    - [Installing Visual Studio Code](#installing-visual-studio-code)
    - [How to use visual studio code](#how-to-use-visual-studio-code)
  - [Adding JavaScript to a web page](#adding-javascript-to-a-web-page)
    - [Inline Script](#inline-script)
    - [Internal script](#internal-script)
    - [External script](#external-script)
  - [Exercises:Setting Up your machine](#exercisessetting-up-your-machine)
- [Variables](#variables)
  - [Exercise - 1 : Variables](#exercise---1--variables)
- [Comments](#comments)
  - [Exercise: Comments](#exercise-comments)
- [Data types](#data-types)
  - [Primitive Data Types](#primitive-data-types)
  - [Non-Primitive Data Types](#non-primitive-data-types)
- [Numbers](#numbers)
  - [Declaring number data types](#declaring-number-data-types)
  - [Math Object](#math-object)
    - [Random number generator](#random-number-generator)
- [Strings](#strings)
  - [String Concatenation](#string-concatenation)
    - [Concatenating using addition operator](#concatenating-using-addition-operator)
    - [Long Literal Strings](#long-literal-strings)
    - [Escape Sequences in string](#escape-sequences-in-string)
    - [Template Literals(Template Strings)](#template-literalstemplate-strings)
  - [String Methods](#string-methods)
- [Checking Data types and Casting](#checking-data-types-and-casting)
  - [Checking data types](#checking-data-types)
  - [Changing data type(Casting)](#changing-data-typecasting)
    - [String to Int](#string-to-int)
    - [String to Float](#string-to-float)
    - [Float to Int](#float-to-int)
  - [Exercises: Data Types](#exercises-data-types)
    - [Exercise: String](#exercise-string)
  - [Booleans](#booleans)
    - [Exercise: Booleans](#exercise-booleans)
  - [Undefined](#undefined)
  - [Null](#null)
  - [Exercise - 6 : Data types](#exercise---6--data-types)
- [Operators](#operators)
  - [Arithmetic Operators](#arithmetic-operators)
  - [Exercises : Arithmetic Operators](#exercises--arithmetic-operators)
  - [Logical Operators](#logical-operators)
  - [Exercises: Logical Operators](#exercises-logical-operators)
  - [Comparison Operators](#comparison-operators)
  - [Exercise: Comparison Operators](#exercise-comparison-operators)
- [Conditionals](#conditionals)
  - [if](#if)
  - [if else](#if-else)
  - [if else if else](#if-else-if-else)
  - [switch](#switch)
  - [Ternary Operators](#ternary-operators)
  - [Exercise: Conditionals](#exercise-conditionals)
  - [While loop](#while-loop)
  - [Do while loop](#do-while-loop)
  - [Exercises:Loops](#exercisesloops)
- [Arrays](#arrays)
  - [Exercise : Arrays](#exercise--arrays)
- [More on Arrays](#more-on-arrays)
  - [Exercise -10 : Array Methods](#exercise--10--array-methods)
- [Functions](#functions)
  - [Function Declaration](#function-declaration)
  - [Function Expression](#function-expression)
  - [Anonymous Function](#anonymous-function)
  - [Arrow Function](#arrow-function)
  - [Arrow Function vs Declaration Function](#arrow-function-vs-declaration-function)
  - [Exercise - 10 : Functions](#exercise---10--functions)
- [Object](#object)
  - [Object Methods](#object-methods)
  - [Date Object](#date-object)
    - [Exercises: Date Object](#exercises-date-object)
  - [Exercises:Objects](#exercisesobjects)
- [JSON](#json)
  - [Converting JSON to JavaScript Object](#converting-json-to-javascript-object)
    - [JSON.parse()](#jsonparse)
  - [Using a reviver function with JSON.parse()](#using-a-reviver-function-with-jsonparse)
  - [Converting Object to JSON](#converting-object-to-json)
  - [Using a Filter Array with JSON.stringify](#using-a-filter-array-with-jsonstringify)
  - [Exercises](#exercises)
  - [Exercises Level 1](#exercises-level-1)
  - [Exercises Level 2](#exercises-level-2)
- [Higher Order Function](#higher-order-function)
  - [Callback](#callback)
  - [Returning function](#returning-function)
  - [setting time](#setting-time)
    - [setInterval](#setinterval)
    - [setTimeout](#settimeout)
  - [Exercises Level 3](#exercises-level-3)
- [Functional Programming](#functional-programming)
  - [Exercises](#exercises-1)
- [Destructuring and Spread](#destructuring-and-spread)
  - [Destructing  Arrays](#destructing--arrays)
    - [Destructuring Object](#destructuring-object)
    - [Renaming during structuring](#renaming-during-structuring)
  - [Spread or Rest Operator](#spread-or-rest-operator)
    - [Exercise: Destructuring](#exercise-destructuring)
- [Map and Set](#map-and-set)
- [Set](#set)
  - [Creating a set](#creating-a-set)
  - [Adding an element to a set](#adding-an-element-to-a-set)
  - [Deleting an element a set](#deleting-an-element-a-set)
  - [Checking an element in the set](#checking-an-element-in-the-set)
  - [Clearing the set](#clearing-the-set)
- [Set](#set-1)
  - [Creating an empty set](#creating-an-empty-set)
  - [Creating set from array](#creating-set-from-array)
  - [Adding an element to a set](#adding-an-element-to-a-set-1)
  - [Deleting an element a set](#deleting-an-element-a-set-1)
  - [Checking an element in the set](#checking-an-element-in-the-set-1)
  - [Clearing the set](#clearing-the-set-1)
  - [Union of sets](#union-of-sets)
  - [Intersection of sets](#intersection-of-sets)
  - [Difference of sets](#difference-of-sets)
- [Map](#map)
  - [Creating an empty Map](#creating-an-empty-map)
  - [Creating an Map from array](#creating-an-map-from-array)
  - [Adding values to the Map](#adding-values-to-the-map)
  - [Getting a value from Map](#getting-a-value-from-map)
  - [Checking key in Map](#checking-key-in-map)
  - [Exercises: Set and Map](#exercises-set-and-map)
  - [Exercises:Level 1](#exerciseslevel-1)
  - [Exercises:Level 2](#exerciseslevel-2)
  - [Exercises:Level 3](#exerciseslevel-3)
- [Document Object Model (DOM)](#document-object-model-dom)
  - [Getting Element](#getting-element)
    - [Getting elements by tag name](#getting-elements-by-tag-name)
    - [Getting elements by class name](#getting-elements-by-class-name)
    - [Getting an element by id](#getting-an-element-by-id)
    - [Getting elements by using querySelector using tag, class and id:](#getting-elements-by-using-queryselector-using-tag-class-and-id)
  - [Adding attribute](#adding-attribute)
    - [Adding attribute using setAttribute](#adding-attribute-using-setattribute)
    - [Adding attribute without setAttribute](#adding-attribute-without-setattribute)
    - [Adding class using classList](#adding-class-using-classlist)
  - [Adding Text content](#adding-text-content)
  - [Adding style](#adding-style)
  - [Creating an Element](#creating-an-element)
  - [Creating elements](#creating-elements)
  - [Appending to a parent element](#appending-to-a-parent-element)
  - [Event Listeners](#event-listeners)
  - [Getting value from an input element](#getting-value-from-an-input-element)
    - [Exercises:Document Object Model](#exercisesdocument-object-model)
    - [DOM: Mini Projects](#dom-mini-projects)
- [Classes](#classes)
  - [Defining a classes](#defining-a-classes)
  - [Class Instantiation](#class-instantiation)
  - [Class Constructor](#class-constructor)
  - [Default values with constructor](#default-values-with-constructor)
  - [Class methods](#class-methods)
  - [Properties with initial value](#properties-with-initial-value)
  - [getter](#getter)
  - [setter](#setter)
  - [Static method](#static-method)
- [Inheritance](#inheritance)
  - [Overriding methods](#overriding-methods)
- [Exercises](#exercises-2)
  - [Exercises Level 1](#exercises-level-1-1)
  - [Exercises Level 2](#exercises-level-2-1)
  - [Exercises Level 3](#exercises-level-3-1)
- [Regular Expressions](#regular-expressions)
  - [RegEx parameters](#regex-parameters)
    - [Pattern](#pattern)
    - [Flags](#flags)
  - [Creating a pattern with RegEx Constructor](#creating-a-pattern-with-regex-constructor)
  - [Creating a pattern without RegEx Constructor](#creating-a-pattern-without-regex-constructor)
  - [RegExp Object Methods](#regexp-object-methods)
    - [Testing for  a match](#testing-for--a-match)
    - [Array containing all of the match](#array-containing-all-of-the-match)
    - [Replacing a substring](#replacing-a-substring)
  - [Square Bracket](#square-bracket)
  - [Escape character(\\) in RegEx](#escape-character-in-regex)
  - [One or more times(+)](#one-or-more-times)
  - [Period(.)](#period)
  - [Zero or more times(*)](#zero-or-more-times)
  - [Zero or one times(?)](#zero-or-one-times)
  - [Quantifier in RegEx](#quantifier-in-regex)
  - [Cart ^](#cart-)
  - [Exact match](#exact-match)
- [💻 Exercises](#-exercises)
  - [Exercises: Level 1](#exercises-level-1-2)
  - [Exercises: Level 2](#exercises-level-2-2)
  - [Exercises: Level 3](#exercises-level-3-2)
- [Async and Await](#async-and-await)
- [localStorage](#localstorage)
  - [Setting item to the localStorage](#setting-item-to-the-localstorage)
  - [Getting item from localStorage](#getting-item-from-localstorage)
  - [Clearing the localStorage](#clearing-the-localstorage)
  - [Exercises:Local Storage](#exerciseslocal-storage)
- [Cookies](#cookies)
  - [Exercises:Cookies](#exercisescookies)
- [JavaScript Interview Questions](#javascript-interview-questions)
  - [JavaScript Tests](#javascript-tests)
  - [JavaScript Test 1](#javascript-test-1)
  - [JavaScript Test 2](#javascript-test-2)
  - [JavaScript Test 3](#javascript-test-3)

## Introduction

**_JavaScript for Everyone_** is a guide for both beginners and advanced JavaScript developers. Welcome to JavaScript. **_Congratulations_** for deciding to learn JavaScript, the language of the browser.

In this step by step tutorial, you will learn JavaScript, the most popular programming language in the history of mankind.
You use JavaScript **_to add interactivity to websites, to develop mobile apps, desktop applications, games_** and nowadays JavaScript can be used for **_machine learning_** and **_AI_**.
**_JavaScript (JS)_** has increased in popularity in recent years and has been the leading
programming language for four consecutive years and is the most used programming language on
Github.

## Setup

First thing first, lets install text or code editor. Install code editor, it could be [vscode](https://code.visualstudio.com/), [atom](https://atom.io/), [bracket](http://brackets.io/), [notepad++](https://notepad-plus-plus.org/) or others. I recommend vscode.
Install either [Chrome](https://www.google.com/chrome/) or [Firefox](https://www.mozilla.org/en-US/firefox/new/?v=b) if you didn't have yet.

If you want help, you may join the [telegram](https://t.me/JavaScriptforEveryone) channel.

## Requirements

No prior knowledge of programming is required to follow this guide. You need only:

1. Motivation
2. Computer
3. Internet
4. Browser
5. Code Editor

## Setup

I believe you have the motivation and a strong desire to be a developer, computer and Internet. If you have those, then you have everything.

### Install Node.js

You may not need it right now but you may need it for later. Install [node.js](https://nodejs.org/en/).

![Node download](images/download_node.png)

After downloading double click and install

 ![Install node](images/install_node.png)

We can check if node is installed in our local machine by opening our device terminal or command  prompt.

```sh
asabeneh $ node -v
v12.14.0
```

I am using node version 12.14.0, which is the recommended version of node.

### Browser

There are many browsers out there. However, I strongly recommend Google Chrome.

#### Installing Google Chrome

Install [google chrome](https://www.google.com/chrome/) if you do not have one yet. We can write small JavaScript code on the browser console, but we do not use the browser console to develop applications.

![Google Chrome](images/google_chrome.png)

#### Opening Google Chrome Console

You can open Google Chrome either by clicking three dots at the top right corner of the Chrome browser or using a shortcut. I prefer using shortcuts.

![Opening chrome](images/opening_developer_tool.png)

To open the Chrome console using a short cut.

```sh
Mac
Command+Option+I

Windows:
Ctl+Shift+I
```

![Opening console](images/opening_chrome_console_shortcut.png)

After you open the Google Chrome console, try to explore the marked buttons. We will spend most of the time on the Console part. The Console is the place where your JavaScript code goes. The Google Console V8 engine changes your JavaScript code to machine code.
Let us write a JavaScript code on the Google Chrome console:

![write code on console](./images/js_code_on_chrome_console.png)

#### Writing Code on browser Console

We can write any JavaScript code on the Google console or any browser console. However, for this challenge, we only focus on Google Chrome console. Open the console using:

```sh
Mac
Command+Option+I

Windows:
Ctl+Shift+I
```

##### Console.log

To write our first JavaScript code, we used a builtin function **console.log()**. We passed an argument as input data, and the function displays the output. We passed 'Hello, World' as input data or argument in the console.log() function.

```js
console.log('Hello, World!')
```

##### Console.log with multiple arguments

The console.log(param1, param2, param3), can take multiple arguments.

![console log multiple arguments](./images/console_log_multipl_arguments.png)

```js
console.log('Hello', 'World', '!')
console.log('HAPPY', 'NEW', 'YEAR', 2020)
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')
```

As you can see from the above snippet code, *console.log()* can take multiple arguments.

Congratulations! You wrote your first JavaScript code using *console.log()*.

##### Comment

We add comments to our code. Comments are very important to make code more readable and to leave remarks in our code. JavaScript does not execute the comment part of our code. Any text starts with // in JavaScript is a comment or anything enclose like this /* */ is a comment.

**Example: Single Line Comment**

 // This is the first comment  
 // This is the second comment  
 // I am a single line comment  

**Example: Multiline Comment**

  /*
  This is a multiline comment  
  Multiline comments can take multiple lines  
  JavaScript is the language of the web  
  */

##### Syntax

JavaScript is a programming language. As a result, it has its syntax like other programming languages. If we do not write a syntax that JavaScript understands, it will raise different types of errors. We will explore different kinds of JavaScript errors later. For now, let us see syntax errors.

![Error](images/raising_syntax_error.png)

I made a deliberate mistake. As a result, the console raises a syntax error. Actually, the syntax is very informative. It informs what type of mistake we made. By reading the error feedback guideline, we can correct the syntax and fix the problem. The process of identifying and removing errors from a program is called debugging. Let us fix the errors:

```js
console.log("Hello, World!")
console.log('Hello, World!')
```

So far, we saw how to display text using a *console.log()*. If we are printing text or string using *console.log()*, the text has to be under the single, double, or backtick.
**Example:**

```js
console.log("Hello, World!")
console.log('Hello, World!')
console.log(`Hello, World!`)
```

#### Arithmetics

Now, let us practice more writing JavaScript codes using *console.log()* on google chrome console for number data types.
In addition to the text, we can also do mathematical calculations using JavaScript. Let us do the following simple calculations.

![Arithmetic](images/arithmetic.png)

```js
console.log(2 + 3)   // Addition
console.log(3 - 2)   // Subtraction
console.log(2 * 3)   // Multiplication  
console.log(3 / 2)   // Division
console.log(3 % 2)   // Modulus - finding remainder
console.log(3 ** 2)  // Exponential
```

### Code Editor

We can write our codes on the browser console, but it won't be for bigger projects. In a real working environment, developers use different code editors to write their codes. In this 30 days python JavaScript challenge, we will use visual studio code.

#### Installing Visual Studio Code

Visual studio code is a very popular open-source text editor.  I would recommend to [download](https://code.visualstudio.com/) visual studio code, but if you are in favor of other editors, feel free to follow with what you have.

![Vscode](images/vscode.png)

If you installed visual studio code, let us start using it.

#### How to use visual studio code

Open the visual studio code by double-clicking the visual studio icon. When you open it, you will get this kind of interface. Try to interact with the labeled icons.

![Vscode ui](./images/vscode_ui.png)

![Vscode add project](./images/adding_project_to_vscode.png)

![Vscode open project](./images/opening_project_on_vscode.png)

![script file](images/scripts_on_vscode.png)

![running script](./images/running_script.png)

![coding running](./images/launched_on_new_tab.png)


### Adding JavaScript to a web page

JavaScript can be added to a web page in three ways:

- **_Inline script_**
- **_Internal script_**
- **_External script_**

The following sections show different ways of adding JavaScript code to your web page.

#### Inline Script

Create a folder on your desktop or in any location and create an **_index.html_** file in your folder. Then paste the following code and open it in a browser, either in [Chrome](https://www.google.com/chrome/) or [Firefox](https://www.mozilla.org/en-US/firefox/new/?v=b).

```html
<!DOCTYPE html>
  <html>
    <head>
      <title>JavaScript for Everyone</title>
    </head>
    <body>
      <button onclick="alert('Welcome to JavaScript!');">Click Me</button>
    </body>
  </html>
```

#### Internal script

Internal script can be written in the _head_ or the _body_ but it is preferred to put it on the body of the html document.

- Internal script  at the head

```html
<!DOCTYPE html>
  <html>
    <head>
      <title>JavaScript for Everyone</title>
      <script>
        console.log("Welcome to JavaScript for Everyone");
      </script>
    </head>
    <body>
  
    </body>
  </html>
```

- Internal script  at the body

```html
<!DOCTYPE html>
  <html>
    <head>
      <title>JavaScript for Everyone</title>
    </head>
    <body>
      <script>
        console.log("Welcome to JavaScript for Everyone");
      </script>
    </body>
  </html>
```

#### External script

The external script link can be on the head or body but it is preferred to put it in the body.

- External script  at the head

```html
<!DOCTYPE html>
  <html>
    <head>
      <title>JavaScript for Everyone</title>
      <script src="introduction.js"></script>
    </head>
    <body>
    </body>
    </html
```

- External script at the body

```html
<!DOCTYPE html>
  <html>
    <head>
      <title>JavaScript for Everyone</title>
    </head>
    <body>
      //it could be in the header or in the body
      // Here is the recommended place to put the script
      <script src="introduction.js"></script>
    </body>
    </html
```

### Exercises:Setting Up your machine

## Variables

Variables are _containers_ of data. Variables _store_ data in a memory location. When a variable is declared a memory location is reserved and when it is assigned to a value, the memory space will be filled. To declare a variable we use, _var_, _let_ or _const_ key words. For a variable which changes at different time we use _let_ but if the data doesn't change at all we use _const_. For example PI, country name, gravity.

- A JavaScript variable name  shouldn't begin with a number
- A JavaScript variable name does not allow special characters except dollar sign and underscore. 
- A JavaScript variable name follow a camelCase convention.
- A JavaScript variable name shouldn't have space between words. The following are valid examples of JavaScript variables.

Valid variables in JavaScript:

```js
    firstName
    lastName
    country
    city
    capitalCity
    age
    isMarried

    first_name
    last_name
    is_married
    capital_city

    num1
    num_1
    _num_1
    $num1
    year2019
    year_2019
```

Camel case(camelCase) or the first way of declaring is conventional in JavaScript. In this material, camelCase variables will be used.

Invalid variable:

```sh
  first-name
  1_num
  num_#_1
```

Declaring variables

```js
// Declaring different variables of different data types

let firstName = 'Asabeneh'; // first name of a person
let lastName = 'Yetayeh';   // last name of a person
let country = 'Finland';    // country
let city = 'Helsinki';      // capital city
let age = 100;              // age in years
let isMarried = true;
console.log(firstName, lastName, country, city, age, isMarried); // Asabeneh, Yetayeh, Finland, Helsinki, 100, True

// Declaring variables with number values

const gravity = 9.81;                    // earth gravity  in m/s2
const boilingPoint = 100;                // water boiling point, temperature in oC
const PI = 3.14;                         // geometrical constant
console.log(gravity, boilingPoint, PI);  // 9.81, 100, 3.14

// Variables can also be declaring in one line separated by comma

let name = 'Asabeneh', //name of a person
  job = 'teacher',
  live = 'Finland';
console.log(name, job, live);
```

### Exercise - 1 : Variables

1. Declare four variables without assigning values
2. Declare four variables with assigning values
3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
4. Declare variables to store your first name, last name, marital status, country and age in a single line
5. Declare two variables _myAge_ and _yourAge_ and assign them initial values and log to browser console.
   Output:

   ```sh
   I am 25 years old.
   You are 30 years old.
   ```

## Comments

Commenting in JavaScript is similar to other programming languages. Comments can help to make code more readable.
There are two ways of commenting:

- _Single line commenting_
- _Multiline commenting_

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

### Exercise: Comments

1. Write a single line comment which says, _comments can make code readable_
1. Write a multiline comment which says, _comments can make code readable, easy to use_
   _and informative_

## Data types

In the previous section, we mentioned a little bit about data types. Data or values have data types. Data types describe the characteristics of data. Data types can be divided into two

1. Primitive data types
2. Non-primitive data types(Object References)

### Primitive Data Types

Primitive data types in JavaScript includes:

 1. Numbers - Integers, floats
 2. Strings - Any data under single or double quote
 3. Booleans - true or false value
 4. Null - empty value or no value
 5. Undefined - a declared variable without a value

Non-primitive data types in JavaScript includes:

1. Objects
2. Functions
3. Arrays

Now, let us see what exactly mean primitive and non-primitive data types.
*Primitive* data types are immutable(non-modifiable) data types. Once a primitive data type is created we can not modify it.
**Example:**

```js
let word = 'JavaScript'
```

If we try to modify the string stored in variable *word*, JavaScript will raise an error. Any data type under a single quote, double-quote, or backtick is a string data type.

```js
word[0] = 'Y'
```

This expression does not change the string stored in the variable *word*. So, we can say that strings are not modifiable or immutable.
Primitive data types are compared by its values. Let us compare different data values. See the example below:

```js
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false
```

### Non-Primitive Data Types

*Non-primitive* data types are modifiable or mutable. We can modify the value of non-primitive data types after it gets created.
Let us see by creating an array. An array is a list of data values in a square bracket. Arrays can contain the same or different data types. Array values are referenced by their index. In JavaScript array index starts at zero. I.e., the first element of an array is found at index zero, the second element at index one, and the third element at index two, etc.

```js
let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]
```

As you can see, an array in which a non-primitive data type is mutable. Non-primitive data types can not be compared by value. Even if two non-primitive data types have the same properties and values, they are not strictly equal.

```js
let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false
```

Rule of thumb, we do not compare non-primitive data types. Do not compare array, function, or object.
Non-primitive values are referred to as reference types because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.

```js
let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true
```

If you have a hard time understanding the difference between primitive data types and non-primitive data types, you are not the only one. Calm down and just go to the next section and try to come back after some time. Now let us start the data types by number type.

## Numbers

Numbers are integers and decimal values which can do all the arithmetic operations.
Lets' see some examples of Numbers.

### Declaring number data types

```js
let age = 35
const gravity = 9.81  //we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI = 3.14       // pi a geometrical constant

//More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)
```

### Math Object

In JavaScript the Math Object provides a lots of methods to work with numbers.

```js
const PI = Math.PI

console.log(PI)                           // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))               // 3 to round values to the nearest number

console.log(Math.round(9.81))             // 10

console.log(Math.floor(PI))               // 3 rounding down

console.log(Math.ceil(PI))                // 4 rounding up

console.log(Math.min(-5, 3, 20, 4,5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4,5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      //10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))      //1.4142135623730951

// Power
console.log(Math.pow(3, 2)) // 9

console.log(Math.E) // 2.718

// Logarithm
//Returns the natural logarithm of base E of x, Math.log(x)
console.log(Math.log(2))    // 0.6931471805599453
console.log(Math.log(10))   // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)
```

#### Random number generator

The JavaScript Math Object has a random() method number generator which generates number from 0 to 0.999999999...

```js
let randomNum = Math.random() // generates 0 to 0.999
```

Now, let us see how we can use random() method to generate a random number between 0 and 10 inclusive.

```js
let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10
```

## Strings

Strings are texts, which are under **_single_** or **_double_** quote. To declare a string, we need a variable name, assignment operator, a value under a single quote, double-quote, or backtick.
Lets' see some examples of string:

```js
let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
```

### String Concatenation

Connect two or more strings together is called concatenation.

```js
// Declaring different variables of different data types
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
```

```js
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);
```

```sh
Asabeneh Yetayeh
```

We can concatenate string in different ways.

#### Concatenating using addition operator

Concatenating using the addition operator is an old way. This way of concatenating is tedious and error-prone. It is good to know how to concatenate this way, but I strongly suggest to use the second way.

```js
// Declaring different variables of different data types
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + space + lastName

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5

console.log(personInfoOne)
```

```sh
Asabeneh Yetayeh. I am 250. I live in Finland
```

#### Long Literal Strings

A string could be a single character or paragraph or a page. If the string length is too big it does not fit in one line. We can use the backslash character (\\) at the end of each line to indicate that the string will continue on the next line.
**Example:**

```js
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph)
```

#### Escape Sequences in string

In JavaScript and other programming language \ followed by some characters is  an escape sequence. Let's see the most common escape characters:

- \n: new line
- \t: Tab means(8 spaces)
- \\\\: Back slash
- \\': Single quote (')
- \\":Double quote (")
  
```js
console.log('I hope every one is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a back slash  symbol (\\)') // To write a back slash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' is\'t correct in 2020')
```

#### Template Literals(Template Strings)

To create a template string, we use two backticks. We can inject data as expression inside a template string. To inject data, we enclose the expression with a curly bracket({}) followed by a $ sign. See the syntax below.

```js
//Syntax
`String literal text`
`String literal text ${expression}`
```

**Example: 1**

```js
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
```

**Example:2**

```js
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)
```

```sh
I am Asabeneh Yetayeh. I am 250. I live in Finland.
I am Asabeneh Yetayeh. I live in Helsinki, Finland. I am a teacher. I teach JavaScript.
```

Using a string template or string interpolation method, we can add expression, which could be a value or some operations(comparison, arithmetic operations, ternary operation).

```js
let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)
```

```sh
2 is greater than 3: false
```

### String Methods

Everything in JavaScript is an object. A string is a primitive data type that means we can not modify once it is created. The string object has many string methods. There are different string methods that can help us to work with strings.

1. *length*: The string *length* method returns the number of characters in a string included empty space.
  **Example:**

   ```js
   let js = 'JavaScript'
   console.log(js.length)         // 10
   let firstName = 'Asabeneh'
   console.log(firstName.length)  // 8
   ```

2. *Accessing characters in a string*: We can access each character in a string using its index. In programming, counting starts from 0. The first index of the string is zero, and the last index is one minus the length of the string.

  ![Accessing sting by index](./images/string_indexes.png)
  
Let us access different characters in 'JavaScript' string.

```js
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t
```

3. *toUpperCase()*: this method changes the string to uppercase letters.

```js
let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let firstName = 'Asabeneh'

console.log(firstName.toUpperCase())  // ASABENEH

let country = 'Finland'

console.log(country.toUpperCase())    // FINLAND
```

4. *toLowerCase()*: this method changes the string to lowercase letters.

```js
let string = 'JavasCript'

console.log(string.toLowerCase())     // javascript

let firstName = 'Asabeneh'

console.log(firstName.toLowerCase())  // asabeneh

let country = 'Finland'

console.log(country.toLowerCase())   // finland
```

5. *substr()*: It takes two arguments, the starting index and number of characters to slice.

```js
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let country = 'Finland'
console.log(country.substr(3, 4))   // land
```

6. *substring()*: It takes two arguments, the starting index and the stopping index but it doesn't include the stopping index.

```js
let string = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let country = 'Finland'

console.log(country.substring(0, 3))   // Fin
console.log(country.substring(3, 7))   // land
console.log(country.substring(3))      // land
```

7. *split()*: The split method splits a string at a specified place.

```js
let string = '30 Days Of JavaScript'

console.log(string.split())     // ["30 Days Of JavaScript"]
console.log(string.split(' '))  // ["30", "Days", "Of", "JavaScript"]

let firstName = 'Asabeneh'

console.log(firstName.split())    // ["Asabeneh"]
console.log(firstName.split(''))  // ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
```

8. *trim()*: Removes trailing space in the beginning or the end of a string.

```js
let string = '   30 Days Of JavaScript   '

console.log(string)     
console.log(string.trim(' '))

let firstName = ' Asabeneh '

console.log(firstName)
console.log(firstName.trim())
```

```sh
   30 Days Of JavasCript   
30 Days Of JavasCript
  Asabeneh 
Asabeneh
```

9. *includes()*: It takes a substring argument and it check if substring argument exists in the string. *includes()* returns a boolean. It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.

```js
let string = '30 Days Of JavaScript'

console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let country = 'Finland'

console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false
```

10. *replace()*: takes to parameter the old substring and new substring.

```js
string.replace(oldsubstring, newsubstring)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

let country = 'Finland'
console.log(country.replace('Fin', 'Noman'))       // Nomanland
```

11. *charAt()*: Takes index and it returns the value at that index

```js
string.charAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charAt(0))        // 3

let lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // t
```

12. *charCodeAt()*: Takes index and it returns char code(ASCII number) of the value at that index

```js
string.charCodeAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3))        // D ASCII number is 51

let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116

```

13.  *indexOf()*: Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

```js
string.indexOf(substring)
```

```js
let string = '30 Days Of JavaScript'

console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1
```

14.  *lastIndexOf()*: Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1

```js
//syntax
string.lastIndexOf(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('you'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38
```

15. *concat()*: it takes many substrings and creates concatenation.

```js
string.concat(substring, substring, substring)
```

```js
let string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let country = 'Fin'
console.log(country.concat("land")) // Finland
```

16. *startsWith*: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).

```js
//syntax
string.startsWith(substring)
```

```js
let string = 'Love is the best to in this world'

console.log(string.startsWith('Love'))   // true
console.log(string.startsWith('love'))   // false
console.log(string.startsWith('world'))  // false

let country = 'Finland'

console.log(country.startsWith('Fin'))   // true
console.log(country.startsWith('fin'))   // false
console.log(country.startsWith('land'))  //  false
```

17. *endsWith*: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).

```js
string.endsWith(substring)
```

```js
let string = 'Love is the best to in this world'

console.log(string.endsWith('world'))         // true
console.log(string.endsWith('love'))          // false
console.log(string.endsWith('in this world')) // true

let country = 'Finland'

console.log(country.endsWith('land'))         // true
console.log(country.endsWith('fin'))          // false
console.log(country.endsWith('Fin'))          //  false
```

18. *search*: it takes a substring as an argument and it returns the index of the first match.

```js
string.search(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love')) // 2
```

19. *match*: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.

```js
let string = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
```

Match syntax

```js
// syntax
string.match(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))
```

```sh
["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
```

```js
let pattern = /love/gi
console.log(string.match(pattern))   // ["love", "love", "love"]
```

Let us extract numbers from text using regular expression. This is not regular expression section, no panic, we will cover regular expression in other section.

```js
let txt = 'In 2019, I run 30 Days of Python. Now, in 2020 I super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
```

20.   *repeat()*: it takes a number argument and it returned the repeated version of the string.

```js
string.repeat(n)
```

```js
let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
```

## Checking Data types and Casting

### Checking data types

- Check Data types: To check the data type of a certain data type we use the _typeof_ and we also change one data type to another.
  **Example:**

```js
// Different javascript data types
// Let's declare different data types

let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object
```

### Changing data type(Casting)

- Casting: Converting one data type to another data type. We use _parseInt()_, _parseFloat()_, _Number()_, _+ sign_, _str()_
  When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.

#### String to Int

We can convert string number to a number. Any number inside a quote is a string number.  An example of a string number: '10', '5', etc.
We can convert string to number using the following methods:

- parseInt()
- Number()
- Plus sign(+)

```js
let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10
```

```js
let num = '10'
let numInt = Number(num)

console.log(numInt) // 10
```

```js
let num = '10'
let numInt = +num

console.log(numInt) // 10
```

#### String to Float

We can convert string float number to a float number. Any  float number inside a quote is a string float number.  An example of a string float number: '9.81', '3.14', '1.44', etc.
We can convert string float to number using the following methods:

- parseFloat()
- Number()
- Plus sign(+)

```js
let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = Number(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = +num

console.log(numInt) // 9.81
```

#### Float to Int

We can convert float numbers to integers.
We use the following method to convert float to int:

- parseInt()
  
```js
let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9
```


### Exercises: Data Types

1. Declare variables and assign string, boolean, undefined and null data types
1. The JavaScript ***typeof*** operator uses to check different data types. Check the data type of each variables from question number 1.

#### Exercise: String

1. Declare a variable name company and assign it to an initial value **'Coding Academy'**.
1. Print the string on the browser console using __console.log()__
1. Print the __length__ of the string on the browser console using _console.log()_
1. Change all the string to capital letters using __toUpperCase()__ method
1. Change all the string to lowercase letters using __toLowerCase()__ method
1. Cut(slice) out the first word of the string using __slice__, __substr()__ or __substring()__ method
1. Use __substr__ to slice out the phase __because because because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
1. Check if the string contains a word __Academy__ using __includes()__ method
1. Split the __string__ into __array__ using __split()__ method
1. Split the string Coding Academy at the space using __split()__ method
1. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.
1. Change Coding Academy to Microsoft Academy using __replace()__ method.
1. What is character at index 10 in 'Coding Academy' string use __charAt()__ method.
1. What is the character code of A in 'Coding Academy' string using __charCodeAt()__
1. Use __indexOf__ to determine the position of the first occurrence of c in Coding Academy
1. Use __lastIndexOf__ to determine the position of the last occurrence of c in Coding Academy.
1. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
1. Use __lastIndexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
1. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
1. Use __trim()__ to remove if there is trailing whitespace at the beginning and the end of a string.E.g ' Coding Academy '.
1. Use __startsWith()__ method with the string Coding Academy make the result true
1. Use __endsWith()__ method with the string Coding Academy make the result true
1. Use __match()__ method to find all the c’s in Coding Academy
1. Use __match()__ to count the number all because's in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
1. Use __concat()__ and merge 'Coding' and 'Academy' to a single string, 'Coding Academy'
1. Use __repeat()__ method to print Coding Academy 5 times
1. Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

### Booleans

Boolean value is either true or false. Any comparisons return a boolean value which is either true or false.

```js
let isLightOn = true;
let isRaining = false;
let hungry = false;
let isMarried = true;
```

#### Exercise: Booleans

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

### Exercise - 6 : Data types

String, number, boolean, null, undefined and symbol(ES6) are JavaScript primitive data types.

1. The JavaScript *typeof* operator uses to check different data types. Check the data type of each variables from question number 1.

## Operators

### Arithmetic Operators

Arithmetic operators are mathematical operators:+, -, _, /, _

```js
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;

console.log(sum, diff, mult, div, remainder); // ->7,1,12,1.33,1

let PI = 3.14;
let radius = 100;          // length in meter

const gravity = 9.81;      // in m/s2
let mass = 72;             // in Kilogram
const boilingPoint = 100;  // temperature in oC, boiling point of water
const bodyTemp = 37;       // body temperature in oC

// Lets calculate area of a circle

const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle); // -> 314 m

// Lets calculate weight of a substance
const weight = mass * gravity;
console.log(weight); // -> 706.32 N(Newton)

// ConcatEnating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${body} oC.\nThe gravity of earth is ${gravity} m / s2.`
);
```

### Exercises : Arithmetic Operators

JavaScript arithmetic operators are addition(+), subtraction(-), multiplication(\*), division(/), modulus(%), increment(++) and decrement(--).

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
// && ampersand example

const check = 4 > 3 && 10 > 5; // true and true -> true
const check = 4 > 3 && 10 < 5; // true and false -> false
const check = 4 < 3 && 10 < 5; // false and false -> false

// || pipe or, example

const check = 4 > 3 || 10 > 5; // true and true -> true
const check = 4 > 3 || 10 < 5; // true and false -> true
const check = 4 < 3 || 10 < 5; // false and false -> false

// ! Negation examples

let check = 4 > 3;           // -> true
let check = !(4 > 3);        // -> false
let isLightOn = true;        // -> true
let isLightOff = !isLightOn; // -> false
let isMarried = !false;      // -> true
```

### Exercises: Logical Operators

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
4 < 3;
4 <= 3;
4 != 3;
4 !== '4';
4 == '4';
4 === '4';
4 === 4;
```

### Exercise: Comparison Operators

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

### if

We use if condition to check only on condition.

```js
if (condition) {
  // code goes here
}

let isRaining = true;
if (isRaining) {
  console.log('Remember to take your rain coat.');
}
```

### if else

When we have more than one condition we use the if and else condition.

```js
if (condition) {
  // if the condition meets, this block of code runs
} else {
  // if condition doesn't meet, this block code runs
}

let isRaining = true;
if (isRaining) {
  console.log('You need a rain coat.');
} else {
  console.log('No need for a rain coat.');
}
```

### if else if else

Whenever we have multiple conditions.

```js
// if else if else
let weather = 'sunny';
if (weather === 'rainy') {
  console.log('You need a rain coat.');
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.');
} else if (weather === 'sunny') {
  console.log('Go out freely.');
} else {
  console.log('No need for rain coat.');
}
```

### switch

Switch an alternative for if else if else

```js
var weather = 'cloudy';
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.');
    break;
  case 'cloudy':
    console.log('It might be cold, you need a jacket.');
    break;
  case 'sunny':
    console.log('Go out freely.');
    break;
  default:
    console.log(' No need for rain coat.');
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

### Ternary Operators

Another way to write conditionals is using ternary operators.

```js
let isRaining = true;
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.');
```

### Exercise: Conditionals

1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for.
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

1. Compare the values of myAge and yourAge using if … else. Based on the comparison log to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
   Output:
  
   ```sh
   Enter your age: 30
   You are 5 years older than me.
   ```

1. If a is greater than b return a is greater than b else a is less than b.
   Output:

   ```sh
    let a = 4
    let b = 3
    4 is greater than 3
    ```
  
1. Write a code which give grade students according to theirs scores:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0 -49, F
1. Check if the season is Autumn, Winter, Spring or Summer.
   If the user input is:
   - September, October or November, the season is Autumn.
   - December, January or February, the season is Winter.
   - March, April or May, the season is Spring
   - June, July or August, the season is Summer

## Loops

In programming languages to carry out repetitive task we use different kinds of loop. The following examples are the commonly used loops.

### For Loop

```js
// for loop structure
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
while (i <= 5) {
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
} while (i <= 5);
```

### Exercises:Loops

1. Iterate 0 to 10 using for loop, do the same using while and do while loop.
1. Iterate 10 to 0 using for loop, do the same using while and do while loop.
1. Write a loop that makes seven calls to console.log to output the following triangle:

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```

1. Iterate the array, ['HTML', 'CSS', 'JavaScript'] using a for loop and print out the items.
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

In contrast to variables array can store _multiple values_. Each value in an array has an _index_ and each index has _a reference in a memory address_. Each value can be accessed by using their _indexes_. The index of an array starts from _zero_ and the last element is less by one from the length of the array.

```js
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // set of numbers

console.log(numbers.length) // => to know the size of the array, which is 6
console.log(numbers)        // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0])     //  -> 0
console.log(numbers[5])     //  -> 100

let lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]) -> 100
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]; // List of web technologies

console.log(webTechs)        // all the array items
console.log(webTechs.length) // => to know the size of the array, which is 7
console.log(webTechs[0])     //  -> HTML
console.log(webTechs[6])     //  -> MongoDB

let lastIndex = webTechs.length - 1;
console.log(webTechs[lastIndex]) -> MongoDB
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]; // List of countries;

console.log(countries)     // -> all countries in array
console.log(countries[0])  //  -> Albania
console.log(countries[10]) //  -> Kenya

let lastIndex = countries.length - 1;
console.log(countries[lastIndex]) -> // Kenya

const shoppingCart = [
  'Milk',
  'Mango',
  'Tomato',
  'Potato',
  'Avocado',
  'Meat',
  'Eggs',
  'Sugar'
]; // List of food products

console.log(shoppingCart)     // -> all shoppingCart in array
console.log(shoppingCart[0])  //  -> Milk
console.log(shoppingCart[7])  //  -> Sugar

let lastIndex = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex]) -> // Sugar
```

### Exercise : Arrays

1. Declare an _empty_ array;
1. Declare an array with more than 5 number of items
1. Find the length of your array
1. Get the first item, the middle item and the last item of the array
1. Declare an array called _mixedDataTypes_,put different data types and in your array and the array size should be greater than 5
1. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
1. Print the array using _console.log()_
1. Print the number of companies in the array
1. Print the first company, middle and last company
1. Print out each company
1. Change companies to uppercase and print them out
1. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
1. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_.
1. Filter out companies which have more than one 'o' without the filter method
1. Sort the array using _sort()_ method
1. Reverse the array without _reverse_ method
1. Reverse the array using _reverse()_ method
1. Slice out the first 3 companies from the array
1. Slice out the last 3 companies from the array
1. Slice out the middle IT company or companies from the array
1. Remove the first IT company from the array
1. Remove the middle IT company or companies from the array
1. Remove the last IT company from the array
1. Remove all IT companies

## More on Arrays

There are different methods to manipulate an array. These are some of the available methods to deal with arrays:_Array,length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift_
Array:To create an array.

```js
const arr = Array(); // creates an an empty array
console.log(arr);

const eightEmptyValues = Array(8); // it creates eight empty values
console.log(eightEmptyValues);     // [empty x 8]
```

- *fill*: Fill all the array elements with a static value

```js
const arr = Array();                     // creates an an empty array
console.log(arr);
const eightXvalues = Array(8).fill('X'); // it creates eight element values
console.log(eightXvalues);               // ['X', 'X','X','X','X','X','X','X']
```

- *concat*: To concatenate two arrays.

```js
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList); // [1,2,3,4,5,6]
```

- *length*: To know the size of the array

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // -> 5
```

- *indexOf*: To check if an item exist in an array. If it exist it returns the index else it returns -1.

```js
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.indexOf(5));  // -> 4
console.log(numbers.indexOf(0));  // -> -1
console.log(numbers.indexOf(1));  // -> 0
console.log(numbers.indexOf(6));  // -> -1
```

- *lastIndexOf* :Give the position of the last item in the array. If it exist it returns the index else it returns -1.

```js
const numbers = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbers.lastIndexOf(2));  // -> 7
console.log(numbers.lastIndexOf(0));  // -> -1
console.log(numbers.lastIndexOf(1));  // -> 6
console.log(numbers.lastIndexOf(4));  // -> 3
console.log(numbers.lastIndexOf(6));  // -> -1
```

*includes*: To check if an item exist in an array. If it exist it returns the true else it returns false.

```js
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(5)); // -> true
console.log(numbers.includes(0)); // -> false
console.log(numbers.includes(1)); // -> true
console.log(numbers.includes(6)); // -> false
```

- *isArray*:  To check if the data type is an array

```js
const numbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers)); // -> true

const number = 100;
console.log(Array.isArray(number)); // -> false
```

- *toString*: Converts array to string

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString()); // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook
```

join:To join the elements of the array, the argument passed in the join method will be joined in the array and return as a string.

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.join());        // 1,2,3,4,5
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
console.log(names.join());          // Asabeneh,Mathias,Elias,Brook
console.log(names.join(''));        //AsabenehMathiasEliasBrook
console.log(names.join(' '));       //Asabeneh Mathias Elias Brook
console.log(names.join(', '));      //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # '));     //Asabeneh # Mathias # Elias # Brook
```

Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position

```js
  const numbers = [1,2,3,4,5];
  console.log(numbers.slice()        // -> it copies all  item
  console.log(numbers.slice(0)       // -> it copies all  item
  console.log(numbers.indexOf(0, numbers.length)) // it copies all  item
  console.log(numbers.slice(1,4))    // -> [2,3,4] // it doesn't include the ending position
```

Splice: It takes three parameters:Starting position, number of times to be removed and number items to be added.

```js
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.splice()      // -> remove all items
  console.log(numbers.splice(0,1))  // remove the first item
  console.log(numbers.splice(3, 3, 6, 7, 8)) // -> [1,2,6,7,8] //it removes two item and replace three items

```

- *push*: adding item in the end

```js
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);  // -> [1,2,3,4,5,6]

numbers.pop();         // -> remove one item from the end
console.log(numbers);  // -> [1,2,3,4,5]
```

- *pop*: Removing item in the end

```js
const numbers = [1, 2, 3, 4, 5];
numbers.pop(); // -> remove one item from the end

console.log(numbers); // -> [1,2,3,4]
```

- *shift*: Removing item in the beginning

```js
const numbers = [1, 2, 3, 4, 5];
numbers.shift(); // -> remove one item from the beginning

console.log(numbers); // -> [2,3,4,5]
```

- *unshift*: Adding item in the beginning

```js
const numbers = [1, 2, 3, 4, 5];
numbers.unshift(0);             // -> remove one item from the beginning
console.log(numbers);           // -> [0,1,2,3,4,5]
```

---

### Exercise -10 : Array Methods

```js
const shoppingCart = ['Milk','Coffee','Tea', 'Honey'];
const todoList = [
  {
    task:'Learn JavaScript',
    time:'4/3/2019 8:30',
    completed:true
  },
  {
    task:'Help some in need',
    time:'4/3/2019 4:00',
    completed:false
  },
  {
    task:'Do some physical exercises',
    time:'4/3/2019 6:00',
    completed:false
  }
]
```

## Functions

A function is a block of code designed to perform a certain task.
A function is declared by a function key word followed by a name, followed by parentheses (). A parentheses can take a parameter. If a function take a parameter it will be called with argument. A function can also take a default parameter.
A function can be declared or created in couple of ways:

- _Declaration function_
- _Expression function_
- _Anonymous function_
- _Arrow function_

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
  //code goes her
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
  //code goes her
}
functionName(parm1,parm2); // during calling or invoking two arguments needed

// Function without parameter doesn't take input, so lets make a parameter with parameter
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
console.log(printFullName('Asabeneh', 'Yetayeh'));
console.log(printFullName('Dean', 'Phan'));

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
  

const areaOfCircle = (radius) => {
      let area = Math.PI * radius * radius;
      return area;
    }
console.log(areaOfCircle(10))
```

### Function Expression

```js
//Declaration function
function square(n) {
  return n * n;
}
console.log(square(2)); // -> 4
// Function expression
const square = function(n) {
  return n * n;
};
console.log(square(2)); // -> 4
```

### Anonymous Function

```js
// Self invoking functions
(function(n) {
  return n * n;
})(2);

const x = (function(n) {
  return n * n;
})(2);
console.log(x) // 4

```

### Arrow Function

```js
const square = n => {
  return n * n;
};
console.log(square(2)); // -> 4

// if we have only one line, it can be written as follows
// Explicit return
const square = n => n * n; // -> 4
```

### Arrow Function vs Declaration Function

Arrow function and regular functions are not exactly the same.

```js

```

### Exercise - 10 : Functions

1. Declare a function _fullName_ and it print out your full name.
1. Declare a function _fullName_ and now it takes firstName, lastName as a parameter and it returns your full - name.
1. Declare a function _addNumbers_ and it takes two two parameters and it returns sum.
1. An area of a rectangle is calculated as follows: _area = length x width_. Write a function which calculates _areaOfRectangle_.
1. A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_. Write a function which calculates _perimeterOfRectangle_.
1. A volume of a rectangular prism is calculated as follows: _volume = length x width x height_. Write a function which calculates _volumeOfRectPrism_.
1. Area of a circle is calculated as follows: _area = π x r x r_. Write a function which calculates _areaOfCircle_
1. Circumference of a circle is calculated as follows: _circumference = 2πr_. Write a function which calculates _circumOfCircle_
1. Density of a substance is calculated as follows:_density= mass/volume_. Write a function which calculates _density_.
1. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, _speed_.
1. Weight of a substance is calculated as follows: _weight = mass x gravity_. Write a function which calculates _weight_.
1. Temperature in oC can be converted to oF using this formula: _oF = (oC x 9/5) + 32_. Write a function which convert oC to oF _convertCelciusToFahrenheit_.
1. Body mass index(BMI) is calculated as follows: _bmi = weight in Kg / (height x height) in m2_. Write a function which calculates _bmi_. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is _underweight, normal, overweight_ or _obese_ based the information given below.
   - The same groups apply to both men and women.
   - _Underweight_: BMI is less than 18.5
   - _Normal weight_: BMI is 18.5 to 24.9
   - _Overweight_: BMI is 25 to 29.9
   - _Obese_: BMI is 30 or more
1. Write a function called _checkSeason_, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
1. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

   ```js
   console.log(findMax(0, 10, 5));
   10;
   console.log(findMax(0, -10, -2));
   0;
   ```

1. Linear equation is calculated as follows: _ax + b = c_. Write a function which calculates value of a linear equation, _solveLinEquation_.
1. Quadratic equation is calculated as follows: _ax2 + bx + c = 0_. Write a function which calculates value or values of a quadratic equation, _solveQuadEquation_.
1. Declare a function name _printArray_. It takes array as a parameter and it prints out each value of the array.
1. Declare a function name _swapValues_. This function swaps value of x to y.

   ```js
   swapValues(3, 4); // x => 4, y=>3
   swapValues(4, 5); // x = 5, y = 4
   ```

1. Declare a function name _reverseArray_. It takes array as a parameter and it returns the reverse of the array (don't use method).

   ```js
   console.log(reverseArray([1, 2, 3, 4, 5]));
   [5, 4, 3, 2, 1];
   console.log(reverseArray(['A', 'B', 'C']));
   ['C', 'B', 'A'];
   ```

1. Declare a function name _capitalizeArray_. It takes array as a parameter and it returns the - capitalizedarray.
1. Declare a function name _addItem_. It takes an item parameter and it returns an array after adding the item
1. Declare a function name _removeItem_. It takes an index parameter and it returns an array after removing an item
1. Declare a function name _sumOfNumbers_. It takes a number parameter and it adds all the numbers in that range.
1. Declare a function name _sumOfOdds_. It takes a number parameter and it adds all the odd numbers in that - range.
1. Declare a function name _sumOfEven_. It takes a number parameter and it adds all the even numbers in that - range.
1. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

   ```sh
   evensAndOdds(100);
   The number of odds are 50.
   The number of evens are 51.
   ```

1. Write a function which takes any number of arguments and return the sum of the arguments

   ```js
   sum(1, 2, 3); // -> 6
   sum(1, 2, 3, 4); // -> 10
   ```

1. Writ a function which generates a _randomUserIp_.
1. Write a function which generates a _randomMacAddress_
1. Declare a function name _randomHexaNumberGenerator_. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

   ```sh
   console.log(randomHexaNumberGenerator());
   '#ee33df'
   ```
  
1. Declare a function name _userIdGenerator_. When this function is called it generates seven character id. The function return the id.

   ```sh
   console.log(userIdGenerator());
   41XTDbE
   ```

1. Modify question number n . Declare a function name _userIdGeneratedByUser_. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

   ```sh
   userIdGeneratedByUser()
   'kcsy2
   SMFYb
   bWmeq
   ZXOYh
   2Rgxf
   '
   userIdGeneratedByUser()
   '1GCSgPLMaBAVQZ26
   YD7eFwNQKNs7qXaT
   ycArC5yrRupyG00S
   UbGxOFI7UXSWAyKN
   dIV0SSUTgAdKwStr
   '
   ```

1. Write a function name _rgbColorGenerator_ and it generates rgb colors.

   ```sh
   rgbColorGenerator()
   rgb(125,244,255)
   ```

1. Write a function ***arrayOfHexaColors*** which return any number of hexadecimal colors in an array.
1. Write a function ***arrayOfRgbColors*** which return any number of RGB colors in an array.
1. Write a function ***convertHexaToRgb*** which converts hexa color to rgb and it returns an rgb color.
1. Write a function ***convertRgbToHexa*** which converts rgb to hexa color  and it returns an hexa color.
1. Write a function ***generateColors*** which can generate any number of hexa or rgb colors.

    ```js
      generateColors('hexa', 3)
      ['#a3e12f','#03ed55','#eb3d2b']
      generateColors('hexa', 1)
      '#b334ef'

      generateColors('rgb', 3)
      ['rgb(5, 55, 175','rgb(50, 105, 100','rgb(15, 26, 80']
      generateColors('rgb', 1)
      'rgb(33,79, 176)'
    ```

1. Call your function _shuffleArray_, it takes an array as a parameter and it returns a shuffled array
1. Call your function _factorial_, it takes a whole number as a parameter and it return a factorial of the number
1. Call your function _isEmpty_, it takes a parameter and it checks if it is empty or not
1. Call your function _sum_, it takes any number of arguments and it returns the sum.
1. Write a function called _sumOfArrayItems_, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
1. Write a function called _average_, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
1. Write a function called _modifyArray_ takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

    ```js
    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
    // →['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
    // →['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
    // →'Not Found'
    ```

1. Write a function called *isPrime*, which checks if a number is prime number.
1. Write a functions which checks if all items are unique in the array.
1. Write a function which checks if all the items of the array are the same data type.
1. JavaScript variable name does not support special characters or symbols except $ or _. Write a function ***isValidVariable** which check if a variable is valid or invalid variable.
1. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

   ```js
   sevenRandomNumbers()[(1, 4, 5, 7, 9, 8, 0)];
   ```

## Object

Everything can be an object and objects do have properties and properties have values.
Creating an object literal. To create an object literal, we use two curly brackets.
An empty object

```js
const person = {};
```

Now, the person object has firstName, lastName, age, location, skills and getFullName properties. The getFullName is function inside the person object and we call it method. The _this_ key word refers to the object itself.Example of object:

```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 100,
  location: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName}${this.lastName}`;
  }
};

const rectangle = {
  length: 20,
  width: 20,
  getArea: function() {
    return this.length * this.width;
  },
  getPerimeter: function() {
    return 2 * (this.length + this.width);
  }
};
```

Getting values from an object:

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
  console.log(person.firstName);
  console.log(person.lastName);
  console.log(person.getFullName());
  // value can be accessed
  console.log(person['age');
  console.log(person['location']);
```

Setting a new keys in an object

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
  console.log(person)
```

### Object Methods

_Object.assign_: To copy an object without modifying the original object

```js
const person = {
  name: 'Asabeneh',
  age: 200,
  country: 'Finland',
  skills: ['HTML', 'CSS', 'JS'],
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.name} and I live in ${this.country}. I am ${this.age}.`;
  }
};

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person);
console.log(copyPerson);
```

_Object.keys_: To get keys of an objet as an array

```js
const keys = Object.keys(copyPerson);
console.log(keys); //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address);
console.log(address); //['street', 'pobox', 'city']
```

_Object.values_:To get values of an object as an array

```js
const values = Object.values(copyPerson);
console.log(values);
```

_Object.entries_:To get the keys and values in an array

```js
const entries = Object.entries(copyPerson);
console.log(entries);
```

_hasOwnProperty_: To check if a specific key or property exist in an object

```js
console.log(copyPerson.hasOwnProperty('name'));
console.log(copyPerson.hasOwnProperty('score'));
```

### Date Object

In JavaScript current time and date is created using JavaScript Date Object.
Some of the methods to extract date object values:*getFullYear(), getMonths(), getDate(), getDay(), getHours(), getMinutes*

```js
const now = new Date ();
const year = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes();// return number (0 -59)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
```

#### Exercises: Date Object

1. Use the new Date() object to get _month, date, year, hour_ and _minute_.
1. Write a function name _displayDateTime_ which display time in this format: 10/03/2019 04:08

   ```sh
   displayDateTime()
   10/03/2019 04:08
   ```

### Exercises:Objects

1. Create an empty object called dog
1. Print the the dog object on the console
1. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return *woof woof*
1. Get name, legs, color, age and bark value from the dog object
1. Set new properties the dog object: breed, getDogInfo
1. Create an object literal called _personAccount_. It has _firstName, lastName, incomes, expenses_ properties and it has _totalIncome, totalExpense, accountInfo,addIncome, addExpense_ and _accountBalance_ methods. Incomes is a set of incomes and its description and the same for expenses.
1. Count logged in users,count users having greater than equal to 50 points from the following object.

      ```js
      const users = {
        Alex: {
          email: 'alex@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript'],
          age: 20,
          isLoggedIn: false,
          points: 30
        },
        Asab: {
          email: 'asab@asab.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
          age: 25,
          isLoggedIn: false,
          points: 50
        },
        Brook: {
          email: 'daniel@daniel.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
          age: 30,
          isLoggedIn: true,
          points: 50
        },
        Daniel: {
          email: 'daniel@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        John: {
          email: 'john@john.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
          age: 20,
          isLoggedIn: true,
          point: 50
        },
        Thomas: {
          email: 'thomas@thomas.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React'],
          age: 20,
          isLoggedIn: false,
          points: 40
        }
      };
    ```

1. Set your name in the users object without modifying the original users object
1. Get all keys or properties of users object
1. Get all the values of users object
1. ** Develop a small JavaScript library.

## JSON

JSON stands for JavaScript Object Notation. The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text or string only. JSON is a light weight data format for storing and transporting. JSON is mostly used when data is sent from a server to a client. JSON is an easier-to-use alternative to XML.

**Example:**

```js
{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}
```

The above JSON example is not much different for a normal object. Then, what is the difference ? The difference is the key of a JSON object should be with double quotes or it should be a string. JavaScript Object and JSON are very similar that we can change JSON to Object and Object to JSON.

Let us see the above example in more detail, it starts with a curly bracket. Inside the curly bracket, there is "users" key which has a value array. Inside the array we have different objects and each objects has keys, each keys has to have double quotes. For instance, we use "firstNaMe" instead of just firstName, however in object we use keys without double quotes. This is the major difference between an object and a JSON. Let's see more examples about JSON.

**Example:**

```js
{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
```

### Converting JSON to JavaScript Object

Mostly we fetch JSON data from HTTP response or from a file, but we can store the JSON as a string and we can change to Object for sake of demonstration. In JavaScript the keyword _JSON_ has _parse()_ and _stringify()_ methods. When we want to change the JSON to an object we parse the JSON using _JSON.parse()_. When we want to change the object to JSON we use _JSON.stringify()_.

#### JSON.parse()

```js
JSON.parse(json[, reviver])
// json or text , the data
// reviver is an optional callback function
```

```js
const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const usersObj = JSON.parse(usersText, undefined, 4)
console.log(usersObj)
```

### Using a reviver function with JSON.parse()

To use the reviver function as a formatter, we put the keys we want to format first name and last name value. Let us say, we are interested to format the firstName and lastName of the JSON data .

```js
const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const usersObj = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
  return newValue
})
console.log(usersObj)
```

The _JSON.parse()_ is very handy to use. You do not have to pass optional parameter, you can just use it with the required parameter and you will achieve quite a lot.

### Converting Object to JSON

When we want to change the object to JSON we use _JSON.stringify()_. The stringify method takes one required parameter and two optional parameters. The replacer is used as filter and the space is an indentations. If we do not want to filter out any of the keys from the object we can just pass undefined.

```js
JSON.stringify(obj, replacer, space)
// json or text , the data
// reviver is an optional callback function
```

Let us convert the following object to a string. First let use keep all the keys and also let us have 4 space indentation.

```js
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const txt = JSON.stringify(users, undefined, 4)
console.log(txt) // text means JSON- because json is a string form of an object.
```

```sh
{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
```

### Using a Filter Array with JSON.stringify

Now, lets use the replacer as a filter. The user object has long list of keys but we are interested only in few of them. We put the keys we want to keep in array as show in the example and use it the place of the replacer.

```js
const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  country: 'Finland',
  city: 'Helsinki',
  email: 'alex@alex.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Pyhton'],
  age: 250,
  isLoggedIn: false,
  points: 30
}

const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
console.log(txt)
```

```sh
{
    "firstName": "Asabeneh",
    "lastName": "Yetayeh",
    "country": "Finland",
    "city": "Helsinki",
    "age": 250
}
```

### Exercises

```js
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
```

### Exercises Level 1

1. Change skills array to JSON using JSON.stringify()
1. Stringify the age variable
1. Stringify the isMarried variable
1. Stringify the student object

### Exercises Level 2

1. Stringify the students object with only firstName, lastName and skills properties


## Higher Order Function

Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

### Callback

A callback is a function which can be passed as parameter to other function. See the example below.

```js
// a callback function, the function could be any name
const callback = (n) => {
  return n ** 2
}
​
// function take other function as a callback
function cube(callback, n) {
  return callback(n) * n
}
​
console.log(cube(callback, 3))
```

### Returning function

Higher order functions return function as a value
​

```js
// Higher order function returning an other function
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
​
  return doSomething
}
console.log(higherOrder(2)(3)(10))
```

Let us see were we use call back functions.For instance the _forEach_ method uses call back.

```js
const numbers = [1, 2, 3, 4]
​
const sumArray = arr => {
  let sum = 0
  const callBack = function(element) {
    sum += element
  }
  numbers.forEach(callback)
  return sum

}
console.log(sumArray(numbers))
```

```sh
15
```

The above example can be simplified as follows:

```js
const numbers = [1, 2, 3, 4]
​
const sumArray = arr => {
  let sum = 0
  numbers.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))
```

```sh
15
```

### setting time

In JavaScript we can execute some activity on certain interval of time or we can schedule(wait) for sometime to execute some activities.

- setInterval
- setTimeout

#### setInterval

In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

```js
// syntax
function callBack() {
  // code goes here
}
setInterval(callback, duration)
```

```js
function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 2000) // it prints hello in every 2 seconds
```

#### setTimeout

In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.

```js
// syntax
function callback() {
  // code goes here
}
setTimeout(callback, duration) // duration in milliseconds
```

```js
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.
```

### Exercises Level 3

1. Parse the *txt* JSON to object.
2. Find the the user who has many skills from the variable stored in *txt*.

## Functional Programming

- *forEach*: Iterate an array elements and use for array. It takes a callback function with elements and index parameter.

```js
arr.forEach(function(element, index){
  console.log(index, element)
})
// The above code can be written using arrow function
arr.forEach((element, index) => {
  console.log(index, element)
})
// The above code can be written using arrow function and explicit return
arr.forEach((element, index) => console.log(index, element));
```

- *map*: Iterate an array elements and modify the array elements. It takes a callback function with elements and index parameter and return the modified array.

```js
const modifiedArray = arr.map(function(element,index){
  return element
});
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers = [1,2,3,4,5];
const numbersSquare = numbers.map((num) => num * num) 
console.log(numbersSquare) // [1,4,9,16,25]
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase) //['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];
const countriesToUpperCase = countries.map(function(country){
  return country.toUpperCase();
});
console.log(countriesToUpperCase)
// ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']
/*
// Arrow function
const countriesToUpperCase = countries.map((country) => {
  return country.toUpperCase();
})
//Explicit return arrow function
const countriesToUpperCase = countries.map(country => country.toUpperCase());
*/
```

- *Filter*: Filter out items which full fill filtering conditions

```js

// Filter countries containing land
const countriesContainingLand = countries.filter(country => country.includes('land'));
console.log(countriesContainingLand )  //['Finland', 'Ireland']

const countriesEndByia = countries.filter(country => country.includes('ia'));
console.log(countriesEndByia) //['Albania', 'Bolivia','Ethiopia']

const countriesHaveFiveLetters = countries.filter(country => country.length === 5);
console.log(countriesHaveFiveLetters ) //  ['Japan', 'Kenya']

const scores = [{name:'Asabeneh', score:95},{name:'Mathias', score:80},{name:'Elias', score:50},{name:'Martha', score:85},{name:'John', score:100}];

const scoresGreaterEight = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEight) //[{name: 'Asabeneh', score: 95}, {name: 'Martha', score: 85},{name: 'John', score: 100}]
```

- *reduce*: Reduce takes a callback function. The call back function takes accumulator and current value as a parameter and returns a single value:

```js
  const numbers = [1,2,3,4,5];
  const sum = numbers.reduce((accum, curr)=> accum + curr);

  console.log(sum); // 15
```

- *every*: Check if all the elements are similar in one aspect. It returns boolean

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const bools = [true, true, true, true];
const result = bools.every((b)=> {
  return b === true;
});

console.log(result) //true

const checkType = names.every((name) => typeof name ==='string');

console.log(checkDataTypes) // true;
```

- *some*: Check if some of the elements are similar in one aspect. It returns boolean

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const bools = [true, true, true, true];
const result = bools.some((b)=> {
  return b === true;
});
console.log(result) //true
const checkType = names.some((name) => typeof name ==='number');
console.log(checkDataTypes) // false
```

- *find*: Return the first element which satisfies the condition

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const ages = [24, 22,25,32,35,18];
const result = names.find(name =>  name.length > 7);
console.log(result) // Asabeneh
const age = ages.find((age) => age < 20);
console.log(age) // 18
```

- *findIndex*: Return the position of the first element which satisfies the condition

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const ages = [24, 22,25,32,35,18];
const result = names.findIndex(name =>  name.length > 7);
console.log(result) // 0

const age = ages.findIndex((age) => age < 20);
console.log(age) // 5
```

- *sort*: The sort methods arranges the array elements either ascending or descending order. By default, the ***sort()*** method sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array.  It is recommended to copy the original document before you start sorting.

- *Sorting string values*

```js
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot'];
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted
```

- *Sorting Numeric  values*

As you can see in the example below, 100 came first after sorted in ascending order. Sort converts items to string , since '100' and other numbers compared, 1 which the beginning of the string '100' became the smallest.  To avoid this, we use a compare call back function inside the sort method, which return a negative, zero or positive.

```js
const numbers = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
numbers.sort(function(a, b) {
return a - b;
})

console.log(numbers) // [3.14, 9.81, 37, 100]
numbers.sort(function(a, b) {
return b - a;
});
console.log(numbers) //[100, 37, 9.81, 3.14]

```

- *Sorting Object Arrays*

When ever we sort objects in an array. We use the object key to compare. Lets see the example below.

```js
objArr.sort(function(a, b) {
  if (a.key < b.key) return -1;
  if (a.key > b.key) return 1;
  return 0;
});

// or

objArr.sort(function(a, b) {
  if (a['key'] < b['key']) return -1;
  if (a['key'] > b['key']) return 1;
  return 0;
});

const users = [{name:'Asabeneh', age:150}, {name:'Brook', age:50}, {name:'Eyo', age:100},{name:'Elias', age:22}];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});

console.log(users); // sorted ascending
//[{…}, {…}, {…}, {…}]
```

### Exercises

```js
  const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
  const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

1. Explain the difference between ***forEach, map, filter, and reduce***.
2. Define a call function before you them in forEach, map, filter or reduce.
3. Use ***forEach*** to console.log each country in the countries array.
4. Use ***forEach*** to console.log each name in the names array.
5. Use ***forEach*** to console.log each number in the numbers array.
6. Use ***map*** to create a new array  by changing each country to uppercase in the countries array;
7. Use ***map*** to create a new array  by changing each number to square in the numbers array
8. Use ***map*** to change to each name to uppercase in the names array
9. Use ***filter*** to filter out countries containing ***land***.
10. Use ***filter*** to filter out countries having six character.
11. Use ***filter*** to filter out countries containing six letters and more in the country array.
12. Use ***filter*** to filter out country start with 'E';
13. Chain two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
14. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
15. Use ***reduce*** to sum all the numbers in the numbers array.
16. Use ***reduce*** to concatenate all the countries and to produce this sentence: ***Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries***
17. Explain the difference between ***some*** and ***every***
18. Use ***some*** to check if some names' length greater than seven in names array
19. Use ***every*** to check if all the countries contain the word land
20. Explain the difference between ***find*** and ***findIndex***.
21. Use ***find*** to find the first country containing only six letters in the countries array
22. Use ***findIndex*** to find the position of the first country containing only six letters in the countries array
23. Use ***findIndex*** to find the position of ***Norway*** if it doesn't exist in the array you will get -1.
24. Use ***findIndex*** to find the position of ***Russia*** if it doesn't exist in the array you will get -1.
25. Declare a function called ***categorizeCountries*** which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
26. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
27. Declare a ***getFirstTenCountries*** function and return an array of ten countries. Use different functional programming to work on the countries.js array
28. Declare a ***getLastTenCountries*** function which which returns the last ten countries in the countries array.
29. Find out which *letter* is used many *times* as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
30. Use the countries information, in the data folder. Sort countries by name, by capital, by population
31. Sort out the ten most spoken languages by location.
32. Sort out the ten most populated countries.

## Destructuring and Spread

Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

### Destructing  Arrays

```js
  const numbers = [1, 2, 3];
  let [numOne, numTwo, numThree] = numbers;
  console.log(numOne, numTwo, numThree) // 1,2,3
  const names = ['Asabeneh', 'Brook', 'David', 'John'];
  let [firstPerson, secondPerson, ThirdPerson, fourthPerson] = names;
  console.log(firstName, secondPerson,thirdPerson, fourthPerson) //Asabeneh, Brook, David, John
  const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
  let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;
  console.log(e,pi,gravity, bodyTemp, boilingTemp) //2.72, 3.14, 9.81, 37, 100
```

If we like to skip one of the values in the array we use additional comma. The comma helps to omit the value at that index

```js
  const numbers = [1, 2, 3];
  let [numOne, , numThree] = numbers; //2 is omitted
  console.log(numOne, numThree) // 1,2,3
  const names = ['Asabeneh', 'Brook', 'David', 'John'];
  let [, secondPerson, , fourthPerson] = names; // first and third person is omitted
  console.log(secondPerson, fourthPerson) //Brook, John
```

We can use default value in case the value of array for that index is undefined:

```js
const names = [undefined, 'Brook', 'David'];
let [firstPerson = 'Asabeneh', secondPerson, thirdPerson, fourthPerson = 'John' ] = names;
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson) // Asabeneh Brook David John
```

#### Destructuring Object

When we destructure the name of the variable we use to destructure should be exactly the same us the key or property of the object. See example below.

```js
const rectangle = {
  width: 20,
  height:10,
  area: 200
}
let {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter) //20 10 200 undefined
```

#### Renaming during structuring

```js
const rectangle = {
  width: 20,
  height:10,
  area: 200
}
let {width:w, heigh:h, area:a, perimeter:p} = rectangle;
console.log(w, h, a, p) //20 10 200 undefined
```

If the key is not found in the object the variable will be assigned to undefined. In case, the key is not in the object we can give a default value during declaration. See the example.

```js
const rectangle = {
  width: 20,
  height:10,
  area: 200
}
let {width, heigh, area, perimeter = 60} = rectangle;
console.log(width, height, area, perimeter)  //20 10 200 60

//Lets modify the object:width to 30 and perimeter to 80
const rectangle = {
  width: 30,
  height:10,
  area: 200,
  perimeter:80
}
let {width, heigh, area, perimeter = 60} = rectangle;
console.log(width, height, area, perimeter) //20 10 200 80
```

Destructuring keys as a function parameters. Lets create a function which take a rectangle object and it return a perimeter of a rectangle.

```js
    // Without destructuring
    const rect = {
      width:20,
      height:10
    }
    const calculatePerimeter = (rectangle) => {
      return 2 * (rectangle.width + rectangle.height)
    }
    console.log(calculatePerimeter(rect)) // 60
    //with destructuring

     const calculatePerimeter = ({width, height}) => {
      return 2 * (width + height)
    }

    console.log(calculatePerimeter(rect)) // 60

    //Another Example
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 200,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
};
// Lets create a function which give information about the person object without destructuring

const getPersonInfo = obj => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(', ');
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(', ');

  return `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
    obj.age
  } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;
};
console.log(getPersonInfo(person));
// Lets create a function which give information about the person object with destructuring

const getPersonInfo = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages
}) => {
  const formattedSkills = skills.slice(0, -1).join(', ');
  const formattedLanguages = languages.slice(0, -1).join(', ');

  return `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]}. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;
};
console.log(getPersonInfo(person))
/*
Asabeneh Yetayeh lives in Finland. He is  200 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/
```

### Spread or Rest Operator

#### Exercise: Destructuring

   ```js
   const constants = [2.72, 3.14, 9.81,37, 100]
   const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

   const rectangle = {
     width:20,
     height:10,
     area:200,
     perimeter:60
   }
   ```

   1. Assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
   2. Assign the elements of countries array to fin, est, sw, den, nor
   3. Destructure the rectangle object by its properties or keys.

## Map and Set

## Set

Set is a collection of unique elements. Lets see how to create a set

### Creating a set

```js
  const companies = new Set()
```

### Adding an element to a set

```js
  console.log(companies.size) // 0
  companies.add('Google') // add element to the set
  companies.add('Facebook')
  companies.add('Amazon')
  companies.add('Oracle')
  companies.add('Microsoft')
  console.log(companies.size) // 5 elements in the set
```

### Deleting an element a set

```js
console.log(companies.delete('Google'))
console.log(companies.size) // 4 elements left in the set
```

### Checking an element in the set

```js
console.log(companies.has('Google')) // false
console.log(companies.has('Facebook')) // true
```

### Clearing the set

It removes all the elements

```js
  companies.clear()
```

See the example below to learn how to use set.

```js

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French'
]
const langSet = new Set(languages)
console.log(langSet)
console.log(langSet.size)

const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter(lng => lng === l)
  console.log(filteredLang)
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)
```

## Set

Set is a collection a collection of elements. Set can only contains unique elements.
Lets see how to create a set

### Creating an empty set

```js
const companies = new Set()
console.log(companies)
```

```sh
{}
```

### Creating set from array

```js
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French'
]

const setOfLangauges = new Set(languages)
console.log(setOfLangauges)
```

```sh
Set(4) {"English", "Finnish", "French", "Spanish"}
```

Set is an iterable object and we can iterate through each elements.

```js
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French'
]

const setOfLangauges = new Set(languages)

for (const language of setOfLangauges) {
  console.log(language)
}
```

```sh
  English
  Finnish
  French
  Spanish
```

### Adding an element to a set

```js
const companies = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')

console.log(companies.size) // 5 elements in the set
console.log(companies)
```

```sh
Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}
```

We can also use loop to add element to a set.

```js
const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}
```

```sh
Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

```

### Deleting an element a set

We can delete an element from a set using a delete method.

```js
console.log(companies.delete('Google'))
console.log(companies.size) // 4 elements left in the set
```

### Checking an element in the set

The has method can help to know if a certain element exists in a set.

```js
console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true
```

### Clearing the set

It removes all the elements from a set.

```js
companies.clear()

console.log(companies)
```

```sh
{}

```

See the example below to learn how to use set.

```js
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French'
]
const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter(lng => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)
```

```js
[
  { lang: 'English', count: 3 },
  { lang: 'Finnish', count: 1 },
  { lang: 'French', count: 2 },
  { lang: 'Spanish', count: 1 }
]
```

Other use case of set. For instance to count unique item in an array.

```js
const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers)
```

```sh
Set(5) {5, 3, 2, 9, 4}
```

### Union of sets

To find a union to two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B)

```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)
```

```sh
Set(6) {1, 2, 3, 4, 5,6}

```

### Intersection of sets

To find an intersection of two sets can be achieved using filter. Lets find the union of set A and set B (A ∩ B)

```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter(num => B.has(num))
let C = new Set(c)

console.log(C)
```

```sh
Set(3) {3, 4, 5}

```

### Difference of sets

To find an the difference between two sets can be achieved using filter. Lets find the different of set A and set B (A \ B)

```js
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter(num => !B.has(num))
let C = new Set(c)

console.log(C)
```

```sh
Set(2) {1, 2}

```

## Map

### Creating an empty Map

```js
const map = new Map()
console.log(map)
```

```sh
Map(0) {}
```

### Creating an Map from array

```js
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const map = new Map(countries)
console.log(map)
console.log(map.size)
```

```sh
Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
3
```

### Adding values to the Map

```js
const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)
```

```sh
Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
3
```

### Getting a value from Map

```js
console.log(countriesMap.get('Finland'))
```

```sh
Helsinki
```

### Checking key in Map

Check if a key exist in a map using *has* method. It returns *true* or *false*.

```js
console.log(countriesMap.has('Finland'))
```

```sh
true
```

Getting all values from map using loop

```js
for (const country of countriesMap) {
  console.log(country)
}
```

```sh
(2) ["Finland", "Helsinki"]
(2) ["Sweden", "Stockholm"]
(2) ["Norway", "Oslo"]
```

```sh
for (const [country, city] of countriesMap){
console.log(country, city)
}
```

```sh
Finland Helsinki
Sweden Stockholm
Norway Oslo
```

### Exercises: Set and Map

### Exercises:Level 1

```js
const a = {4, 5, 8, 9}
const b = {3, 4, 5, 7}
const countries = ['Finland', 'Sweden', 'Norway']
```

1. create an empty set
2. Create a set containing 0 to 10 using loop
3. Remove an element from a set
4. Clear a set
5. Create a set of 5 string elements from array
6. Create a map of countries and number of characters of a country

### Exercises:Level 2

1. Find a union b
2. Find a intersection b
3. Find a with b

### Exercises:Level 3

1. How many languages are there in the countries object file.

1. \*\*\* Use the countries data to find the 10 most spoken languages:

   ````js
   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
   {'English':91},
   {'French':45},
   {'Arabic':25},
   {'Spanish':24},
   {'Russian':9},
   {'Portuguese':9},
   {'Dutch':8},
   {'German':7},
   {'Chinese':5},
   {'Swahili':4},
   {'Serbian':4}]

   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 3))

  [
   {'English':91},
   {'French':45},
   {'Arabic':25}
   ]````

## Document Object Model (DOM)

HTML document is structured as a JavaScript Object. Every HTML element has a different properties which can help to manipulate it. It is possible to get, create, append or remove HTML elements using JavaScript. Check the examples below. Selecting HTML element using JavaScript is similar to select CSS. To select an HTML element, we use tag name, id, class name. To create an HTML element we use tag name.

### Getting Element

```html
<!DOCTYPE html>
  <html>
    <head>
      <title>Document Object Model/title>
    </head>
    <body>
     <h1 class='title' id='first-title'>First Title</h1>
     <h1 class='title' id='second-title'>Second Title</h1>
     <h1 class='title' id='third-title'>Third Title</h1>
     <h1></h1>
    </body>
  </html>
```

#### Getting elements by tag name

***getElementsByTagName()*** method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. The length property provides the size of the collection.

```js
const allTitles = document.getElementsByTagName('h1');
console.log(allTitles) //HTMCollections
console.log(allTitles.length) // 4
for(let i = 0; i < allTitles.length; i++){
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
```

#### Getting elements by class name

***getElementsByClassName()*** method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. The length property provides the size of the collection. It is possible to loop through all the HTMLCollection elements. See the example below

```js
const allTitles = document.getElementsByClassName('title');
console.log(allTitles) //HTMCollections
console.log(allTitles.length) // 4
for(let i = 0; i < allTitles.length; i++){
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
```

#### Getting an element by id

***getElementsById()***  targets a single HTML element. We pass the id without # as an argument.

```js
let firstTitle = document.getElementById('first-title');
console.log(firstTitle) // <h1>First Title</h1>
```

#### Getting elements by using querySelector using tag, class and id:

***querySelector***: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

```js
let firstTitle = document.querySelect('h1');// select the first available h2 element
let firstTitle = document.querySelector('#first-title'); // select id with first-title
let firstTitle = document.querySelector('.title'); // select the first available h2 element with class title
```

***querySelectorAll***: can be used to select html element by its tag name or class. It return a nodeList which is an array like object which support array methods. We can use ***for loop*** or ***forEach*** to loop through each nodeList elements.

```js
const allTitles = document.querySelectAll('h1');
console.log(allTitles.length) // 4
for(let i = 0; i < allTitles.length; i++){
  console.log(allTitles[i]);
}
allTitles.forEach(title => console.log(title))
const allTitles = document.querySelectorAll('.title'); // the same goes for selecting using class
```

### Adding attribute

An attribute is added in the opening tag of HTML which gives additional information about the element. Common HTML attributes: id, class, src, style, href,disabled, title, alt. Lets add id and class for the fourth title.

#### Adding attribute using setAttribute

The ***setAttribute()*** method set any html attribute. It takes two parameters the type of the attribute and the name of the attribute. 
Let's add class and id attribute for the fourth title.

```js
const titles = document.querySelectorAll('h1');
titles[3].setAttribute('class', 'title');
titles[3].setAttribute('id', 'fourth-title');
```

#### Adding attribute without setAttribute

Some attributes are DOM object property and they can be set directly. For instance id and class

```js
//another way to setting an attribute
titles[3].className = 'title';
titles[3].id = 'fourth-title';
```

#### Adding class using classList

The class list method is a good method to append additional class. It doesn't override the original class if a class exists

```js
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add('title', 'header-title')
```

### Adding Text content

```js
const titles = document.querySelectorAll('h1');
titles[3].textContent = 'Fourth Title';
```

### Adding style

Lets add some style to our titles. If the element has even index we give it green color else red.

```js
const titles = document.querySelectorAll('h1');
titles.forEach((title,i) => {
  title.fontSize = '24px'; // all titles will have 24px font size
  if(i % 2 === 0){
    title.style.color = 'green';
  }
  else {
    title.style.color = 'red';
  }
})

```

### Creating an Element

```js
let title = document.createElement('h1');
let firstTitle = document.getElementById('first-title');
```

### Creating elements

```js
let firstTitle = document.getElementById('first-title');
let title
for(let i = 0; i < 3; i++){
  title = document.createElement('h1');
  title.className = 'title';
  title.style.fontSize = '24px';
}
```

### Appending to a parent element

```js
// creating multiple elements and appending to parent element
let title;
for(let i = 0; i < 3; i++){
  title = document.createElement('h1');
  title.className = 'title';
  title.style.fontSize = '24px';
  document.body.appendChild(title);
}
```

### Event Listeners

Common HTML events:onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload.
We can add event listener method to any DOM object. Use use ***addEventListener()*** method to listen different event types on HTML elements.
The following is an example of click type event.

```js
const button = document.querySelector('button');
button.addEventListener('click', e => {
  console.log(e.target);
});
```

### Getting value from an input element

We usually fill forms and forms accept data. Form fields are created using input HTML element.

```html
<input type ='text' placeholder = 'Mass in Kilogram' />
<input type = 'text' placeholder = 'Height in meters' />
<button>Calculate BMI</button>
```

```js
const mass = document.querySelector('#mass');
const height = document.querySelector('#height');
const button = document.querySelector('button');
let bmi;
button.addEventListen('click', ()=>{
  bmi = mass.value * height.value;
});

console.log(bmi)
```

#### Exercises:Document Object Model

```html
  <!-- index.html -->
<!DOCTYPE html>
  <html>
    <head>
      <title>JavaScript for Everyone:DOM</title>
    </head>
    <body>
    <p>First Paragraph</p>
    <p>Second Paragraph</p>
    <p>Third Paragraph</p>
    <p></p>
    </body>
  </html>
```

  1. Create an index.html file and put four p elements as above: Get the first paragraph by using ***document.querySelector(tagname)*** and tag name
  2. Get get each of the the paragraph using ***document.querySelector('#id')*** and by their id
  3. Get all the p as nodeList using ***document.querySelectorAll(tagname)*** and by their tag name
  4. Loop through the nodeList and get the text content of each paragraph
  5. Set a text content to paragraph the fourth paragraph,***Fourth Paragraph***
  6. Set id and class attribute for all the paragraphs using different attribute setting methods
  7. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
  8. Select all paragraphs and loop through each elements and give the first and third paragraph a color of color, and the second and the fourth paragraph a red color
  9. Remove all the paragraph and create them using JavaScript
  10. Set text content, id and class to each paragraph
  11. Create a div container on HTML document and create 100 numbers dynamically and append to the container div. Put each number in 150px by 150px box. If the number is even the background will be lightgreen else lightblue.
  12. Use the rgb color generator function or hexaColor generator to create 10 divs with random background colors
  13. Use the countries.js to visualize all the countries on the HTML document. You need one wrapper div and box for each countries. In the box display, the letter the country starts with, the name of the country and the number of characters for the country name.

#### DOM: Mini Projects

1. BMI calculator
2. Hexadecimal or RGB color Generator
3. World Countries List

## Classes

JavaScript is an object oriented programming language. Everything in JavScript is an object, with its properties and methods. We create class to create an object. A Class is like an object constructor, or a "blueprint" for creating objects. We instantiate a class to create an object. The class defines attributes and the behavior of the object, while the object, on the other hand, represents the class.

Once we create a class we can create object from it whenever we want. Creating an object from a class is called class instantiation.

In the object section, we saw how to create an object literal. Object literal is a singleton. If we want to get a similar object , we have to write it. However, class allows to create many objects. This helps to reduce amount of code and repetition of code.

### Defining a classes

To define a class in JavaScript we need the keyword _class_ , the name of a class in **CamelCase** and block code(two curly brackets). Let us create a class name Person.

```sh
// syntax
class ClassName {
    //  code goes here
}

```

**Example:**

```js
class Person {
  // code goes here
}
```

We have created an Person class but it does not have any thing inside.

### Class Instantiation

Instantiation class means creating an object from a class. We need the keyword _new_ and we call the name of the class after the word new.

Let us create a dog object from our Person class.

```js
class Person {
  // code goes here
}
const person = new Person()
console.log(person)
```

```sh
Person {}
```

As you can see, we have created a person object. Since the class did not have any properties yet the object is also empty.

Let use the class constructor to pass different properties for the class.

### Class Constructor

The constructor is a builtin function which allows as to create a blueprint for our object. The constructor function starts with a keyword constructor followed by a parenthesis. Inside the parenthesis we pass the properties of the object as parameter. We use the _this_ keyword to attach the constructor parameters with the class.

The following Person class constructor has firstName and lastName property. These properties are attached to the Person class using _this_ keyword. _This_ refers to the class itself.

```js
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person = new Person()

console.log(person)
```

```sh
Person {firstName: undefined, lastName}
```

All the keys of the object are undefined. When ever we instantiate we should pass the value of the properties. Let us pass value at this time when we instantiate the class.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh')

console.log(person1)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh"}
```

As we have stated at the very beginning that once we create a class we can create many object using the class. Now, let us create many person objects using the Person class.

```js
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh')
const person2 = new Person('Lidiya', 'Tekle')
const person3 = new Person('Abraham', 'Yetayeh')

console.log(person1)
console.log(person2)
console.log(person3)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh"}
Person {firstName: "Lidiya", lastName: "Tekle"}
Person {firstName: "Abraham", lastName: "Yetayeh"}
```

Using the class Person we created three persons object. As you can see our class did not many properties let us add more properties to the class.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')

console.log(person1)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}
```

### Default values with constructor

The constructor function properties may have a default value like other regular functions.

```js
class Person {
  constructor(
    firstName = 'Asabeneh',
    lastName = 'Yetayeh',
    age = 250,
    country = 'Finland',
    city = 'Helsinki'
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person1 = new Person() // it will take the default values
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1)
console.log(person2)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}
Person {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Espoo"}
```

### Class methods

The constructor inside a class is a builtin function which allow us to create a blueprint for the object. In a class we can create class methods. Methods are JavaScript functions inside the class. Let us create some class methods.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getFullName())
console.log(person2.getFullName())
```

```sh
Asabeneh Yetayeh
test.js:19 Lidiya Tekle
```

### Properties with initial value

When we create a class for some properties we may have an initial value. For instance if you are playing a game, you starting score will be zero. So, we may have a starting score or score which is zero. In other way, we may have an initial skill and we will acquire some skill after some time.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)
```

```sh
0
0
[]
[]
```

A method could be regular method or a getter or a setter. Let us see, getter and setter.

### getter

The get method allow us to access value from the object. We write a get method using keyword _get_ followed by a function. Instead of accessing properties directly from the object we use getter to get the value. See the example bellow

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getscore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getScore) // We do not need parenthesis to call a getter method
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)
```

```sh
0
0
[]
[]
```

### setter

The setter method allow us to modify the value of certain properties. We write a setter method using keyword _set_ followed by a function. See the example bellow.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)
```

```sh
1
1
["HTML", "CSS", "JavaScript"]
["Planning", "Managing", "Organizing"]
```

Do not be puzzled by the difference between regular method and a getter. If you know how to make a regular method you are good. Let us add regular method called getPersonInfo in the Person class.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`
    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const person3 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.getScore)
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)
console.log(person3.getSkills)

console.log(person1.getPersonInfo())
console.log(person2.getPersonInfo())
console.log(person3.getPersonInfo())
```

```sh
1
1
["HTML", "CSS", "JavaScript"]
["Planning", "Managing", "Organizing"]
[]
Asabeneh Yetayeh is 250. He lives Helsinki, Finland. He knows HTML, CSS and JavaScript
Lidiya Tekle is 28. He lives Espoo, Finland. He knows Planning, Managing and Organizing
John Doe is 50. He lives Mars city, Mars.
```

### Static method

The static keyword defines a static method for a class. Static methods are not called on instances of the class. Instead, they are called on the class itself. These are often utility functions, such as functions to create or clone objects. An example of static method is _Date.now()_. The _now_ method is called directly from the class.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }
  static showDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }
}

console.log(Person.favoriteSkill())
console.log(Person.showDateTime())
```

```sh
Node
15.1.2020 23:56
```

The static methods are methods which can be used as utility functions.

## Inheritance

Using inheritance we can access all the properties and the methods of the parent class. This reduces repetition of code. If you remember, we have a Person parent class and we will create children from it. Our children class could be student, teach etc.

```js
// syntax
class ChildClassName extends {
 // code goes here
}
```

Let us create a Student child class from Person parent class.

```js
class Student extends Person {
  saySomething() {
    console.log('I am a child of the person class')
  }
}

const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s1)
console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())
```

```sh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
I am a child of the person class
Asabeneh Yetayeh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
Asabeneh Yetayeh is Finland. He lives Helsinki, 250.
```

### Overriding methods

As you can see, we manage to access all the methods in the Person Class and we used it in the Student child class. We can customize the parent methods, we can add additional properties to a child class. If we want to customize, the methods and if we want to add extra properties, we need to use the constructor function the child class too. In side the constructor function we call the super() function to access all the properties from the parent class. The Person class didn't have gender but now let us give gender property for the child class, Student. If the same method name used in the child class, the parent method will be overridden.

```js
class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city)
    this.gender = gender
  }

  saySomething() {
    console.log('I am a child of the person class')
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''
    let pronoun = this.gender == 'Male' ? 'He' : 'She'

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const s1 = new Student(
  'Asabeneh',
  'Yetayeh',
  250,
  'Finland',
  'Helsinki',
  'Male'
)
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'
s2.setSkill = 'Organizing'

console.log(s1)

console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())

console.log(s2.saySomething())
console.log(s2.getFullName())
console.log(s2.getPersonInfo())
```

```sh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}
Student {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Helsinki", …}
I am a child of the person class
Asabeneh Yetayeh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}
Asabeneh Yetayeh is 250. He lives in Helsinki, Finland. He knows HTML, CSS and JavaScript
I am a child of the person class
Lidiya Tekle
Student {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Helsinki", …}
Lidiya Tekle is 28. She lives in Helsinki, Finland. He knows Planning, Managing and Organizing
```

Now, the getPersonInfo method has been overridden and it identifies if the person is male or female.

## Exercises

### Exercises Level 1

1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
2. Create a Dog and Cat child class from the Animal Class.

### Exercises Level 2

1. Override the method you create in Animal class

### Exercises Level 3

1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

```JS
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
```

```sh
// you output should look like this
console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
```

1. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

## Regular Expressions

A regular expression or RegEx is a small programming language that helps to find pattern in data. A RegEx can be used to check if some pattern exists in a different data types. To use RegEx in JavaScript either we use RegEx constructor or we can declare a RegEx pattern using two forward slashes followed by a flag. We can create a pattern in two ways.

To declare a string we use a single quote, double quote a backtick to declare a regular expression we use two forward slashes and an optional flag. The flag could be g, i, m, s, u or y.

### RegEx parameters

A regular expression takes two parameters. One required search pattern and an optional flag.

#### Pattern

A pattern could be a text or any form of pattern which some sort of similarity. For instance the word spam in an email could be a pattern we are interested to look for in an email or a phone number format number might be our interest to look for.

#### Flags

Flags are optional parameters in a regular expression which determine the type of searching. Let see some of the flags:

- g:is a global flag which means looking for a pattern in whole text
- i: case insensitive flag(it searches for both lowercase and uppercase)
- m: multiline

### Creating a pattern with RegEx Constructor

Declaring regular expression without global flag and case insensitive flag.

```js
// without flag
let pattern = 'love'
let regEx = new RegEx(pattern)
```

Declaring regular expression with global flag and case insensitive flag.

```js
let pattern = 'love'
let flag = 'gi'
let regEx = new RegEx(pattern, flag)
```

Declaring a regex pattern using RegEx object. Writing the pattern and the flag inside the RegEx constructor

```js
let regEx = new RegEx('love','gi')
```

### Creating a pattern without RegEx Constructor

Declaring regular expression with global flag and case insensitive flag.

```js
let regEx= /love/gi
```

The above regular expression is the same as the one which we created with RegEx constructor

```js
let regEx= new RegEx('love','gi')
```

### RegExp Object Methods

Let see some of RegEx methods

#### Testing for  a match

*test()*:Tests for a match in a string. It returns true or false.

```js
const str = 'I love JavaScript'
const pattern = /love/
const result = pattern.test(str)
console.log(result)
```

```sh
true
```

#### Array containing all of the match

*match()*:Returns an array containing all of the matches, including capturing groups, or null if no match is found.
If we do not use a global flag, match() returns an array containing the pattern, index, input and group.

```js
const str = 'I love JavaScript'
const pattern = /love/
const result = str.match(pattern)
console.log(result)
```

```sh
["love", index: 2, input: "I love JavaScript", groups: undefined]
```

```js
const str = 'I love JavaScript'
const pattern = /love/g
const result = str.match(pattern)
console.log(result)
```

```sh
["love"]
```

*search()*: Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

```js
const str = 'I love JavaScript'
const pattern = /love/g
const result = str.search(pattern)
console.log(result)
```

```sh
2
```

#### Replacing a substring

*replace()*: Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

```js
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)
```

```sh
JavaScript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language
```

```js
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)
```

```sh
JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language
```

```js
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)
```

```sh
JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language
```

```js

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt.replace(/%/g, '')
console.log(matches)  
```

```sh
I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.
```

* []:  A set of characters
  * [a-c] means, a or b or c
  * [a-z] means, any letter a to z
  * [A-Z] means, any character A to Z
  * [0-3] means, 0 or 1 or 2 or 3
  * [0-9] means any number 0 to 9
  * [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
* \\:  uses to escape special characters
  * \d mean:match where the string contains digits (numbers from 0-9)
  * \D mean: match where the string does not contain digits
* . : any character except new line character(\n)
* ^: starts with
  * r'^substring' eg r'^love', a sentence which starts with a word love
  * r'[^abc] mean not a, not b, not c.
* $: ends with
  * r'substring$' eg r'love$', sentence ends with a word love
* *: zero or more times
  * r'[a]*' means a optional or it can be occur many times.
* +: one or more times
  * r'[a]+' mean at least once or more times
* ?: zero or one times
  *  r'[a]?' mean zero times or once
* {3}: Exactly 3 characters
* {3,}: At least 3 character
* {3,8}: 3 to 8 characters
* |: Either or
  * r'apple|banana' mean either of an apple or a banana
* (): Capture and group

![Regular Expression cheat sheet](./images/regex.png)

Let's use example to clarify the above meta characters

### Square Bracket

Let's use square bracket to include lower and upper case

```js
const pattern = '[Aa]pple' // this square bracket mean either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(pattern)

console.log(matches)  
```

```sh
["Apple", index: 0, input: "Apple and banana are fruits. An old cliche says an…by a banana a day keeps the doctor far far away. ", groups: undefined]

```

```js
const pattern = /[Aa]pple/g // this square bracket mean either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(pattern)

console.log(matches)  
```

```sh
["Apple", "apple"]
```

If we want to look for the banana, we write the pattern as follows:

```js
const pattern = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches = txt.match(pattern)

console.log(matches)  
```

```sh
["Apple", "banana", "apple", "banana", "Banana"]
```

Using the square bracket and or operator , we manage to extract Apple, apple, Banana and banana.

### Escape character(\\) in RegEx

```js
const pattern = /\d/g  // d is a special character which means digits
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt. match(pattern)

console.log(matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want
```

```js
const pattern = /\d+/g  // d is a special character which means digits
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt. match(pattern)

console.log(matches)  // ["12", "2020"], this is not what we want
```

### One or more times(+)

```js
const pattern = /\d+/g  // d is a special character which means digits
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt. match(pattern)
console.log(matches)  // ["12", "2020"], this is not what we want
```

### Period(.)

```js
const pattern = /[a]./g  // this square bracket means a and . means any character except new line
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // ["an", "an", "an", "a ", "ar"]
```

```js
const pattern = /[a].+/g  // . any character, + any character one or more times 
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']
```

### Zero or more times(*)

Zero or many times. The pattern could may not occur or it can occur many times.

```js

const pattern = /[a].*/g  //. any character, + any character one or more times 
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']

```

### Zero or one times(?)

Zero or one times. The pattern could may not occur or it may occur once.

```js
const txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern = /[Ee]-?mail/g  // ? means optional
matches = txt.match(pattern)

console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]

```

### Quantifier in RegEx

We can specify the length of the substring we look for in a text, using a curly bracket. Lets imagine, we are interested in substring that their length are 4 characters

```js
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\d{4}/g  // exactly four times
const matches = txt.match(pattern)
console.log(matches)  // ['2019']
```

```js
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\d{1,4}/g   // 1 to 4
const matches = txt.match(pattern)
console.log(matches)  // ['6', '2019']
```

### Cart ^

- Starts with
  
```js
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /^This/ // ^ means starts with
const matches = txt.match(pattern)
console.log(matches)  // ['This']
```

- Negation

```js
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no coma no period
const matches = txt.match(pattern)
console.log(matches)  // ["6", "2019"]
```

### Exact match

It should have ^ starting and $ which is an end.

```js
let pattern = /^[A-Z][a-z]{3,12}$/;
let name = 'Asabeneh';
let result = pattern.test(name)

console.log(result) // true
```

## 💻 Exercises

### Exercises: Level 1

1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
1. The position of some particles on the horizontal x-axis -12, -4, -3 and  -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

```js
points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
distance = 12
```

1. Write a pattern which identify if a string is a valid JavaScript variable

    ```sh
    is_valid_variable('first_name') # True
    is_valid_variable('first-name') # False
    is_valid_variable('1first_name') # False
    is_valid_variable('firstname') # True
    ```

### Exercises: Level 2

1. Write a function called *tenMostFrequentWords* which get the ten most frequent word from a string?

    ```js
        paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
        console.log(tenMostFrequentWords(paragraph))
    ```

    ```sh
        [
        {word:'love', count:6},
        {word:'you', count:5},
        {word:'can', count:3},
        {word:'what', count:2},
        {word:'teaching', count:2},
        {word:'not', count:2},
        {word:'else', count:2},
        {word:'do', count:2},
        {word:'I', count:2},
        {word:'which', count:1},
        {word:'to', count:1},
        {word:'the', count:1},
        {word:'something', count:1},
        {word:'if', count:1},
        {word:'give', count:1},
        {word:'develop',count:1},
        {word:'capabilities',count:1},
        {word:'application', count:1},
        {word:'an',count:1},
        {word:'all',count:1},
        {word:'Python',count:1},
        {word:'If',count:1}]
    ```

    ```js
    console.log(tenMostFrequentWords(paragraph, 10))
    ```

    ```sh
   [{word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1}
    ]
    ```

### Exercises: Level 3

1. Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
  
  ```js
    sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

   console.log(cleanText(sentence))
   ```

   ```sh
    I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
    ```
1. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

    ```js
    console.log(mostFrequentWords(cleanedText))
    [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]
    ```


## Promises and Callbacks

From the following code blocks you will notice, the difference between callback and promises:

  ```js
      //Callback
    const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('It didnt go well', skills)
    }, 2000)
  }

  doSomething((err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  })
  // after 2 seconds it will print
  // => It didnt go well

    const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback(false, skills)
    }, 2000)
  }

  doSomething((err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  })
  // after 2 seconds it will print the skills
  // => ["HTML", "CSS", "JS"]

  ```

  ```js
   // Promise
    const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))

const myPromise = n => {
  return new Promise((resolve, reject) => {
    if (n) {
      resolve(n * n)
    } else {
      reject('You need to pass an argument')
    }
  })
}

const square = async n => {
  let value = await myPromise(n)
  return value
}

square()
  .then(res => {
    console.log(res)
  })
  .catch(err => console.log(err))
console.log(square(10))
 ```

## Async and Await

```js
    const url = 'https://restcountries.eu/rest/v2/alll'
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => console.log(error))

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.log(err)
    }
  }
  console.log('===== async and await')
  fetchData()
  ```

## localStorage

Local storage is the para of the web storage API which is used to store data on the browser with no expiration data. The data will be available on the browser even after the browser is closed. There are five methods to work on local storage:
_setItem(), getItem(), removeItem(), clear(), key()_

### Setting item to the localStorage

When we set data to be stored in a localStorage, it will be stored as a string.  If we are storing an array or an object, we should stringify it first to keep the format unless otherwise we lose the array structure or the object structure of the original data

```js
localStorage.setItem('name', 'Asabeneh');
console.log(localStorage) //Storage {name: 'Asabeneh', length: 1}
localStorage.setItem('age', 200);
console.log(localStorage) //Storage {age: '200', name: 'Asabeneh', length: 2}
const skills = ['HTML', 'CSS', 'JS', 'React'];
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills,undefined, 4)
localStorage.setItem('skills', skillsJSON);
console.log(localStorage) //Storage {age: '200', name: 'Asabeneh', skills: 'HTML,CSS,JS,React', length: 3}
```

If we are storing an array, an object or object array, we should stringify the object first. See the example below.

```js
let skills = [
  { tech: 'HTML', level: 10 },
  { tech: 'CSS', level: 9 },
  { tech: 'JS', level: 8 },
  { tech: 'React', level: 9 },
  { tech: 'Redux', level: 10 },
  { tech: 'Node', level: 8 },
  { tech: 'MongoDB', level: 8 }
];

let skillJSON = JSON.stringify(skills);
localStorage.setItem('skills', skillJSON);
```

### Getting item from localStorage

```js
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
let skills = localStorage.getItem('skills');

console.log(name, age, skills) // 'Asabeneh', '200', '['HTML','CSS','JS','React']'

let skillsObj = JSON.parse(localStorage.getItem('skills'), undefined, 4);
console.log(skillsObj);
```

### Clearing the localStorage

The clear method, will clear everything stored in the local storage

```js
localStorage.clear();
```

### Exercises:Local Storage

## Cookies

### Exercises:Cookies

## JavaScript Interview Questions

### [JavaScript Tests](https://github.com/Asabeneh/JavaScript-for-Everyone/wiki/JavaScript-Tests)

### [JavaScript Test 1](https://github.com/Asabeneh/JavaScript-for-Everyone/wiki/JavaScript-Test-1)

### [JavaScript Test 2](https://github.com/Asabeneh/JavaScript-for-Everyone/wiki/JavaScript-Test-2)

### [JavaScript Test 3](https://github.com/Asabeneh/JavaScript-for-Everyone/wiki/JavaScript-Test-3)

- [JavaScript Test 3: Solutions](https://github.com/Asabeneh/JavaScript-for-Everyone/blob/master/solutions/javascript-test-3.js)
JavaScript-Test-4)
- [JavaScript Test 4: Solutions](https://github.com/Asabeneh/JavaScript-for-Everyone/blob/master/solutions/javascript-test-4.js)
