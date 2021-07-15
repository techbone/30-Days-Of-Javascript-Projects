const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let age = ages.sort();
console.log(age);//sorts it out from the lowest to the highest age

minimumAge = age[0];
console.log(minimumAge);//the minimum age in the array

maximumAge = age[age.length - 1];
console.log(maximumAge);//the maximum age in the array

minMax = maximumAge - minimumAge;
console.log(minMax);//the min-max
 
let mid1 = ages[4];
let mid2 = ages[5];
let median = (mid1 + mid2) / 2;
console.log(`The median is ${median}`)

averageArray = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9]) / 10;

let roundUp = Math.round(averageArray);

console.log(`The average  age is ${roundUp}`);//rounds the average

let range = maximumAge - minimumAge;
console.log({range});
let comparism1 = Math.abs(minimumAge - averageArray);
let comparism2 = Math.abs(maximumAge - averageArray);
if (comparism1 == comparism2) {
  console.log(`They are equal `);
} else if (comparism1 > comparism2) {
  console.log(`minimum-average  is greater than maximum-average`);
} else {
  console.log(`${comparism2} is greater than ${comparism1}`);
}

