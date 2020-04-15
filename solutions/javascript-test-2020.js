console.log('==================== BEGIN Q1 ============================ ')
/* === Question 1 === */
// 1. 1
const printHashes = () => {
  let hash = ''
  for (let i = 0; i < 7; i++) {
    hash += '#'
    console.log(hash)
  }
}

printHashes()
console.log('----------------------------------------------------------- ')

// 1. 2
const multiplicationTable = n => {
  for (let i = 0; i < n; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
  }
}

multiplicationTable(11)
console.log('----------------------------------------------------------- ')

// 1. 3
const exponentialTable = () => {
  console.log(`i\ti^2\t^3`)
  for (let i = 0; i < 11; i++) {
    console.log(`${i}\t${i ** 2}\t${i ** 3}`)
  }
}

exponentialTable()
console.log('----------------------------------------------------------- ')

// 1. 4
const countries = [
  'ALBANIA',
  'BOLIVIA',
  'CANADA',
  'DENMARK',
  'ETHIOPIA',
  'FINLAND',
  'GERMANY',
  'HUNGARY',
  'IRELAND',
  'JAPAN',
  'KENYA'
]
// const createArrayOfArrays = arr => {
//   const newArray = []
//   for (const element of arr) {
//     let name = element[0] + element.slice(1).toLowerCase()
//     newArray.push([name, element.slice(0, 3), element.length])
//   }
//   return newArray
// }

const createArrayOfArrays = arr =>
  arr.map(country => {
    let name = country[0] + country.slice(1).toLowerCase()
    return [name, country.slice(0, 3), country.length]
  })

console.log(createArrayOfArrays(countries))

console.log('==================== END Q1   ============================ ')

console.log('==================== BEGIN Q2 ============================ ')
/* === Question 2 === */
// 2. 1
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
]

const printProductItems = arr => {
  for (const { product, price } of arr) {
    let formattedPrice = typeof price == 'number' ? price : 'unknown'
    console.log(`The price of ${product} is ${formattedPrice}`)
  }
}

printProductItems(products)
console.log('----------------------------------------------------------- ')

// 2. 2
const sumOfAllPrices = arr => {
  let total = 0
  for (const { price } of arr) {
    if (typeof price == 'number') {
      total += price
    }
  }
  return total
}

console.log('the sum of all  prices using for of', sumOfAllPrices(products))
console.log('----------------------------------------------------------- ')

// 2. 3
const total = products
  .map(prod => prod.price)
  .filter(price => typeof price == 'number')
  .reduce((curr, acc) => curr + acc)

console.log('total from method chaining', total)
console.log('----------------------------------------------------------- ')

// 2. 4
const totalUsingReduce = products.reduce((accu, curr) => {
  let price = typeof curr.price == 'number' ? curr.price : 0
  return accu + price
}, 0)

console.log('reduce total', totalUsingReduce)
console.log(sumOfAllPrices(products))
console.log('==================== END Q2   ============================ ')

console.log('==================== BEGIN Q3 ============================ ')
/*=== Question 3 === */

// 3. 1
const howManyDaysInMonth = () => {
  const userInput = prompt('Enter a month: ')
    .trim()
    .toLowerCase()

  const firstLetter = userInput[0].toUpperCase()
  const remainingStr = userInput.slice(1)
  const month = firstLetter + remainingStr

  let statement
  let days
  switch (userInput) {
    case 'february':
      days = 28
      statement = `${month} has ${days} days.`
      break
    case 'april':
    case 'june':
    case 'september':
    case 'november':
      days = 30
      statement = `${month} has ${days} days.`
      break
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
      days = 31
      statement = `${month} has ${days} days.`
      break
    default:
      return 'The given value is not a month'
  }
  return statement
}

console.log(howManyDaysInMonth())
console.log('----------------------------------------------------------- ')

