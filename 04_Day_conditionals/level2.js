let score = parseInt(prompt('What is your score?'))
if (score >=80  || score <=100 ) {
  console.log('A');
}
else if (score >= 70 || score <= 79) {
  console.log('B');
}
else if (score >= 60 || score <= 69) {
  console.log('C');
}
else if (score >= 50 || score <= 59) {
  console.log('D');
}
  
else if (score >= 0 || score <= 49) {
  console.log('F');
}

else {
  console.log('you dey ment!');
}

let season=prompt('Enter month?').toLowerCase()

if (season == 'september' ||season ==   'october' ||season ==  'november') {
  console.log('Autumn');
}

else if (season == 'december' ||season ==  'january' ||season ==  'february') {
  console.log('Winter');
}

else if (season == 'march' ||season ==  'april' ||season ==  'may') {
  console.log('Spring');
}
else if (seasonFour == 'june' ||season ==  'july' ||season ==  'august') {
  console.log('Summer');
}

let day = prompt('what is the day today?').toLowerCase()

switch (day) {
  case 'saturday':
  case 'sunday'  :
    console.log('This is a weekend');
    break
  case 'monday':
  case 'tuesday':
  case 'wednesday':
  case 'thursday':
  case 'friday':
    console.log('This is a working day');
    }