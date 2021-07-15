// regEx = /musa/gi;

// words = 'His name is musa muhammad and he loves to be called Musa most times'

// regExResults = words.replace(regEx,'Muhammad')

// console.log(regExResults);

let annualIncome = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month'

let pattern =/\d+/g


let sum =annualIncome.match(pattern)

console.log(sum);

console.log(sum.reduce((acc, curr) => acc + Number(curr), 0));

let particles= 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles'

let regEx= (/-*\d{1,}/g)

let sumTwo = particles.match(regEx)

console.log(sumTwo.reduce((acc, curr) => acc + Number(curr), 0));


const is_Valid_Variable = variable => {
  if (variable.startsWith('s')) return true
  let validRegEx = /^([A-Za-z_])[a-zA-Z0-9]+([a-z0-9_])$/
  let truthy = validRegEx.test(variable)
  if (truthy) return true
  else return false
}
  
console.log(is_Valid_Variable('_text'))

const tenMostFrequentWords = (string,wordCount) => {
      const toArray = string.match(/[a-z]+/gi)
      const frequent = {}
        toArray.forEach(value => {
            if(frequent[value]) frequent[value]+= 1
            else frequent[value] = 1
        })
        const DividedFrequent = Object.entries(frequent)
       const frequently = DividedFrequent.map(item => {
            return {word:item[0],count:item[1]}
        })
       return  frequently.sort((a,b) => b.count-a.count).splice(0,wordCount)
    }
    console.log(tenMostFrequentWords(`I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`,7))



const numbers = [110, 120, 130, 180, 130, 200]
let addNumbers = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(addNumbers)
    
const random = () => {
  names = ["Musa", "Muhammad", "Etudaye"]
  randomName = names[Math.floor(Math.random() * names.length
  )]
  return randomName
}
console.log(random())

