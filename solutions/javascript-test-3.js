/* =============================== QUESTION 1 ================================================
  Write a function which count the number of occurrence of words in a paragraph or a sentence.
  The function countWords takes a paragraph and two words as parameters. 
  It compare which word is most frequently occurred in the paragraph.
  ============================================================================================= */
const paragraph =
  "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";
//Method one
const countWords1 = (para, wrd) => {
  const pattern = new RegExp(wrd, "gi"); //creating regex object using RegExp constructor
  const matches = para.match(pattern) || []; // if the para.match returns null, matches result will be en empty array
  return matches.length; // geting the length of the array
};
console.log(countWords1(paragraph, "love"));

//Method
const countWords2 = (para, wrd) => {
  let count = 0;
  const words = para.split(" "); // spliting the paragraph into array of words
  //iterating through words array and checking if the target word is in the array
  for (const word of words) {
    //includes or startsWith could give the same result
    if (word.toLowerCase().includes(wrd.toLowerCase())) {
      console.log(word);
      count++;
    }
  }
  return count;
};
console.log(countWords2(paragraph, "love"));

/* ======================================== QUESTION 2 ======================================================
    Write a function which takes an array as a parameter and returns an array of the data types of each item:
   ========================================================================================================== */
const arr = ["Asabeneh", 100, true, null, undefined, { job: "teaching" }];
const checkDataTypes = arr => {
  const dataTypes = []; // creating an empty array
  let type; // will be used in the loop to store the data type of each element in the array
  for (const element of arr) {
    type = typeof element; // type checking of each elements
    dataTypes.push(type);
  }
  return dataTypes; // returning the above array which contains all the datatypes of the elements
};
console.log(checkDataTypes(arr));

/* ========================= QUESTION 3 ==============================
   Create a function which filter ages greater than 18 from ages array.
   const ages = [35, 30, 17, 18, 15, 22, 16, 20];
   console.log(agesGreaterEighteen(ages));
   [35, 30, 22, , 20];
  =================================================================== */

const ages = [35, 30, 17, 18, 15, 22, 16, 20];
const agesGreaterEighteen = ages => {
  const agesGreater18 = []; // creating an empty array to store ages which are abover 18
  //iterating through the ages array
  for (const age of ages) {
    //checking if the age if it is greater than 18
    if (age > 18) {
      agesGreater18.push(age); //
    }
  }
  return agesGreater18;
};
console.log(agesGreaterEighteen(ages));
/* ======================== QUESTION 4 ===========================
   Write a function which calculate the average age of the group.
  ================================================================ */
const averageAge = ages => {
  let sum = 0; // an accumulator to sum all the ages
  for (const age of ages) {
    // adding each age to the sum varaible
    sum += age;
  }
  return Math.round(sum / ages.length); // rounding the number to the closest integer
};
console.log(averageAge(ages));

/* ======================== QUESTION 5 ===========================
  Write a function which remove an item or items from the middle of the array and replace with two items
  ================================================================ */
const products = ["Milk", "Coffee", "Tea", "Honey", "Meat", "Cabage"];
const removeMiddleItem = (arr, ...items) => {
  let middleIndex; // to store the middle index of the array,
  if (arr.length % 2 === 0) {
    //if the array length is even
    middleIndex = arr.length / 2 - 1;
    //splice takes starting point, number of items to remove and items to replace
    arr.splice(middleIndex, 2, ...items);
  } else {
    //if the array length is odd
    middleIndex = Math.floor(arr.length / 2);
    console.log(middleIndex);
    arr.splice(middleIndex, 1, ...items);
  }

  return arr;
};
console.log(removeMiddleItem(products, "potato", "banana"));

/* ====================== QUESTION 6 ==============================================
   Write a function which can generate a random Finnish car code(Car plate number).
   console.log(genCarPlateNum())
   AFG-205
   console.log(genCarPlateNum())
   JCB-586
   ================================================================================ */

const genCarPlateNum = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let lettersPart = ""; // variable to store, the letters part
  let numbersPart = ""; // variable to store, the letters part
  let indexOne; // random index to extract one of the letter at a time from letters array
  let indexTwo; // random index to extract one of the number at a time from numbers array
  for (let i = 0; i < 3; i++) {
    indexOne = Math.floor(Math.random() * letters.length);
    indexTwo = Math.floor(Math.random() * numbers.length);
    lettersPart += letters[indexOne];
    numbersPart += numbers[indexTwo];
  }
  return `${lettersPart}-${numbersPart}`;
};
console.log(genCarPlateNum());
/* ======================================= QUESTION 7 =============================================
  The following shopping cart has four products. 
  Create an addProduct, removeProduct ,editProduct , removeAll functions to modify the shopping cart.
    const shoppingCart = ['Milk','Coffee','Tea', 'Honey'];
    addProduct( "Meat");
    ["Milk", "Coffee", "Tea", "Honey", "Meat"]
    editProduct(3, "Sugar" );
    ["Milk", "Coffee", "Tea", "Sugar", "Meat"]
    removeProduct(0);
    ["Coffee", "Tea", "Sugar", "Meat"]
    removeProduct(3);
    ["Coffee", "Tea", "Sugar"]
 ================================================================================================= */
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
const addProduct = (products, product) => {
  products.push(product);
  return products;
};
addProduct(shoppingCart, "Meat");
console.log(shoppingCart);
const editProduct = (products, index, product) => {
  products[index] = product;
  return products;
};
editProduct(shoppingCart, 3, "Sugar");
console.log(shoppingCart);
const removeProduct = index => {
  shoppingCart.splice(index, 1);
  return shoppingCart;
};
removeProduct(0);
console.log(shoppingCart);
removeProduct(3);
console.log(shoppingCart);

