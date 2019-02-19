// function without parameters
function addTwoNumbers() {
  var numOne = 10;
  var numTwo = 20;
  var sum = numOne + numTwo;
  console.log(sum);
}
addTwoNumbers(); // function has to be called to be executed
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

function square(number) {
  return number * number;
}
console.log(square(10));

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






