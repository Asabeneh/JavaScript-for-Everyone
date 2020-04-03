const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]; // String arrays
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary'
]; // string arrays
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // Number arrays
const shoppingCart = [
  'Milk',
  'Mango',
  'Tomato',
  'Potato',
  'Avocado',
  'Meat',
  'Eggs',
  'Sugar'
]; // string arrays

const mixedArrays = [
  'Asabeneh',
  250,
  true,
  { country: 'Finland' },
  { skills: ['HTML', 'CSS', 'JavaScript'] }
];
console.log(webTechs);
console.log(webTechs.length); // => to know the size of the array, which is 7
console.log(webTechs[0]); //--> HTML;
console.log(webTechs[webTechs.length - 1]); //--> MongoDB
console.log(countries);
console.log(numbers);
console.log(shoppingCart);
console.log(mixedArrays);
