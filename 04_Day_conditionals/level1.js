let age = prompt("Enter your age?");
if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`you are left with ${18 - age} years to drive`);
}

let myAge = 30;
let yourAge = parseInt(prompt("Enter your age?"));

if (yourAge < 30) {
  console.log(`you are ${30 - yourAge} years older than me`);
} else {
  console.log("you are older than me");
}

let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
} //using if-else

let B = 3;
let A = 4;

A > B
  ? console.log(`${A} is greater than ${B}`)
  : console.log(`${A} is less than ${B}`);

let even = parseInt(prompt("Enter an even number"));

console.log(`remainder is  ${even % 2}, so ${even} is an even number`); //for even numbers

let odd = parseInt(prompt("Enter an odd number"));

console.log(`remainder is  ${odd % 3}, so ${odd} is an odd number`); //for odd numbers
