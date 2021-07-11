let theQuote = 'There is no exercise better for the heart than reaching down and lifting people up.by John Holmes teaches us to help one another.'
console.log(theQuote);

let motherTheresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(motherTheresa);

let ten = 10;
let teen = '10';
console.log(ten === teen);//false

let tenTwo = 10;
let teenTwo = ten;
console.log(ten == teen);//true

let float = '9.8';
console.log(parseFloat('9.8'));
 
console.log(parseFloat('9.8' == 10));//Nan

console.log(Math.round('9.8'));//10

console.log(Math.round('9.8') == 10);//true

let p = 'python';
console.log(p);
let j = 'jargon';
console.log(j);

console.log(p.includes('on'));//true

console.log(j.includes('on'));//true

let hope = 'I hope this course is not full of jargon'
console.log(hope);

console.log(hope.includes('jargon'));//true

console.log(Math.round(Math.random() * 100));//0-100 inclusively

console.log(Math.round(Math.random() * (100 - 50) + 50));//50-100 inclusively

console.log(Math.round(Math.random() * 225));//0-225 inclusively

// function makeid(length) {

//   let result = [];
//   let characters = 'JavaScript';
//   let charactersLength = characters.length;
//   for (let i = 0; i < length; i++){
//     result.push(characters.charAt(Math.floor(Math.random() * 
//  charactersLength)));
    
//   }
//   return result.join('');
  
// }
// console.log(makeid(5));


const java = "JavaScript";
console.log(java[Math.floor(Math.random() * java.length)]);////string characters using random numbers
 
console.log(1, 1, 1, 1, 1);
console.log(2, 1, 2, 4, 8);
console.log(3, 1, 3, 9, 27);
console.log(4, 1, 4, 16, 64,);
console.log(5, 1, 5, 25, 125);
//printing characters

let phrase='You cannot end a sentence with because because because is a conjunction'

console.log(phrase.substr(31, 24));//slicing out beacasue because because

console.log( `The annual income of the person is ${5000*12+15000*12+10000}`)//annual income



