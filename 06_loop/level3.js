let   number = "a1b2c3d4e5f6g7h8i9j10k11l12m13n14o15p16q17r18s19t20u21v21w22x23y24z0"
 let string ="";
 for(let i = 0;i < 13; i++){
   let random =number[Math.floor(Math.random() * number.length )];
      string+=random;
  }
         console.log(string)
let   number = "a1b2c3d4e5f6g7h8i9j1a0k1b1l1c2m1d3n1e4o1f5p1g6q1h7r1i8s1j9t2k0u2l1v2m1w2n2x2o3y2p4z0"
 let string ="";
 for(let i = 0;i < 25; i++){
   let random =number[Math.floor(Math.random() * number.length )];
      string+=random
  }
  console.log(string)
let   number = "a1b2c3d4e5f6a7b8c9"
let hash = "#"
let string =[];
for(let i = 0;i < 7; i++){
  let random =number[Math.floor(Math.random() * number.length )];
     hash+=random
 }
 console.log(hash)
 let arr = "rgb(";
 let closeB = ")";
 let comma = ","
 for(let i = 0; i < 3;i++){
  let roundOff = Math.floor(Math.random() *256);
  console.log(roundOff);
   arr = arr + comma + roundOff ;
 }
     let replace =   arr.replace(",","")
   replace = replace + closeB;
   console.log(replace);
let empty = [];
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
 for(i = 0; i < countries.length;i++){
  empty.push(countries[i].toUpperCase());
}
console.log(empty)
      let nothing = [];
      for(i = 0; i < countries.length;i++){
         let eachCountry = countries[i];
         let eachLength = eachCountry.length;
         nothing.push(eachLength);
      }
         console.log(nothing);
    let empty = [];
  for(i = 0; i < countries.length;i++){
    let m =  countries[i];
    let length = m.length
    let first  = m.substr(0,3).toUpperCase();
   console.log(first);
   empty.push([countries[i],first,length]);
}
console.log(empty)
let arrContainLand = [];
for(let i = 0;i < countries.length;i++){
   // let you = countries[i].includes("land");
   if(countries[i].includes("land") == true){
      arrContainLand.push(countries[i])
    }
}
if(arrContainLand.length>0){
   console.log(arrContainLand);
}
else{
   console.log("All this are without land")
}
console.log(emptiest);
let arrEndWithIa = [];
for(let i = 0; i < countries.length; i++){
   if(countries[i].endsWith("ia") == true){
      arrEndWithIa.push(countries[i])
   }
}
if(arrEndWithIa.length > 0){
   console.log(arrEndWithIa)
} else{
   console.log("These are countries ends without ia");
}
     let empty = []
for(let i = 0; i < countries.length;i++){
   empty.push(countries[i].length);
}
let  max = Math.max(...empty);
for(let j = 0;j < empty.length;j++){
   let mine = countries[j]
   if(max == empty[j]){
      console.log(countries[j]);
   }
}
  let emptyArr = [];
  for(let i = 0; i < countries.length; i++){
     if(countries[i].length == 5){
        emptyArr.push(countries[i]);
     }
  }
  console.log(emptyArr);
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
  let emptyArr = [];
  for(let i = 0;i <webTechs.length;i++){
     emptyArr.push(webTechs[i].length);
  }
  let maxLength = Math.max(...emptyArr)
  console.log(maxLength)
  for(let j = 0; j < webTechs.length;j++){
     if(maxLength == emptyArr[j] ){
        console.log(webTechs[j])
     }
  }
let emptyArr = [];
for(let i = 0; i < webTechs.length; i++){
   emptyArr.push([webTechs[i],webTechs[i].length]);
}
console.log(emptyArr);
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
 let emptyArr = "";
for(let i = 0; i < mernStack.length; i++ ){
   let copied = mernStack[i].substr(0,1);
      emptyArr =   emptyArr + copied;
}
console.log(emptyArr)
const techComp = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
let string  = "";
let space = " "
for(const tech of techComp){
   console.log(tech);
   string= string + space + tech
}
console.log(string)
let fruits = ['banana', 'orange', 'mango', 'lemon']
let arr = [];
for(let i = 0; i < fruits.length; i++){
   arr.unshift(fruits[i]);
}
console.log(arr);
const fullStack = [
   ['HTML', 'CSS', 'JS', 'React'],
   ['Node', 'Express', 'MongoDB']
 ]
 let you = [];
 for(let item of fullStack){
    you.push(...item)
   }
  // method 2//
   let arrayContainer1 = []
   for(let i = 0; i < fullStack.length;i++ ){
        for(let j = 0; j < fullStack[i].length;j++){
          arrayContainer1.push(fullStack[i][j])
        }
      }
      console.log(arrayContainer1.join("\n"))
   console.log(you)
   let emptyArr = [];
   for(let items of you){
//       console.log(items)
   }
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
 const webTechs = [
   "HTML",
   "CSS",
   "JavaScript",
   "React",
   "Redux",
   "Node",
   "MongoDB",
 ];

 const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let sortedCountries = countries.sort();
let sortedMernStack = mernStack.sort();
let sortedWebTechs = webTechs.sort();
let arrContainLand = [];
 for(let i = 0;i < countries.length;i++){
     let you = countries[i].includes("land");
    if(countries[i].includes("land") == true){
       arrContainLand.push(countries[i])
     }
 }
 if(arrContainLand.length>0){
    console.log(arrContainLand);
 }
 else{
    console.log("All this are without land")
 }
      let empty = []
 for(let i = 0; i < countries.length;i++){
    empty.push(countries[i].length);
 }
 let  max = Math.max(...empty)
 for(let j = 0;j < empty.length;j++){
    let mine = countries[j]
    if(max == empty[j]){
       console.log(countries[j]);
    }
 }
let onlyFour = [];
for(let i = 0; i <countries.length; i++){
   if(countries[i].length == 4){
      onlyFour.push(countries[i])
   }
}
if(onlyFour.length > 0){
   console.log(onlyFour)
} else{
   console.log("None of the countries have just 4 characters ")
}
let twoOrMore = [];
for(let i = 0; i < countries.length; i++){
   if(countries[i].length >= 2){
      twoOrMore.push(countries[i])
   }
}
console.log(twoOrMore);
let reverseArray = [];
for(let i = 0;i < countries.length; i++){
   reverseArray.push(countries[i].toUpperCase());
}
reverseArray.reverse()
console
