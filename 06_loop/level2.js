let   number = "a1b2c3d4e5f6g7h8i9j10k11l12m13n14o15p16q17r18s19t20u21v21w22x23y24z0"
  let string = "" ;
  for(let i = 0;i <= 6; i++){
     let random =number[Math.floor(Math.random() * number.length )];
        string=string+random;
} console.log(string);
  

let   numberr = "a1b2c3d4e5f6g7h8i9j10k11l12m13n14o15p16q17r18s19t20u21v21w22x23y24z0"
  let stringg= "" ;
  for(let i = 0;i <= 24; i++){
     let random =numberr[Math.floor(Math.random() * numberr.length )];
        stringg=stringg+random;
} console.log(stringg);
  

let hash = '#'
let hexadecimal = "a1b2c3d4e5f6g7h8i9j10k11l12m13n14o15p16q17r18s19t20u21v21w22x23y24z0"
for (i = 0; i <= 5; i++){
   let random = hexadecimal[Math.floor(Math.random() * hexadecimal.length)]
   hash=hash + random
} console.log(hash);


const randomBetween = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const bb = randomBetween(0, 255);
const rgb = `rgb(${r},${g},${bb})`;
console.log(rgb);


const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const newArray = []
for (i = 0; i < countries.length; i++){
   newArray.push(countries[i].toUpperCase())
}
console.log(newArray)//convert all to uppercase


const lengthArray = []
for (i = 0; i < countries.length; i++){
   lengthArray.push(countries[i].length)
}
console.log(lengthArray)//printing the indexes of each value in the array


const arrayOrArrays = []
for (i = 0; i < countries.length; i++){
   arrayOrArrays.push([countries[i],countries[i].slice(0,3).toUpperCase(),countries[i].length])
}
console.log(arrayOrArrays);//Use the countries array to create the following array of arrays


const countriees = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const withLand = []
for (i = 0; i < countriees.length; i++) {
   if (countriees[i].includes('land'))
      withLand.push(countriees[i])
}

console.log(withLand);

const withIa = []
for (i = 0; i < countriees.length; i++){
   if (countriees[i].includes('ia'))
      withIa.push(countriees[i])
}
console.log(withIa);


const biggestchar = []
for (i = 0; i < countriees.length; i++){
   biggestchar.push(countriees[i].length)
}
console.log(biggestchar)
let max = Math.max(...biggestchar)
for (j = 0; j < countriees.length; j++){
   if (max === countriees[j].length) {
      console.log(countriees[j])
   }
}


let fives = []
for (let i = 0; i < countriees.length; i++) {
   if (countriees[i].length === 5)
      fives.push(countriees[i])
}
console.log(fives)

console.log(countriees.filter(ctry => ctry.length === 5))

console.log(countriees.reduce((acc, cur) => {
   if (cur.length === 5) return [...acc, cur]
   return acc
}, []))

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const indexCon = []
for (let l = 0; l < webTechs.length; l++) {
    indexCon.push(webTechs[l].length)
}
console.log(indexCon)
let longCon = Math.max(...indexCon)
for (m = 0; m < webTechs.length; m++){
   if (longCon === webTechs[m].length) {
         console.log(webTechs[m])
      }  
}

const newArrayy = []
for (const tuntun of webTechs) {
   newArrayy.push([tuntun,tuntun.length])
}
console.log(newArrayy)
let emoty = []
for (let j = 0; j < webTechs.length; j++){
      emoty.push([webTechs[j],webTechs[j].length])
}
console.log(emoty)

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let emptyStack = ''
for (let nullStack of mernStack) {
   emptyStack += nullStack[0]
   
}
console.log(emptyStack)
 
 languages= ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let nullString of languages) {
      console.log(nullString)
}
   
const fruits = ['banana', 'orange', 'mango', 'lemon']
// console.log(fruits.reverse())
 
//or since we wanna use loop to do the sturvs//

let fruitArray=[]
for (let n = 0; n < fruits.length; n++){
   fruitArray.unshift(fruits[n])
}
console.log(fruitArray);

const fullStack = [
   ['HTML', 'CSS', 'JS', 'React'],
   ['Node', 'Express', 'MongoDB']
 ]

  let arrayContainer1 = []
   for(let x = 0; x < fullStack.length;x++ ){
        for(let y = 0; y < fullStack[x].length;y++){
          arrayContainer1.push(fullStack[x][y])
        }
      }
      console.log(arrayContainer1.join("\n"))


