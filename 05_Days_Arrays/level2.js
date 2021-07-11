const text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
  console.log(text);

let replaceComma = text.replaceAll(',', '');
console.log(replaceComma);//replacing all , with space

let replaceFullStop = replaceComma.replaceAll('.', '');
console.log(replaceFullStop);//replacing all fullstop

  
let toArray =replaceFullStop.split(' ');
console.log(toArray);//converts the string to an array

console.log(toArray.length);//counts the number of length


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('meat')
console.log(shoppingCart);//add meat to the initial

shoppingCart.push('sugar')
console.log(shoppingCart);//add sugar to the end

const shoppingCartt = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCartt.pop()
console.log(shoppingCartt);//removes honey

shoppingCartt[2] = 'Green Tea'
console.log(shoppingCartt);//replaced tea with Green Tea


