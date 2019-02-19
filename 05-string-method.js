/*
=== String Built in Methods ===
*/
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let location = "Helsinki";
console.log(firstName.length); // to check the length of a string
console.log(firstName.toUpperCase()); // to capitalize
console.log(firstName.toLowerCase()); // to change to lower case letters

let company = 'google'

var firstLetter = company.slice(0, 1); // to slice out the first letter of the word
var remainingLetters = company.slice(1, company.length);
console.log(firstLetter);
console.log(remainingLetters);
var modifiedName = firstLetter.toUpperCase() + remainingLetters;
console.log(modifiedName);
var school = "International Academy Award";
console.log(school.split()); // creates an array of one item
console.log(school.split("")); // it creates an array of letters and spaces;
console.log(school.split(" ")); // creates an array of words
console.log(school.indexOf("A")); // gives the index of the A in the string which is case sensitive
console.log(school.lastIndexOf("A")); //the last A, which is A from the word Award
console.log(school.includes("rify")); // it checks if the string exist and returns boolean
console.log(school.includes("Award")); // it checks if the string exist and returns boolean
console.log(school.includes("demy")); // it checks if the string exist and returns boolean
console.log(school.startsWith("Inter")); // checks if the string starts with the provided value and returns boolean

var modifiedSchool = school.split(" ");
console.log(modifiedSchool);