// 3. 2
const generate = (type = 'id') => {
  const randomId = (n = 6) => {
    const str = '0123456ABCDEFGHIJKLMNOPKRSTUVWXYZabcdefghihjklmnopqrstuvwxyz'
    let id = ''
    for (let i = 0; i < n; i++) {
      let index = Math.floor(Math.random() * str.length)
      id = id + str[index]
    }
    return id
  }

  const hexaColor = function() {
    let st = '0123456789abcdef'.split('')
    let color = '#'
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * st.length)
      color += st[index]
    }
    return color
  }

  const rgbColor = function() {
    let redColor = Math.floor(Math.random() * 256)
    let greenColor = Math.floor(Math.random() * 256)
    let blueColor = Math.floor(Math.random() * 256)

    const rgb = `rgb(${redColor},${greenColor},${blueColor})`
    return rgb
  }
  switch (type.toLowerCase()) {
    case 'id':
      return randomId()
    case 'hexa':
    case 'hexadecimal':
      return hexaColor()
    case 'rgb':
      return rgbColor()
    default:
      return 'Not a valid format'
  }
}

console.log(generate())
console.log(generate('id'))
console.log(generate('hexa'))
console.log(generate('hexadecimal'))
console.log(generate('rgb'))
console.log(generate('RGB'))
console.log(generate('rgb'))

console.log('==================== END Q3   ============================ ')

console.log('==================== BEGIN Q4 ============================ ')

/*=== Question 4 ==== */

// 4. 1
const countries2 = [
  'ALBANIA',
  'BOLIVIA',
  'CANADA',
  'DENMARK',
  'ETHIOPIA',
  'FINLAND',
  'GERMANY',
  'HUNGARY',
  'IRELAND',
  'JAPAN',
  'KENYA'
]

const c = ['ESTONIA', 'FRANCE', 'GHANA']
countries2.splice(4, 3, ...c)
console.log(countries2)
console.log('----------------------------------------------------------- ')

// 4. 2
const checkUniqueness = arr => {
  for (const element of arr) {
    if (arr.indexOf(element) !== arr.lastIndexOf(element)) {
      return false
    }
  }
  return true
}
const arrOne = [1, 4, 6, 2, 1]
console.log(checkUniqueness(arrOne)) // false
const arrTwo = [1, 4, 6, 2, 3]
console.log(checkUniqueness(arrTwo)) // true
console.log('----------------------------------------------------------- ')

// 4. 3
const checkDataTypes = (arr, type) => arr.every(elem => typeof elem === type)

const numbers = [1, 3, 4]
const names = ['Asab', '30DaysOfJavaScript']
const bools = [true, false, true, true, false]
const mixedData = ['Asab', 'JS', true, 2019, { name: 'Asab', lang: 'JS' }]
const obj = [{ name: 'Asab', lang: 'JS' }]
console.log(checkDataTypes(numbers, 'number')) // true
console.log(checkDataTypes(numbers, 'string')) // false
console.log(checkDataTypes(names, 'string')) // true
console.log(checkDataTypes(bools, 'boolean')) // true
console.log(checkDataTypes(mixedData, 'boolean')) // false
console.log(checkDataTypes(obj, 'object')) // true

console.log('==================== END Q4   ============================ ')

console.log('==================== BEGIN Q5 ============================ ')
/*=== Question 5 ==== */

// 5. 1
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack
console.log(frontEnd, backEnd)
console.log('----------------------------------------------------------- ')

// 5. 2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [
  name,
  [html, css, js, react],
  [htmlScore, cssScore, jsScore, reactScore]
] = student
console.log(
  name,
  html,
  css,
  js,
  react,
  htmlScore,
  cssScore,
  jsScore,
  reactScore
)
console.log('----------------------------------------------------------- ')

// 5. 3
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

// one way
// const convertArrayToObject = arr => {
//   const newArray = []
//   for (const [name, skills, scores] of arr) {
//     newArray.push({ name, skills, scores })
//   }
//   return newArray
// }

// another way
const convertArrayToObject = arr =>
  arr.map(([name, skills, scores]) => {
    return { name, skills, scores }
  })

