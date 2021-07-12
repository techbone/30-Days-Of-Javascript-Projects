const dog = {};
console.log(dog);

dog.name = "pup"
dog.legs = 4
dog.color = "black"
dog.age = 7
dog.bark = "barking"

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark);

dog.breed = "sherperd"
dog.getDogInfo = function () {
  return `${this.name} has ${this.legs} legs and it's ${this.color} in color`
}

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

Object.entries(users).sort((a, b) => b[1].skills.length - a[1].skills.length)[0][1].skills

let mostUsers = Object.entries(users).sort((a, b) => b[1].skills.length - a[1].skills.length)[0][1].skills

console.log(mostUsers);




let highest = { name: '', skills: []}
for (let userKey in users) {
  const user = users[userKey]
  if (user.skills && user.skills.length > highest.skills.length) {
    highest = { name: userKey, skills: user.skills };
  }
}
console.log(highest);

const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
console.log(materials.map(materials => materials.length-1))


// for (let i = 0; i < usersArray.length; i++) {
//   const skills = usersArray[i][1]['skills']
//   const name = usersArray[i][0]
//   if (highest.skills < skills.length) {
//     highest = { name: name, skills }
//   }
// }
// console.log(highest)

const mern=['MongoDB', 'Express', 'React', 'Node']

Object.entries(users).filter(user => mern.every(skill => user[1].skills.includes(skill)))

let filterEntries = Object.entries(users).filter((user) => mern.every((skill) => user[1].skills.includes(skill)))

console.log(filterEntries)



const personAccount = {
  firstName: 'Abdulsamii',
  lastName: 'Ajala',
  incomes: [
    {
      desc: "May Salary",
      amount: 2_000_000
    },
    {
      desc: "Feeding Allowance",
      amount: 100_000
    },
  ],
  expenses: [
    {
      desc: "Macbook",
      amount: 800_000
    },
    {
      desc: "iPhone",
      amount: 640_000
    },
  ],
  totalIncome: function () {
    return this.incomes.reduce((total, current) => total + current.amount, 0)
  },
  totalExpense: function () {
    return this.expenses.reduce((total, current) => total + current.amount, 0)
  },
  accountInfo: function () {
    return `Your name is ${this.firstName} ${this.lastName}, your total Expense is ${this.totalExpense()} and your total income is ${this.totalIncome()}. Your account balance is ${this.totalIncome() - this.totalExpense()}`
  },
  addIncome: function (desc, amount) {
    this.incomes.push({ desc, amount })
  },
  addExpense: function (desc, amount) {
    this.expenses.push({ desc: desc, amount: amount })
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense()
  }
}
// console.log(personAccount)
// console.log(personAccount.accountBalance())
// console.log(personAccount.accountInfo())
const userss = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false
  }
];
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
const generateId = () => Math.random().toString(36).substring(5)
const signup = (username, email, password) => {
  const userExist = users.find(user => user.username === username || user.email === email)
  if (userExist) return console.log('You already have an account');
  users.push({
    _id: generateId(),
    username,
    email,
    password,
    createdAt: new Date().toLocaleString(),
    isLoggedIn: false
  })
}
const login = (username, email, password) => {
  // find index of user with matching email or username
  const userIndex = users.findIndex(user => user.email === email || user.username === username)
  // check if user exists
  if (userIndex === -1) {
    return console.log('User does not exist');
  }
  const user = users[userIndex]
  // check if password is correct
  if (user.password !== password) {
    return console.log('Password is incorrect');
  }
  users[userIndex].isLoggedIn = true
  console.log('Welcome back')
}
const rateProduct = (userId, productId, rating) => {
  const productIndex = products.findIndex(product => product._id === productId)
  // check if product exists
  if (productIndex === -1) {
    return console.log('Product does not exist');
  }
  products[productIndex].ratings.push({ userId, rate: rating })
}
const averageRating = (productId) => {
  const product = products.find(prd => prd._id === productId)
  if (!product) {
    return console.log('product not found')
  }
  const totalRatings = product.ratings.reduce((total, current) => total + current.rate, 0)
  console.log(totalRatings / product.ratings.length)
}

//Begining of something random//
 const randomArrayy =  function() {
  let names = ["Jiraya", "Minato", "Sasuke", "Naruto", "Luffy"]
  let RandomName=names[Math.floor(Math.random() * names.length)
  ]
  return RandomName
 }
console.log(randomArrayy())


multiply(10, 2)
function multiply(a, b) {
  let multiplyFormular = a*b
  return multiplyFormular
}
console.log(multiply)
//The end of the random shit//

// const sumAll = (a, b) => a + b
// console.log(sum(10,30))