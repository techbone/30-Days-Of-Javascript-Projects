let challenge = '30 Days Of JavaScript';//variable declared
console.log(challenge);//printing the string


console.log(challenge.length);//length of the string

console.log(challenge.toUpperCase());//to uppercase

console.log(challenge.toLowerCase());//to lowerCase

console.log(challenge.substring(0, 2));//substring

console.log(challenge.substring(3, 21));//slicing with substring
console.log(challenge.includes('Script'));//includes Script

console.log(challenge.split);//split.challenge

let challenge2 = '30 Days Of JavaScript'
console.log(challenge2.split(' , '));//split with ,

let company = 'Facebook Google Microsoft Apple IBM Oracle Amazon'
console.log(company.split(' '));//slicing with spacing

console.log(challenge2.replace("JavaScript", "Python"));//replacing JavaScript with Python

console.log(challenge2.charAt(15));//charAt methd

console.log(challenge.charCodeAt(12));//charcodeAt

console.log(challenge.indexOf('a'));//indexOf a

console.log(challenge.lastIndexOf('javaScript'));//last index of JavaScript

let conjunction = 'You cannot end a sentence with because because is a conjunction'
console.log(conjunction.indexOf('because'));//index of because

console.log(conjunction.lastIndexOf('because'));//last index of because

console.log(conjunction.search('because'));//Search because

let trim = '  30 Days Of JavaScript  '
console.log(trim.trim());//trim Var(trim)

console.log(challenge.startsWith('30'));//startwith

console.log(challenge.endsWith('JavaScript'));//endswith

let matche='30 Days Of JavaScript'
console.log(matche.match(/a/gi));//match

let concat = '30 Days'
console.log(concat);
console.log(concat.concat(" Of", " JavaScript"));//concatenation of concat & Of JavaScript

console.log(challenge.repeat(2));//repeat
