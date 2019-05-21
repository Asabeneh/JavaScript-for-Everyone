/**** QUESTION 1: Printing Hashes ****/
console.log('*** QUESTION 1: Printing Hashes ***');
const printHashes = () => {
  let hash = '';
  for (let i = 0; i < 7; i++) {
    hash += '#';
    console.log(hash);
  }
}
printHashes();
/**** QUESTION 2: FizzBuz ****/
console.log('*** QUESTION 2: FizzBuz ***');
const fizzBuz  = () =>  {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizBuzz', i);
    } else if (i % 3 !== 0 && i % 5 == 0) {
      console.log('Buz', i);
    } else if (i % 3 == 0) {
      console.log('Fizz', i);
    } else {
      console.log(i);
    }
  }
}
fizzBuz();
/**** QUESTION 3: Maximum ***
 *
 *
 */
console.log('*** QUESTION 3: Maximum ***');
const findMax = (a, b, c) => {
  let max;
  if (a > b && a > c) {
    max = a;
  } else if (b > a && b > c) {
    max = b;
  } else {
    max = c;
  }
  return max;
}
console.log(findMax(10, -9, 5));
console.log(findMax(-10, -9, -20));
console.log(findMax(-10, -9, 20));

/*
 *** QUESTION 4: Reverse Array ***
 */
console.log('*** QUESTION 4: Reverse Array ***');
const reverseArray = (arr) => {
  let newArr = [];
  let len = arr.length - 1;
  for (let i = 0; i <= len; i++) {
    newArr[i] = arr[len - i];
  }
  return newArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(['A', 'B', 'C']));

/*
 *** QUESTION 5: Modify Array***
 */
console.log('*** QUESTION 5: Modify Array***');
const modifyArray = (arr) => {
  let modifiedArr = [];
  if (arr.length < 5) {
    return 'Not Found';
  }
  for (let i = 0; i < arr.length; i++)
    i === 4
      ? (modifiedArr[i] = arr[i].toUpperCase())
      : (modifiedArr[i] = arr[i]);

  return modifiedArr;
}
console.log(
  modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot'])
);

/*
 *** QUESTION 6 : Seven unique random numbers in an array***
 */
console.log('*** QUESTION 6 : Seven unique random numbers in an array***');
// solution 1
function sevenRandomNumbers() {
  const randNumbers = [];
  while (randNumbers.length < 7) {
    const randNum = Math.floor(Math.random() * 9) + 1;
    if (randNumbers.indexOf(randNum) === -1) {
      randNumbers.push(randNum);
    }
  }
  return randNumbers;
}

console.log(sevenRandomNumbers());
// solution 2
function sevenRandomNumbers() {
  const randNumbers = [];
  let i = 0;
  let randNum;
  let len = randNumbers.length;
  while (i < 7) {
    randNum = Math.floor(Math.random() * 10 + 1);
    if (i == 0) {
      randNumbers[i] = randNum;
    } else {
      if (randNumbers.indexOf(randNum) == -1) {
        randNumbers[i] = randNum;
      } else {
        i--;
      }
    }
    i++;
  }

  return randNumbers;
}
console.log(sevenRandomNumbers());
function sevenRandomNumber() {
  const randNumbers = [];
  while (array.length < 7) {
    const random = Math.floor(Math.random() * 9);
    if (randNumbers.indexOf(random) === -1) {
      randNumbers.push(random);
    }
  }
  console.log(randNumbers);
  return randNumbers;
}

sevenRandomNumber();

/*
 *** QUESTION 7: Sum ***
 */
console.log('*** QUESTION 7: Sum of any number of arguments***');
const sumOfArgs = (...args) => {
  let total = 0;
  args.forEach(arg => (total += arg));
  return total;
};
console.log(sumOfArgs(1, 2, 3));
console.log(sumOfArgs(1, 2, 3, 4));

function sum() {
  let total = 0;
  Array.from(arguments).forEach(arg => (total += arg));
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
/*
 *** QUESTION 8: Replace the middle item with three items***
 */
console.log('*** QUESTION 8: Replace the middle item with three items***');
const removeMiddleItem = (arr, itemOne, itemTwo, itemThree) => {
  let arrayLen = arr.length;
  let middleIndex;
  if (arrayLen % 2 === 0) {
    middleIndex = arrayLen / 2 - 1;
    arr.splice(middleIndex, 2, itemOne, itemTwo, itemThree);
  } else {
    middleIndex = (arrayLen + 1) / 2 - 1;
    arr.splice(middleIndex, 1, itemOne, itemTwo, itemThree);
  }
  return arr;
}
console.log(removeMiddleItem([1, 2, 3], 'item 1', 'item2', 'item3'));
console.log(removeMiddleItem([1, 2, 3, 4], 'item 1', 'item2', 'item3'));
console.log(removeMiddleItem([1, 2, 3], 4, 5, 6));
/*
 *** QUESTION 9: Extract numbers from text ***
 */
console.log('*** QUESTION 9: Extract numbers from a text ***');
const calculateAnnualIncome = () => {
  const pattern = /[0-9]+/g;
  const incomes = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.match(
    pattern
  );
  let sum = 0;
  incomes.forEach((income, i) => {
    if (i == 0 || i == 2) {
      sum += parseFloat(income) * 12;
    } else {
      sum += parseFloat(income);
    }
  });
  return sum;
}
console.log(calculateAnnualIncome());
/*
 *** QUESTION 10: Check if a sub string is an end of a text ***
 */
console.log('*** QUESTION 10: Check if a sub string is an end of a text ***');
const checkEndOfString = (mainString, subString) => {
  return mainString.endsWith(subString);
}
console.log(checkEndOfString('integrity', 'ity'));
console.log(checkEndOfString('integration', 'tio'));
