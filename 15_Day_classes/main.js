// class Book {
//   constructor(BookName, Pages, Author) {
//     this.BookName = BookName
//     this.pages = Pages
//     this.Author=Author
//   }
//   getFullBookProperties() {
//     return this.Bookname + '' + this.pages + "" + this.Author
//   }
//   getBookName() {
//    return this.BookName 
//   }
//   getBookAuthor() {
//     return this.Author
//   }
//   getBookPages() {
//     return this.Pages
//   }
// }

class Animal {
   constructor (name, sound) {
       this.name = name
      this.noOfLegs = 2
      this.sound = sound
   }
     makeSound() {
       console.log(this.sound, this.sound, this.sound)
     }
   }

  const cat = new Animal('🐈', 'meow');
  console.log(cat)
cat.makeSound()
  
class Bird extends Animal {
  constructor(name, sound, canFly) {
    super(name, sound)
    this.canFly = canFly
  }
  fly () {
    console.log('The', this.name, 'is flying')
  }
}

const eagle = new Bird('🦅', 'quah','flying');
console.log(eagle)
eagle.makeSound()
eagle.fly()

const ostritch = new Bird('😍', 'brrrr', 'jumping')
console.log(ostritch)
ostritch.makeSound()
ostritch.fly()