console.log(convertArrayToObject(students))
console.log('==================== END Q5   ============================ ')

console.log('==================== BEGIN Q6 ============================ ')
/*=== Question 6 ==== */

// 6. 1
const sumOfAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumOfAllNums(2, 3, 1)) // 6
console.log(sumOfAllNums(1, 2, 3, 4, 5)) // 15
console.log(sumOfAllNums(1000, 900, 120)) // 2020

function sumOfAllNums2() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumOfAllNums2(2, 3, 1)) // 6
console.log(sumOfAllNums2(1, 2, 3, 4, 5)) // 15
console.log(sumOfAllNums2(1000, 900, 120)) // 2020
console.log('----------------------------------------------------------- ')

// 6. 2
const [x, y] = [2, a => a ** 2 - 4 * a + 3]
const valueOfX = x // 2
const valueOfY = y // (a) => a ** 2 - 4 * a + 3
console.log(valueOfX, valueOfY)
console.log(y(x)) // -1
console.log('----------------------------------------------------------- ')

// 6. 3

const studentObj = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 }
    ],
    dataBase: [{ skill: 'MongoDB', level: 7.5 }],
    dataScience: ['Python', 'R', 'D3.js']
  }
}
const devOps = [
  { skill: 'AWS', level: 7 },
  { skill: 'Jenkin', level: 7 },
  { skill: 'Git', level: 8 }
]
const copiedStudentObj = {
  ...studentObj,
  skills: {
    ...studentObj.skills,
    frontEnd: [...studentObj.skills.frontEnd, { skill: 'Bootstrap', level: 8 }],
    backEnd: [...studentObj.skills.backEnd, { skill: 'Express', level: 8 }],
    dataBase: [...studentObj.skills.dataBase, { skill: 'SQL', level: 8 }],
    dataScience: [...studentObj.skills.dataScience, 'SQL'],
    devOps: [...devOps]
  }
}
console.log(copiedStudentObj)
console.log('==================== END Q6   ============================ ')

console.log('==================== BEGIN Q7 ============================ ')
/*=== Question 7 ==== */

// 7. 1
const showDateTime = (format = 'dd/mm/yyyy') => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const now = new Date()
  const year = now.getFullYear()
  const month = months[now.getMonth()]
  const mm = now.getMonth() + 1
  const date = now.getDate()
  const dd = now.getDate()
  let hours = now.getHours()
  let hh = now.getHours()
  let minutes = now.getMinutes()

  let seconds = now.getSeconds()
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  const dateMonthYear = `${month} ${date}, ${year}`

  const time = hours + ':' + minutes
  const fullTime = dateMonthYear + ' ' + time
  //   return fullTime + `:${seconds}`
  switch (format) {
    case 'dd/mm/yyyy':
      return `${dd}/${mm}/${year}`
    case 'dd-mm-yyyy':
      return `${dd}-${mm}-${year}`
    case 'dd/mm/yyyy hh:mm':
      return `${dd}/${mm}/${year} ${hours}:${minutes}`
    case 'dd-mm-yyyy hh:mm':
      return `${dd}-${mm}-${year} ${hours}:${minutes}`
    case 'MMM DD, YYYY':
      return `${month} ${dd}, ${year}`
    case 'MMM DD, YYYY hh:mm':
      return `${month} ${dd}, ${year} ${hours}:${minutes}`

    default:
      return `${dd}/${mm}/${year}`
  }
}

console.log(showDateTime())
console.log(showDateTime('dd-mm-yyyy'))
console.log(showDateTime('dd-mm-yyyy hh:mm'))
console.log(showDateTime('dd/mm/yyyy hh:mm'))
console.log(showDateTime('Month DD, YYYY'))
console.log(showDateTime('MMM DD, YYYY hh:mm'))
console.log('----------------------------------------------------------- ')
// 7. 1

