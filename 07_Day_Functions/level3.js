function rgbColorGenerator(){
  let sum = "rgb("
  for(let i = 0;i < 3; i++ ){
    let random = Math.floor(Math.random() * 256)
    sum = sum + "," + random
  }
    sum+= ")"
  return sum.replace(",", "")
}
console.log(rgbColorGenerator());
function arrayOfHexadecimal(){
  let number = "a1ab2c3d4e5f6g123456789"
    let constant = "#"
    let constant2 = "#"
    let constant3 = "#"
    let toPushArray = []
    for(i = 0; i < 6;i++){
        let random = number[Math.floor(Math.random() * number.length)]
        let random1 = number[Math.floor(Math.random() * number.length)]
        let random2 = number[Math.floor(Math.random() * number.length)]
        constant+= random
        constant2+=random1
        constant3+=random2
      }
      toPushArray.push(constant,constant2,constant3)
    return toPushArray
}
console.log(arrayOfHexadecimal());
 function arrayOfRgbColors(){
  let array = []
  for(let j = 0; j < 4;j++){
    let sum = "rgb("
  for(let i = 0;i < 3; i++ ){
    let random = Math.floor(Math.random() * 256);
    sum = sum +  "," + random
  }
  sum+= ")"
array.push(sum.replace(",",""))
}
  return array
}
console.log(arrayOfRgbColors())
function convertHexToRgb(numb){
     let slice1 = numb.slice(1,3)
     let slice2 = numb.slice(3,5)
     let slice3 = numb.slice(5,7)
      let rgb = parseInt(slice1,16)
      let rgb1 = parseInt(slice2,16)
      let rgb2 = parseInt(slice3,16)
      let completeRgb = `rgb(${rgb},${rgb1},${rgb2})`
      return completeRgb
}
console.log(convertHexToRgb("#12FF3D"));
function convertRgbToHexColor(numbs){
   let rgbRemoval = numbs.slice(4).replace(")","")
   let array = rgbRemoval.split(",")
  let firstConvert = array.slice(0,1).toString()
  let convert2 = array.slice(1,2).toString()
  let convert3 = array.slice(2,3).toString()
   let hex1 = parseInt(firstConvert,10).toString(16)
   let newHex1 = hex1 == 0 ? "0" + hex1 : hex1
   let hex2 =  parseInt(convert2,10).toString(16)
   let newHex2 = hex2 == 0 ? "0" + hex1 : hex2
   let hex3 = parseInt(convert3,10).toString(16)
   let newHex3 = hex3 == 0 ? "0" + hex3 : hex3
   let hexColor  = "#" + newHex1 + newHex2 + newHex3
   return  hexColor
}
console.log(convertRgbToHexColor("rgb(255,255,255)"))
function generateColors(type,numb){
      let array1 = []
      let randomHexDec = "123456789abcdefgh"
      if(type == "rgb"){
        for(i = 0; i < numb; i++){
          let sum = "rgb("
          for(j = 0; j < 3; j++){
           let  random = Math.floor(Math.random() * 256)
            sum = sum + "," + random
          }
            sum+=")"
            array1.push(sum.replace(",",""))
        }
      }
      if(type == "hexa"){
        for(k = 0; k < numb; k++){
          let sum1 = "#"
          for(let l= 0; l < 6; l++){
            let random1 = randomHexDec[Math.floor(Math.random() * randomHexDec.length )]
            sum1+= random1
          }
          array1.push(sum1)
        }
      }
      return array1
}
console.log(generateColors("rgb", 10))
function shuffleArray(array){
      return array.sort()
}
countries1 = ["mali", "england","afgnaistan", "japan","kenya"]
console.log(shuffleArray(countries1))
 function factorial(number){
   let sum = 1;
   for(let i = number; i > 0; i--){
    sum*=i
   }
   return sum
 }
 console.log(factorial(7));
 let emptyArrays = []
 function isEmpty(string){
      if(string.length == 0){
          return "Empty Data Type"
      } else{
       return "Is not empty"
      }
 }
 console.log(isEmpty(emptyArrays))
 function sum(){
  let sum = 0
  for(let i = 0; i < arguments.length;i++){
      sum+= arguments[i]
  }
  return sum
 }
 console.log(sum(10,50,3,4,5,6,7,8,9))
   let no =[1,3,4,5,6,7,8,9,12]
 const sumOfArrayItems = (arrays) => {
    if(!arrays.every(value => typeof value ==="number")){
      return Error("Every item of the array must be a number")
    }
  return arrays.reduce((acc,c) => acc + c,0)
 }
 console.log(sumOfArrayItems(no));
 function average(array){
  if (!array.every(value => typeof value === 'number')) {
    return Error("every item of the array must be a number")
}
  return array.reduce((acc,c) => acc + c,0) /2
 }
console.log(average(no));
const techComp = ['Google',"Facebook", 'Facebook','Apple', 'Amazon','Microsoft',  'IBM',"me"]
const modifyArray = (newArr) => {
  if(newArr.length < 5){
    return "item not found"
  }
      let fourth = newArr[4].toUpperCase()
      newArr.splice(4,1,fourth)
  return newArr
}
console.log(modifyArray(techComp))
function isPrime (n) {
  // if (!n) return false
  let prime = true
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      prime = false
      break
    }
  }
  return prime
}
console.log(isPrime(21))
    function isValidVar(validVar){
      let alphabets = 'abcdefghijklmnopqrstuvwxyz'
      for(let i = 0; i < alphabets.length;i++){
      if(validVar.startsWith(alphabets[i])){
        return "Valid variable"
        break;
       }
      }
     if(validVar.startsWith("_") || validVar.startsWith("$")){
       return "Valid variable"
    } else{
      return "Invalid Variable"
    }
  }
    console.log(isValidVar("zmma"))
    function uniqueArray(array){
      let result ='Array is unique'
      for(let i=0; i<array.length; i++){
        let arrItemCount=0;
        for(let j=0; j<array.length; j++){
          if(array[i] === array[j]) arrItemCount++
        }
        if(arrItemCount > 1) {
          result='Array is not Unique'
          break;
        }
      }
      return result
    }
    console.log(uniqueArray(techComp));
    function arrayDataTypes(array){
      let arrayOfdata = ["number","string","undefined","null","boolean"]
      let empt = []
      for(let i = 0; i < arrayOfdata.length;i++){
        // let eachArray =
      if(!array.every(value => typeof value === arrayOfdata[i])){
        empt.push(arrayOfdata[i])
      }
    }
    if(empt.length == arrayOfdata.length){
      return "Array is not containing the same data type"
    }else{
    return "Array is containing same data type"
  }
}
  console.log(arrayDataTypes(techComp))
  function randomNumber(){
    let sum = "("
    emptyArray = [];
    for(let i = 0; sum.length < 15;i++){
      let random = Math.floor(Math.random() * 10)
      // console.log(random)
      if(sum.indexOf(random) == -1) {
        sum = sum + "," + random
        }
  }
    sum = sum + ")"
   return  sum.replace(",","").split()
  }
  console.log(randomNumber())
 const newArrayOfCountry = ["ilorin","lagos","ikeja","calabar","abeokua","ikeja","yola","akwa ibom"]
  function reverseCountries(countryArray){
    return countryArray.reverse()
}
console.log(reverseCountries(newArrayOfCountry));


console.log('I love aminah\n'.repeat(1500));