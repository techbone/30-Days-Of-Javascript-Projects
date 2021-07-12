function printFullName(firstName, secondName) {
  return `${firstName} ${secondName}`
}
printFullName('Musa', 'Muhammad')
  console.log(printFullName('Musa', 'Muhammad')
);//function returns full name


function printFullNameTwo(firstName, lastName) {
  fullName = firstName + lastName
  return fullName
}

printFullName('Awwal', 'Etudaye')
console.log(
  printFullName('Awwal', 'Etudaye'));//full name using parameters

function addNumbers(a, b) {
  sum = a + b
  return sum
}
addNumbers(10, 90);
console.log(
  addNumbers(10, 90));//adding numbers with functions

function areaOfRectangle(length, breadth) {
  area = length * breadth
  return area
}
  areaOfRectangle(10, 20)
console.log(areaOfRectangle(10, 20));//function to calculate the area of a rectangle

function volumeOfRectPrism(length, width, height) {
  volume = length * width * height
  return volume
}

volumeOfRectPrism(10, 20, 30)
console.log(volumeOfRectPrism(10, 20, 30));//volume of the prism

function areaOfCircle(r) {
  area = Math.PI * r * r
  return area
}

areaOfCircle(30)
console.log(areaOfCircle(30));//area of the circle

function circumOfCircle(r) {
  circum = 2 * Math.PI * r
  return circum
}

circumOfCircle(10)
console.log(circumOfCircle(10));//circumfrence of the circle

function density(mass, volume) {
  density = mass / volume
  return density
}

console.log(density(10, 2));//density of the substance

function speed(distance, time) {
  speed = distance / time
  return speed
}

console.log(speed(10, 20));//the speed is therefore calculated
function weightOfSub(mass, gravity) {
  weight = mass * gravity
  return weight
}

console.log(weightOfSub(50, 20));//weight of the substance is therefore calculated

function convertCelciusToFahrenheit(Oc) {
  Of = (Oc * 9 / 5) + 32
  return Of
}

console.log(convertCelciusToFahrenheit(10));//formular for converting to Fo is therefore simplified

function BodyMassIndex(weight, height) {
  massIndex = weight / height * height
  if (massIndex < 18.5)
    return ('You are underweight')
  else if (massIndex = 18.5 || massIndex <= 24.9)
    return ('You have a normal weight')
  else if (massIndex = 25 || massIndex <= 29.9)
    return ('You are overweighted')
  else
    return ('Obese')
}

console.log(BodyMassIndex(10, 20));//BMI function

function checkSeason(month) {
  switch (month) {
    case "january":
    case "february":
    case "march":
      return 'Autumn'
      break;
    case "april":
    case "may":
      case "june":
      return 'Winter'
      break;
    case "july":
    case "august":
    case "september":
      return 'Spring'
    case "october":
    case "november":
    case "december":
      return 'Summer'     
  }
}
console.log(checkSeason("january"))//function for checking season

function mathMax(a, b, c) {
  if (a > b && a > c)
    return a
  else if (b > a && b > c)
    return b
  else (c > a && c > b)
  return c
}

console.log(mathMax(1, 2, 3))//checkseason function

function linearEquation(w, e, f) {
  y = -f / e;
  x = -f / w;
  return { y, x };
}
console.log(linearEquation(25, 10, 5));

