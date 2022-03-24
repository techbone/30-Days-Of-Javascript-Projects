class Student {
  constructor(firstName, secondName, Age, Height) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.Age = Age;
    this.limbs = 4;
    this.Height = Height;
  }
  fullName() {
    console.log(
      `My name is ${this.firstName} ${this.secondName} and i am ${this.Height} tall`
    );
  }
}

const Aminah = new Student("Aminah", "Yusuf", 13, "15 feets");

console.log(Aminah);

const Musa = () => {
  const add = (a, b) => a * b;
};
console.log(Musa());