const todoList = [
  {
    task: 'Prepare JS Test',
    time: '5/4/2020 8:30',
    completed: true
  },
  {
    task: 'Give JS Test',
    time: '6/4/2020 10:00',
    completed: false
  },
  {
    task: 'Assess Test Result',
    time: '4/3/2019 1:00',
    completed: false
  }
]

const addTask = task => {
  const time = showDateTime('dd-mm-yyyy hh:mm')
  const completed = false
  todoList.push({ task, time, completed })
}

const removeTask = index => {
  todoList.splice(index, 1)
}

const editTask = (index, newTask) => {
  todoList[index].task = newTask
  todoList.push({ task, time, completed })
}
const toggleTask = index => {
  todoList[index].completed = !todoList[index].completed
}

const toggleAll = () => {
  const checkCompleted = todoList.filter(todo => todo.completed === true).length
  if (checkCompleted.length === todoList.length) {
    for (const item of todoList) {
      item.completed = !item.completed
    }
  } else {
    for (const item of todoList) {
      item.completed = true
    }
  }
}

console.log(todoList)

toggleAll()
console.log(todoList)

const removeAll = () => {
  // todoList = []
  todoList.splice()
}
console.log('==================== END Q7   ============================ ')

console.log('==================== BEGIN Q8 ============================ ')

/*=== Question 8 ==== */

// 8. 1

// generic function to sort items both for string and number
const sortItems = (arr, key) => {
  const copiedArr = [...arr]
  copiedArr.sort((a, b) => {
    if (a[key] > b[key]) return -1
    if (a[key] < b[key]) return 1
    else return 0
  })
  return copiedArr
}

const largestCountries = async (n = 10) => {
  const API_URL = 'https://restcountries.eu/rest/v2/all'
  const countriesArea = []
  const response = await fetch(API_URL)
  const data = await response.json()

  for (const { name, area } of data) {
    countriesArea.push({ country: name, area })
  }

  const countriesSortedByArea = sortItems(countriesArea, 'area').slice(0, n)
  console.log(`${n} most largest countries`, countriesSortedByArea)
}

largestCountries(10)

const numberOfLanguages = async () => {
  const API_URL = 'https://restcountries.eu/rest/v2/all'
  const langSet = new Set()
  const response = await fetch(API_URL)
  const data = await response.json()

  for (const { languages } of data) {
    for (const { name } of languages) {
      langSet.add(name)
    }
  }

  console.log(Array.from(langSet).sort())
  console.log(
    'Total number of langauges in the countries API:',
    Array.from(langSet).length
  )
  console.log('----------------------------------------------------------- ')
}
numberOfLanguages()

const mostSpokenLanguages = async (n = 10) => {
  const API_URL = 'https://restcountries.eu/rest/v2/all'
  const langSet = new Set()
  const allLangArr = []
  const languageFrequency = []

  try {
    const response = await fetch(API_URL)
    const data = await response.json()

    for (const { languages } of data) {
      for (const { name } of languages) {
        allLangArr.push(name)
        langSet.add(name)
      }
    }

    for (l of langSet) {
      const x = allLangArr.filter(ln => l == ln)
      languageFrequency.push({
        lang: l,
        count: x.length
      })
    }

    const sortedLanguages = sortItems(languageFrequency, 'count').slice(0, n)
    console.log(`${n} most spoken languages`, sortedLanguages)
  } catch {
    console.log('Something goes wrong')
  }
  console.log('----------------------------------------------------------- ')
}

console.log('Most spoken languages', mostSpokenLanguages(15))

// 8.2

const add = (a, b) => {
  if (b) {
    return a + b
  }
  if (!a) {
    return 'at least one parameter is required'
  }
  return b => a + b
}
console.log(add(2, 3))
console.log(add())
console.log(add(2)(3))

console.log('==================== END Q8   ============================ ')

console.log('==================== BEGIN Q9 ============================ ')

/*=== Question 9 ==== */
/*
9.1 What is the difference between forEach, map, filter and reduce? (1 pt)
9.2 What is the difference between find and filter? (1pt)
9.3 Which of the following mutate array: map, filter, reduce, slice, splice, concat, sort, some? (2pt) only splice and sort modify an array
*/

