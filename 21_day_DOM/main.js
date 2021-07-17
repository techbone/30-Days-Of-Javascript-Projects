const pQuery = document.querySelector('p')
console.log(pQuery);

const pTag = document.getElementsByTagName('p')
console.log(pTag);


const pFood = document.querySelector('#food')
console.log(pFood);
const pEating = document.querySelector('#eating')
console.log(pEating);
const pDancing = document.querySelector('#dancing')
console.log(pDancing);
const pSleeping = document.querySelector('#sleeping')
console.log(pSleeping)


const nodeList = document.querySelectorAll('p')
console.log(nodeList);

const newArr = []
const nodeListtt = nodeList.forEach(list => {
   newArr.push(list.textContent)
})
console.log(newArr)
 
const nodeListt = nodeList.forEach(list => 
  nodeListStyle = console.log(list.textContent))
console.log(nodeListStyle)

let setPara = document.getElementById("sleeping").textContent = "Fourth Paragraph"
console.log(setPara)

const newAttribute = document.querySelectorAll('p')
newAttribute[0].setAttribute('id', 'first')
newAttribute[1].setAttribute('id', 'second')
newAttribute[2].setAttribute('id', 'third')
newAttribute[3].setAttribute('id', 'fourth')
console.log(newAttribute)

const newClass = document.querySelectorAll('p')
newClass[0].classList.add('name', 'Musa')
newClass[1].classList.add('name', 'Muhammad')
newClass[2].classList.add('name', 'Awwal')
newClass[3].classList.add('name','Etudaye')
console.log(newClass)

const classAttributes = document.querySelectorAll('p')
classAttributes[0].className = 'title'
classAttributes[0].id = 'me'
classAttributes[1].className = 'name'
classAttributes[1].id = 'etudaye'
classAttributes[2].className = 'subject'
classAttributes[2].id = 'math'
classAttributes[3].className = 'animal'
classAttributes[0].className = 'lion'
console.log(classAttributes);


//Level 2//

const stylePara = document.querySelectorAll('p')
stylePara.forEach((title, i) => {
  title.style.fontSize = '2rem' 
  if (i % 2 === 0) {
    title.style.color = 'pink'
    title.style.fontFamily = 'roboto'
    title.style.backgroundColor= 'grey'
  } else {
    title.style.color = 'purple'
  }
})
console.log(stylePara)

// const styleParagraph = newArr.forEach(para => {
//   if (para === styleParagraph[0]) {
//      return console.log(para.style.color = 'blue')
//   }
//   else if (para === styleParagraph[1]) {
//     return console.log(para.style.color = 'blue')
//   }
//   else if (para === styleParagraph[2]) {
//     return console.log(para.style.color = 'blue')
//   }
//   else if (para === styleParagraph[3]) {
//     return console.log(para.style.color = 'blue')
//   }
// })
// console.log(stylePara)

 

nodeList.forEach((items, index) => {
  items.style.color = 'green'
  if (index % 2 === 0) {
    items.style.color = 'white'
  }
  else{
    items.style.color = 'yellow'
  }
}
)
console.log(nodeList)

const textContents = nodeList.classList.add = 'name'



  