/* ======================== QUESTION 8 ========================================
    Write a function which can generate a random Finnish social security number.
      console.log(genSocialSecurityNum())
    220590 - 255H
    console.log(genSocialSecurityNum())
    190395 - 225J
  ============================================================================= */
const genSocialSecurityNum = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let index = Math.floor(Math.random() * letters.length);
  const letter = letters[index]; // getting a letter from the letters array
  let date = Math.floor(Math.random() * 31) + 1; // date from 1 to 31
  let month = Math.floor(Math.random() * 12) + 1; // month from 1 to 12

  //if the date or month is less than 10
  if (date < 10) date = "0" + date;
  if (month < 10) month = "0" + month;

  let year = Math.floor(Math.random() * 2019);
  if (year > 100) {
    year = year.toString().substr(-2);
  } else if (year < 10) {
    year = "0" + year;
  }

  let suffix = "";
  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * numbers.length);
    suffix += numbers[randomIndex];
  }

  return `${date}${month}${year}-${suffix}${letter}`;
};
console.log(genSocialSecurityNum());

/* ========================================= QUESTION 9 =======================================================
  The following todoList has three tasks.
  Create an addTask, removeTask, editTask, toggleTask, toggleAll, removeAll functions to modify the todoList.
  const todoList = [
  {
    task:'Prepare JS Test',
    time:'4/3/2019 8:30',
    completed:true
    
  },
  {
    task:'Give JS Test',
    time:'4/3/2019 10:00',
    completed:false
    
  },
  {
    task:'Assess Test Result',
    time:'4/3/2019 1:00',
    completed:false
    
  }]
========================================================================================================= */
const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/3/2019 8:30",
    completed: true
  },
  {
    task: "Give JS Test",
    time: "4/3/2019 10:00",
    completed: false
  },
  {
    task: "Assess Test Result",
    time: "4/3/2019 1:00",
    completed: false
  }
];

// function to generate date, month, year, hour and minute : day/month/year hh:mm
const displayDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${date}/${month}/${year} ${hours}:${minutes}`;
};

const addTask = task => {
  const time = displayDateTime();
  const completed = false;
  const newTask = { task, time, completed };
  todoList.push(newTask);
};
const editTask = (index, task) => {
  todoList[index].task = task;
};

const removeTask = index => {
  todoList.splice(index, 1);
};
const toggleTask = (index, task) => {
  todoList[index].completed = !todoList[index].completed;
};
const toggleAll = arr => {
  let completedTodos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].completed) {
      completedTodos++;
    }
    if (completedTodos === arr.length) {
      for (let i = 0; i < arr.length; i++) {
        arr[i].completed = !arr[i].completed;
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        arr[i].completed = true;
      }
    }
  }
  return arr;
};
console.log(toggleAll(todoList));
const removeAll = () => {
  todoList = [];
  return todoList;
};
console.log(todoList);

/* ========================= QUESTION 10 =========================
  Write a function which check if items of an array are unique?
  const arrOne = [1, 4, 6, 2, 1];
  console.log(checkUniqueness(arrOne));
  false
  const arrTwo = [1, 4, 6, 2, 3]
  console.log(checkUniqueness(arrTwo));
  true
================================================================== */
const checkUniqueness = arr => {
  let uniquenesFlag = true;
  for (const element of arr) {
    if (arr.indexOf(element) !== arr.lastIndexOf(element)) {
      uniquenesFlag = false;
      break;
    }
  }
  return uniquenesFlag;
};
const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne));

const arrTwo = [1, 4, 6, 2, 3];
console.log(checkUniqueness(arrTwo));
/* ====================== QUESTION 11 ==========================================================
   Write a function named shuffle, it takes an array parameter and it returns a shuffled array.
  ============================================================================================= */
const shuffle = arr => {
  const shuffledArray = []; // empty array to store shaffled array
  let index; // random index which we use to take element from the original array
  let element; // the item we get using the random index will be stored in element
  while (shuffledArray.length !== arr.length) {
    index = Math.floor(Math.random() * arr.length);
    element = arr[index];
    if (shuffledArray.indexOf(element) === -1) {
      shuffledArray.push(element);
    }
  }
  return shuffledArray;
};
console.log(shuffle([1, 2, 3, 4, 5]));

/* =============================== Bonus =============================================
    Write a function which filter users who has scoresGreaterThan85.
    Write a function which addUser to the user array only if the user does not exist. 
    Write a function which addUserSkill which can add skill to a user only if the user exist.
    Write a function which editUser if the user exist in the users array.
   ========================================================================================== */
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTM"],
    age: 25
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20
  }
];

const scoresGreaterThan85 = arr => {
  const scores = [];
  for (const element of arr) {
    if (element.scores > 85) {
      scores.push(element.scores);
    }
  }
  return scores;
};

console.log(scoresGreaterThan85(users));
const user = {
  name: "Asabeneh",
  scores: 800,
  skills: ["HTML", "CSS", "JS"],
  age: 250
};
const addUser = (arr, user) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["name"] === user.name) {
      return " A user does exist";
    }
  }
  arr.push(user);
  return arr;
};
console.log(addUser(users, user));

const addUserSkill = (arr, name, skill) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["name"] === name) {
      arr[i].skills.push(skill);
      break;
    } else {
      return "A user does not exist";
    }
  }

  return arr;
};
console.log(addUserSkill(users, "Brook", "Node"));

const editUser = (arr, name, newUser) => {
  for (const user of arr) {
    if (user["name"] === name) {
      user.name = newUser.name;
      user.scores = newUser.scores;
      user.skills = newUser.skills;
      user.age = newUser.age;
    } else {
      return "A user does not exist";
    }
  }

  return arr;
};
// console.log(editUser(users, "Brook", user));
// console.log(users);
