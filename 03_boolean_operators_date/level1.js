let firstName = "Muhammad",
  lastName = "Musa",
  country = "Canada",
  city = "Vancouver",
  age = 23,
  isMarried = true,
  year = 2021;

console.log( firstName);
console.log( lastName);
console.log( country);
console.log( city);
console.log( age);
console.log( isMarried);
console.log( year);



console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);


let tenString = '10';
console.log(typeof tenString);
let tenInt = 10;
console.log(typeof tenString === tenInt);

let ninePointEight ='9.8'
console.log(parseInt(ninePointEight));
console.log(parseInt(ninePointEight) === tenInt);//false for parseInt==='10'

console.log(4 > 3);//truthy-1

let x = 'adam';
let w = 'tom';

console.log(x.length > w.length);//truthy-2

console.log(7 > 5.5);//truthy-3


console.log(3 > 4);//falsy-1

console.log(5.6 > 7);//falsy-2

let y = 'aisha'
let z = 'muhammad'

console.log(y.length > z.length);//falsy-3

console.log(4 > 3);//true

console.log(4 >= 3);//true

console.log(4 < 3);//false

console.log(4 <= 3);//false

console.log(4 == 4);//true

console.log(4 === 4);//true

console.log(4 != 4);//false

console.log(4 !== 4);//fasle

console.log(4 != '4');//true

console.log(4 == '4');//true

console.log(4 === '4'
);//false


let python = 'python';
let jargon = 'jargon';

console.log(python.length);
console.log(jargon.length);

console.log(python.length != jargon.length);//falsy comparism between python and jargon

console.log(4 > 3 && 10 < 12);//true

console.log(4 > 3 && 10 > 12);//false

console.log(4 > 3 || 10 < 12);//true

console.log(4 > 3 || 10 > 12);//true

console.log(!(4 > 3));//false

console.log(!(4 < 3));//true

console.log(!(false));//true

console.log(!(4 > 3 && 10 < 12));//false

console.log(!(4 > 3 && 10 > 12));//true

console.log(!(4 === '4'));//true

let phrase=" dragon and python"

console.log(phrase.includes('no'));


const now = new Date();

console.log(now.getFullYear());//get full year

console.log(now.getMonth());//get month

console.log(now.getHours());//gset hours

console.log(now.getMinutes());//get minutes

console.log(now.getUTCSeconds());//seconds elasped since 1970









  