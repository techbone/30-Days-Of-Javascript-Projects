let month = prompt('Enter the month?').toLowerCase()

switch (month) {
  case 'january':
  case 'february':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    console.log('This month has 31 days.');
    break;
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    console.log('This month has 30 days.');
    break;
  default:
    console.log("what is wrong?");
   
}

let days = prompt('You want to know how many days are there in which month?')

let monthOne = prompt('Enter the month?').toLowerCase()

switch (monthOne) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    console.log('This month has 31 days.');
    break;
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    console.log('This month has 30 days.');
    break;
  case 'february':
    console.log('This month has 27 days');
  
  default:
    console.log("what is wrong?");
   
}


