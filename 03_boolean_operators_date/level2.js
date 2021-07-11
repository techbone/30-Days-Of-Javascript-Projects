let commentOne='The area of the triangle is '

let base = parseInt(prompt('enter the base?'));

let height = parseInt(prompt("enter the height?"));

let area = (0.5 * base * height);

console.log(commentOne  +  area);//triangle area

let commentTwo='the perimeter of the triangle is '

let firstSide = parseInt(prompt('Enter side A?'));

let secondSide = parseInt(prompt('Enter side B?'));

let thirdSide = parseInt(prompt('Enter side C?'));

let perimeter = (firstSide + secondSide + thirdSide);

console.log(commentTwo + perimeter);//perimeter of the rectangle

commentThree = 'The area of the rectangle is ';

let length = parseInt(prompt('Enter the length ?'));

let width = parseInt(prompt('Enter the width?'));

let areaOfTheRectangle = (commentThree + (length * width));

console.log(commentThree + areaOfTheRectangle);//area of the rectangle

commentFour='The perimeter of the rectangle is '

let perimeterOfTheRectangle = 2 * (length * width);

console.log(commentFour + perimeterOfTheRectangle);//perimeter of the rectangle

const PI = 3.14;

commentFive='The area of the circle is '

let radius = parseInt(prompt('Enter the radius?'));

let areaOfTheCircle = (PI * radius * radius);

console.log(commentFive + areaOfTheCircle);//area of the circle

commentSix='The circumfrence of the circle is '

let circumfrenceOfTheCircle = (2 * PI * radius);

console.log(commentSix + circumfrenceOfTheCircle);//circumfrence of the circle

commentSeven = 'The slope is equal to ';
 
let xOne = 1;
let xTwo = 0;
let yOne = 0;
let yTwo = -2;

let slope = ((yTwo - yOne) / (xTwo - xOne));

console.log(commentSeven + slope);//slope is equal to

let commentEight='The slope between the points '

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;

let secondSlope = ((y2 - y1) / (x2 - x1));

console.log(commentEight + secondSlope);//the slope between the points


console.log(slope===secondSl ope);//true





