// Declaring different variables of different data types
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
let fullName = firstName + ' ' + lastName; // concatination, merging to string together.
console.log(fullName);

let personInfoOne = fullName + '.I am ' + age + '. I live in ' + country; // ES5
let personInfoTwo = `I am ${fullName}.I am ${age}. I live in ${country}`; //ES6 - String interpolation method
console.log(personInfoOne);
console.log(personInfoTwo);
