/* =============================== QUESTION 1 ================================================
    Create a function which solve quadratic equation ax2 + bx + c = 0. 
    A quadratic equation may have one, two or no solution. 
    The function should return a set of the solution(s).
  ============================================================================================ */
const solveQuadratic = (a = 1, b = 0, c = 0) => {
  if (a === 0) {
    return 'Not a quadratic equation';
  }
  const determinate = b ** 2 - 4 * a * c;
  const solnSet = new Set();

  let root1, root2;
  if (determinate === 0) {
    root1 = -b / (2 * a);
    solnSet.add(root1);
  } else if (determinate > 0) {
    root1 = ((-b + Math.sqrt(determinate)) / 2) * a;
    root2 = ((-b - Math.sqrt(determinate)) / 2) * a;
    solnSet.add(root1);
    solnSet.add(root2);
  } else {
  }
  return solnSet;
};
console.log(solveQuadratic()); //Set(1) {0}
console.log(solveQuadratic(1, 2, 3)); // Set(0) {}
console.log(solveQuadratic(1, 4, 4)); //Set(1) {-2}
console.log(solveQuadratic(1, -1, -2)); //{2, -1}
console.log(solveQuadratic(1, 7, 12)); //Set(2) {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}
/* =============================== QUESTION 2 ================================================
    Create a function called isPrime which check if a number is prime or not.
  ============================================================================================*/
const isPrime = n => {
  let prime = false;
  if (n < 2) {
    prime = false;
  }
  if (n === 2) {
    prime = true;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      prime = false;
      break;
    } else {
      prime = true;
    }
  }
  return prime;
};

console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(5)); // true

/* =============================== QUESTION 3 ================================================
    Write a function rangeOfPrimes. 
    It takes two parameters, a starting number and an ending number .
    The function returns an object with properties primes and count.
    The primes value is an array of prime numbers and 
    count value is the number of prime numbers in the array.
     See example
  ============================================================================================ */

const rangeOfPrimes = (start, end) => {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  const count = primes.length;
  return { primes, count };
};
console.log(rangeOfPrimes(2, 11)); //{primes:[2, 3, 5, 7, 11], count:5}
console.log(rangeOfPrimes(50, 60)); //{primes:[53, 59], count:2}
console.log(rangeOfPrimes(95, 107)); //{primes:[97, 101, 103, 107], count:4}
/* =============================== QUESTION 4 ================================================
    Create a function called isEmpty which check if the parameter is empty. 
    If the parameter is empty, it returns true else it returns false.
  ============================================================================================ */
const isEmpty = value => {
  return (
    value === null ||
    value === undefined ||
    (typeof value === 'string' && value.trim().length === 0) ||
    (value.construtor === Array && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  );
};
console.log(isEmpty('')); // true
console.log(isEmpty(' ')); // true
console.log(isEmpty('Asabeneh')); // false
console.log(isEmpty([])); // true
console.log(isEmpty(['HTML', 'CSS', 'JS'])); // false;
console.log(isEmpty({})); //true
console.log(isEmpty({ name: 'Asabeneh', age: 200 })); // false

/* =============================== QUESTION 5 ================================================
   a. Create a function called reverse which take a parameter and it returns the reverse of the parameter.
   Don't use the built in reverse method.
  b. Create a function called isPalindrome which check if a parameter is a palindrome or not.
    Use the function from a to reverse words.
============================================================================================ */
//5a
const reverse = value => {
  let reversed = '';
  if (typeof value === 'number') {
    const formatedValue = value.toString();
    const len = formatedValue.length;
    for (let i = len - 1; i >= 0; i--) {
      reversed += formatedValue[i];
    }
  } else if (typeof value === 'string') {
    const formatedValue = value
      .trim()
      .replace(/\W/g, '')
      .toLowerCase();
    let len = formatedValue.length;
    for (let i = len - 1; i >= 0; i--) {
      reversed += formatedValue[i];
    }
  } else {
    return 'Not a valid parameter';
  }
  return reversed;
};
console.log(reverse('car'));
console.log(reverse('Cat '));
console.log(reverse('Tuna nut.'));
console.log(reverse('A nut for a jar of tuna.'));
// end of 5a

//5b
const isPalindrome = value => {
  let isPalindrome = false;
  if (typeof value === 'number') {
    const formatedValue = value.toString();
    if (reverse(formatedValue) === formatedValue) {
      isPalindrome = true;
    }
  } else if (typeof value === 'string') {
    const formatedValue = value
      .trim()
      .replace(/\W/g, '')
      .toLowerCase();
    if (reverse(formatedValue) === formatedValue) {
      isPalindrome = true;
    }
  } else {
    return 'Not a valid parameter';
  }
  return isPalindrome;
};
console.log(isPalindrome('Anna')); //true
console.log(isPalindrome(121)); //true
console.log(isPalindrome('Noon')); //true
console.log(isPalindrome('Asa ')); //true
console.log(isPalindrome('Asab')); //false
console.log(isPalindrome('cat')); //false
console.log(isPalindrome('Tuna nut.')); // true
console.log(isPalindrome('A nut for a jar of tuna.')); // true
console.log(isPalindrome('A man, a plan, a canal. Panama'));
/* =============================== QUESTION 6 =============================================
    Create a function called countPalindrowWords which counts the number of palindrome words in
   the palindoromeWords array or in any array.
  =========================================================================================== */
const words = [
  'Anna',
  'Asa',
  'Civic',
  'common',
  'Kayak',
  'Level',
  'Madam',
  'Mom',
  'Noon ',
  'Rotor',
  'Sagas ',
  'Solar',
  'Stats',
  'Tenet ',
  'Wow'
];

const countPalindrowWords = arr => {
  let count = 0;
  for (const word of arr) {
    if (isPalindrome(word)) {
      count++;
    }
  }
  return count;
};
console.log(countPalindrowWords(words)); // 13

/* =============================== QUESTION 7 =============================================
   Count the number of palindrome words in the following sentence.
  =========================================================================================== */
const sentence = `He met his mom at noon and she was watching an epsoide of the begninging of her Solos. Her tenet helped her to level up her stats. After that he went to kayak driving Civic Honda.`;
const countPalindrowWords2 = sent => {
  const words = sent.split(' ');
  const palindromeWords = [];
  let count = 0;
  for (const word of words) {
    if (isPalindrome(word)) {
      count++;
      palindromeWords.push(word);
    }
  }
  return { count, words: palindromeWords };
};
console.log(countPalindrowWords2(sentence));
//{count:8, words:["mom", "noon", "Solos.", "tenet", "level", "stats.", "kayak", "Civic"]}

const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '17/05/2019 9:00 AM',
    isLoggedIn: false
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '17/05/2019 9:30 AM',
    isLoggedIn: true
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '17/05/2019 9:45 AM',
    isLoggedIn: true
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '17/05/2019 9:50 AM',
    isLoggedIn: false
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '17/05/2019 10:00 AM',
    isLoggedIn: false
  }
];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [{ userId: 'fg12cy', rate: 5 }, { userId: 'zwf8md', rate: 4.5 }],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
];

