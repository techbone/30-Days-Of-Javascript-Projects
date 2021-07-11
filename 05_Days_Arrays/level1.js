let emptyArray = [];
console.log(emptyArray);//empty-array

let fiveNames = [
  'Muhammad',
  'Adam',
  'Yahyah',
  'Hanifah',
  'Bayyinah'
]

console.log(fiveNames.length);//the length of the array

let firstFiveNames = fiveNames[0];

console.log(firstFiveNames);//getting the first item in the array

let middleFiveNames = fiveNames[2];

console.log(middleFiveNames);//getting the middle item of the array

let lastFiveNames = fiveNames[4];//accessing through the index
console.log(lastFiveNames);

let lastFiveNamesOne = fiveNames.length - 1;//accessing through the usage of its length
console.log(fiveNames[lastFiveNamesOne]);

let mixedDataTypes = [
  'niku',
  230,
  { country: 'canada', city: 'vancouver' },
  { addiction: 'gaming', hobby: 'playing chess' },
  false,
  true
]
  
console.log(mixedDataTypes.length);//the length of the array

let itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
]

console.log(itCompanies);//printing the array

console.log(itCompanies.length);//printing the length of the array

let firstCompany = itCompanies[0];

console.log(firstCompany);//prints the first company

let middleCompany = itCompanies[3];//prints the middle country

let lastCompany = itCompanies.length - 1;
console.log(itCompanies[lastCompany]);//prints the last company by removing 1 from its index

//OR

let lastKompany = itCompanies[6];
console.log(lastKompany);//prints the last company by targeting the index

console.log(itCompanies[0]);//the first company

console.log(itCompanies[1]);//the second company

console.log(itCompanies[2]);//the third company

console.log(itCompanies[3]);//the fourth company

console.log(itCompanies[4]);//the fifth company

console.log(itCompanies[5]);//the sixth company

console.log(itCompanies[6]);//the seventh company

//////////////////////////////////////////////////////

console.log(itCompanies[0].toUpperCase());//the first company changes to uppercase

console.log(itCompanies[1].toUpperCase());//the second company changes to uppercase

console.log(itCompanies[2].toUpperCase());//the third company changes to uppercase

console.log(itCompanies[3].toUpperCase());//the fourth company changes to uppercase

console.log(itCompanies[4].toUpperCase());//the fifth company changes to uppercase

console.log(itCompanies[5].toUpperCase());//the sixth company changes to uppercase

console.log(itCompanies[6].toUpperCase());//the seventh company changes to uppercase


let arr = [
  'Facebook',
  ' Google',
  ' Microsoft',
  ' Apple',
  ' IBM',
  'Oracle',
  ' and Amazon'
]

console.log(arr.toString());

console.log((arr.toString()).concat(' are big IT companies.'));


const itsCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
]

let indexOfGoogle = itCompanies.indexOf('Google')

if (indexOfGoogle != -1) {
  console.log('This company does exist');
}
else {
  console.log('this company does not exist')
};//to check if a company amongst the listed company exist


const filterCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
]


let includes =filterCompanies.slice()

const sort = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
]

let sortArray = sort.sort();
console.log(sortArray);//sort using sort method

let reverseArray = sort.reverse();
console.log(reverseArray);//sort using reverse method


let com = "";
let zerroArray = Array();

for (let i = 0; i < sort.length; i++){
  com = sort[i].toString();
  let count = 0;

  for (let j = 0; j < com.length; j++){
    if (com[j] == 'o') {
      count += 1;
    }
  }

  if (count >= 2) {
    zerroArray.push(sort[i]);
  }
  
  
}

console.log(zerroArray);//filter out companies with more than one 'o'

const slice = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
]

let sliceFirstThree = slice.slice(0, 3);
console.log(sliceFirstThree);//slice out first three

let sliceLastThree = slice.slice(4, 7);
console.log(sliceLastThree);//slice out first three

const IT = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
]

let sliceMiddleIt = IT.slice(3, 4);
console.log(sliceMiddleIt);//slice out the middle IT company

let sliceFirstIt = IT.slice(0, 1);
console.log(sliceFirstIt);//slice out the first IT company


let sliceLastIt = IT.slice(6,7);
console.log(sliceLastIt);//slice out the last IT company

let sliceAllIt = IT.slice(0, 7);
console.log(sliceAllIt);//slice out all IT company

console.log(IT);//still has all the IT companies becasue slice was used and splice.