const generateColor = (type = 'hexa', n = 1) => {
  const hexaColor = function() {
    let st = '0123456789abcdef'.split('')
    let color = '#'
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * st.length)
      color += st[index]
    }
    return color
  }

  const rgbColor = function() {
    let redColor
    let greenColor
    let blueColor

    redColor = Math.floor(Math.random() * 256)
    greenColor = Math.floor(Math.random() * 256)
    blueColor = Math.floor(Math.random() * 256)
    const rgb = `rgb(${redColor},${greenColor},${blueColor})`
    return rgb
  }

  const rgbColors = []
  const hexaColors = []
  if (n > 1) {
    if (type == 'hexa') {
      for (let i = 0; i < n; i++) {
        hexaColors.push(hexaColor())
      }
    } else if (type == 'rgb') {
      for (let i = 0; i < n; i++) {
        rgbColors.push(rgbColor())
      }
    }
  }

  switch (type) {
    case 'hexa':
      const hexa = n > 1 ? hexaColors : hexaColor()
      return hexa
    case 'rgb':
      const rgb = n > 1 ? rgbColors : rgbColor()
      return rgb
    default:
      return hexaColor()
  }
}

console.log(generateColor())
console.log(generateColor('hexa'))
console.log(generateColor('rgb'))
console.log(generateColor('hexa', 3))
console.log(generateColor('rgb', 3))
console.log('==================== END Q9    ============================ ')

console.log('==================== BEGIN Q10 ============================ ')

/*=== Question 10 ==== */

const para = `Studies that estimate and rank the most common words in English examine texts written in English. Perhaps the most comprehensive such analysis is one that was conducted against the Oxford English Corpus (OEC), a very large collection of texts from around the world that are written in the English language. A text corpus is a large collection of written works that are organised in a way that makes such analysis easier.`

const cleanText = txt => {
  const pattern = /[^\w ]/g
  return txt.replace(pattern, '')
}

const mostFrequentWord = (txt, n = 10) => {
  const cleanedText = cleanText(txt)
  const words = cleanedText.split(' ')
  const map = new Map()
  for (const word of words) {
    if (map.has(word)) {
      let count = map.get(word.toLowerCase()) + 1
      map.set(word.toLowerCase(), count)
    } else {
      map.set(word.toLowerCase(), 1)
    }
  }

  return Array.from(map)
    .map(([word, count]) => {
      return { word, count }
    })
    .slice(0, n)
}

console.log('Most frequent words', sortItems(mostFrequentWord(para), 'count'))
console.log('----------------------------------------------------------- ')

// 10. 2
const sentence = `@He@ @%met%^$##%# his mom at no@on and s@he was watching %^$#an epso@ide%^$# of the begni@nging of her Sol@os. Her te@net%^$# hel@ped %^$#her to le@vel up her stats. %^$#After that h@e went to %^$#kayak driving Civic %^$#Honda.`

const cleanedText = cleanText(sentence)
console.log(cleanedText)
console.log('----------------------------------------------------------- ')

// 10. 3
const checkPalindrome = param => {
  const word = typeof param == 'number' ? param.toString() : param
  let invertedWord = ''
  for (let i = word.length - 1; i >= 0; i--) {
    invertedWord += word[i]
  }
  return word.toLowerCase() === invertedWord.toLowerCase()
}

console.log('Check palindrome the number 123:', checkPalindrome(323))
console.log('Check palindrome the word anna:', checkPalindrome('anna'))
console.log('Check palindrome the word He:', checkPalindrome('He'))
console.log('----------------------------------------------------------- ')

// 10.4
const words = cleanText(sentence).split(' ')
const palindromes = words.filter(word => checkPalindrome(word))
const numberOfPalindromes = palindromes.length
console.log(
  'Total number of palindrome words in the text:',
  numberOfPalindromes
)

console.log('==================== END Q10   ============================ ')