/* =============================== QUESTION 8 =============================================
    Imagine you are getting the above users collection from a MongoDB database.
    a. Create a function called signUp which allows user to add to the collection. 
    If user exists, inform the user that he has already an account.
    b. Create a function called signIn which allows user to sign in to the application
  =========================================================================================== */

const randomId = () => {
  const numbersLetters = '0123456789abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
    ''
  );
  let randId = '';
  let randIndex;
  for (let i = 0; i < 6; i++) {
    randIndex = Math.floor(Math.random() * numbersLetters.length);
    randId += numbersLetters[randIndex];
  }
  return randId;
};
const newUser = {
  _id: randomId(),
  username: 'Asabeneh',
  email: 'asabeneh@asabeneh.com',
  password: '123123123',
  createdAt: new Date(),
  isLoggedIn: false
};
const signUp = () => {
  const { email } = newUser;
  for (const user of users) {
    if (user['email'] == email) {
      return 'An email has already exist. Please log in!';
    }
  }
  users.push(newUser);
  return 'You have successfully signed up!';
};
console.log(users);
console.log(signUp(newUser));
console.log(signUp(newUser));
console.log(users);
const currentUser = {
  email: 'asabeneh@asabeneh.com',
  password: '123123123'
};
const signIn = user => {
  let found = false;
  const { email, password } = user;
  for (let i = 0; i < users.length; i++) {
    if (users[i]['email'] === email && users[i]['password'] === password) {
      users[i].isLoggedIn = true;
      return 'Successfully logged in';
    }
  }
  if (!found) {
    return 'Use does not exist';
  }
};
console.log(signIn(currentUser));
console.log(users);
console.log(signIn({ email: 'asab@asab.com', password: '123456' }));
/* =============================== QUESTION 9 =============================================
    The products array has three elements and each of them has six properties.
    a. Create a function called rateProduct which rates the product
    b. Create a function called averageRating which calculate the average rating of a product
  =========================================================================================== */
//a
const rateProduct = (productId, userId, ratingPoint) => {
  let found = false;
  for (let i = 0; i < products.length; i++) {
    if (products[i]._id === productId) {
      for (let j = 0; j < products[i].ratings.length; j++) {
        if (products[i].ratings[j].userId === userId) {
          const rate = { userId, rate: ratingPoint };
          products[i].ratings[j].rate = ratingPoint;
          found = true;
          break;
        }
      }
      if (!found) {
        products[i].ratings.push({ userId, rate: ratingPoint });
      }
    }
  }
};
console.log(products);
rateProduct('eedfcf', 'fg12cy', 5);
rateProduct('aegfal', 'fg12cy', 2.5);
rateProduct('aegfal', 'fg12cy', 2.0);
console.log(products);
//b
const averageRating = productId => {
  let sum = 0;
  let len; // number of ratings
  for (let i = 0; i < products.length; i++) {
    if (products[i]._id === productId) {
      len = products[i].ratings.length;
      for (let j = 0; j < len; j++) {
        if (len === 0) {
          return 0;
        } else {
          sum += products[i].ratings[j].rate;
        }
      }
    }
  }
  console.log(len);
  return sum / len;
};
console.log(averageRating('eedfcf'));

/* =============================== QUESTION 10 =============================================
  Create a function called likeProduct.
  This function will helps to like to the product if it is not liked and remove like if it was liked.
  =========================================================================================== */
const likeProduct = (productId, userId) => {
  for (let i = 0; i < products.length; i++) {
    if (products[i]._id === productId) {
      const likes = products[i].likes;
      const index = products[i].likes.indexOf(userId);
      if (index !== -1) {
        products[i].likes.splice(index, 1);
      } else {
        products[i].likes.push(userId);
      }
    }
  }
};
console.log(likeProduct('aegfal', 'fg12cy'));
console.log(likeProduct('eedfcf', 'fg12cy'));
