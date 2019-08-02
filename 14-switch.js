// Switch
let weather = 'cloudy';
switch (weather) {
  case 'rainy':
    console.log('It is raining. You need a rain coat.');
    break;
  case 'cloudy':
    console.log('It might be cold you need a jacket.');
    break;
  case 'sunny':
    console.log('Go out freely.');
    break;
  default:
    console.log('It is not raining. No need for rain coat.');
    break;
}

// Swithc More Examples
let dayUserInput = prompt('What day is it ?');
let day = dayUserInput.toLowerCase();
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

//Example using numbers
let i = 5;
switch (i) {
  case 1:
    console.log('value is 1');
    break;
  case 2:
    console.log('value is 2');
    break;
  case 3:
    console.log('value is 3');
    break;
  case 4:
    console.log('value is 4');
    break;
  case 5:
    console.log('value is 5');
    break;
  default:
    console.log('value not found');
}

// Examples to use conditions in the cases

let num = prompt('Enter number');
switch (true) {
  case num > 0:
    console.log('Number is postive');
    break;
  case num == 0:
    console.log('Numbers is zero');
    break;
  case num < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}

// Swithc More Examples
const month = prompt('Enter months').toLowerCase();

switch (month) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    console.log('31 days');
    break;
  case 'april':
  case 'march':
  case 'september':
  case 'november':
    console.log('30 days');
    break;
  case 'february':
    console.log('28 days but 29 during leap year');
    break;
  default:
    console.log('It is not a valid month');
}
