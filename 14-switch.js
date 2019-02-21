// Switch
var weather = "cloudy";
switch (weather) {
  case "rainy":
    console.log("It is raining. You need a rain coat.");
    break;
  case "cloudy":
    console.log("It might be cold you need a jacket.");
    break;
  case "sunny":
    console.log("Go out freely.");
    break;
  default:
    console.log("It is not raining. No need for rain coat.");
    break;
}

// Swithc More Examples
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