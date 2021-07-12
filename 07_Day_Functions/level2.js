function linearEquation(w, e, f) {
  y = -f / e;
  x = -f / w;
  return { y, x };
}
console.log(linearEquation(25, 10, 5));


function quadraticEquation(a, b, c) {
  let x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  let x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  if (x1 === x2) {
    return { x: x1 };
  } else {
    return { x1, x2 };
  }
}

console.log(quadraticEquation())
console.log(quadraticEquation(1, 4, 4));
console.log(quadraticEquation(1, -1, -2));
console.log(quadraticEquation(1, 7, 12))
console.log(quadraticEquation(1, 0, -4)) 
console.log(quadraticEquation(1, -1, 0))

const countries = ["Canada", "Abroad", "Europea", "South America"];
function printArray(arr) {
  let m = "";
  for (let i = 0; i < arr.length; i++) {
    m = m + " " + arr[i];
  }
  return m;
}
console.log(printArray(countries));
function showDateTime() {
  let now = new Date();
  let year = `${now.getDate() < 10 ? "0" + now.getDate() : now.getDate()}/${
    now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1
  }/${now.getFullYear()} ${
    now.getHours() < 10 ? "0" + now.getHours() : now.getHours()
  }:${now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()}`;
  return year;
}
console.log(showDateTime());
function swapvalues(x, y) {
  return ` X => ${y}, Y => ${x} `;
}
console.log(swapvalues(50, 10));
function reverseArray(arr) {
  let reverse = arr.reverse();
  return reverse;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
function capitalizeArray(arr) {
  let empty = [];
  for (let i = 0; i < arr.length; i++) {
    empty.push(arr[i].toUpperCase());
  }
  return empty;
}
console.log(capitalizeArray(countries));
function addItem(item) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let newArr = item.concat(arr);
  return newArr;
}
console.log(addItem(countries));
function removeItem(index) {
  index.splice(0, 2);
  return index;
}
console.log(removeItem(countries));
let numb = [5, 10, 4, 24, 50, 20, 45, 12, 32];
function sumOfNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(25));
function sumOfOdds(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 2 == 1) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfOdds(25));
 function sumOfEvens(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEvens(25));
function evenAndOdds(num) {
  let sum = 0;
  let summ = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) sum += 1;
  }
  for (let j = 0; j <= num; j++) {
    if (j % 2 == 1) summ += 1;
  }
  return `The  numbers of odds are ${summ}\nThe numbers of evens are ${sum}`
}
console.log(evenAndOdds(100));
function sumOfArgs(){
    let sum = 0
    for(let i = 0; i < arguments.length;i++){
        sum+= arguments[i]
    }
    return sum
}
console.log(sumOfArgs(1,2,3,4,5,10,5,20))
function randomUserIp(){
      let sum = ""
      for(let i = 0; i <2; i++){
      let random = Math.floor(Math.random() * 256)
        sum = sum + "." + random
    }
    return sum.replace(".","")
}
console.log(randomUserIp());
function randomMacNumber(){
  let number = "0123456789ABCDEFGH"
  let number2 = "0123456789ABCDEFGH"
  let sum = "";
  for(let i = 0; i <4;i++){
    let random = number[Math.floor(Math.random() * number.length)]
    let random2 = number2[Math.floor(Math.random() * number2.length)]
    sum = sum + ":" + random + random2
  }
  return sum.replace(":","")
}
  console.log(randomMacNumber());
function randomHexaDecimal(){
    let number = "a1ab2c3d4e5f6g123456789"
    let constant = "#"
    for(i = 0; i < 6;i++){
        let random = number[Math.floor(Math.random() * number.length)]
        constant+=random
    }
    return constant
}
console.log(randomHexaDecimal());
function userIdGenerator(){
  let sum = ""
  let numbers = "123456789"
  let lowercase = "abcdefghi"
  let id = "ABCDEFGHI"
  for(k = 0; k < 2;k++ ){
    random2 = numbers[Math.floor(Math.random() * numbers.length)]
    sum+= random2
  }
  for(i = 0; i < 3; i++){
    random = id[Math.floor(Math.random() * id.length)]
    sum+= random
  }
    for(j = 0; j < 2;j++ ){
      random1 = lowercase[Math.floor(Math.random() * lowercase.length)]
      sum+= random1
    }
    return sum
}
console.log(userIdGenerator());
function userIdGeneratedByUser(){
  let arrOfRand = []
  let randomString = "123456798ABCDEFGHIabcdefghi"
  let numberOfChar = parseInt(prompt("Enter number of id charcters"));
  let numberOfId = parseInt(prompt("Enter number of id"));
  for(i = 0; i < numberOfId;i++){
    let sum = ""
    for(let j=0; j < numberOfChar; j++){
      random = randomString[Math.floor(Math.random() * randomString.length)]
      sum+=random
    }
    arrOfRand.push(sum)
  }
  return arrOfRand.join('\n')
}
console.log(userIdGeneratedByUser());

// const everyone = ['musa', 'mujeeb', 'adnan', 'endurance', 'laja']
// for (i = 0; i < everyone.length; i++){
//   arra=everyone[Math.floor(Math.random()*everyone.length)]
// }
// console.log(arra)