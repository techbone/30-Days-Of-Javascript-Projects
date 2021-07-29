for (i = 0; i <= 10; i++) {
  console.log(i);
} //1-10(for loop)

let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
} //1-10(while-loop)

let hash = "";
for (k = 0; k < 8; k++) {
  hash = hash + "#";
  console.log(hash);
} //using for-loop

let hashh = "";
let l = 0;
while (l < 8) {
  hashh = hashh + "#";
  console.log(hashh);
  l++;
} //using while-loop

for (i = 1; i <= 10; i++) {
  console.log(`${i}*${i}=${i * i}`);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

prime = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
}
console.log(`The sum of numbers between 0 and 100 is ${sum}`);
let add = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    add = add + i;
  }
}
console.log(sum);
let summ = 0;
for (let ii = 0; ii <= 100; ii++) {
  if (ii % 2 == 1) {
    summ = summ + ii;
  }
}
console.log(summ);
console.log(
  `The sum of all even numbers from 100 to 0 is ${sum}.And the sum of all odd numbers from 100 to 0 is  ${summ}`
);
let arrr = [];
arrr.push(sum, summ);
console.log(arrr);
prime;
for (let counter = 0; counter <= 100; counter++) {
  let notPrime = false;
  for (let i = 2; i <= counter; i++) {
    if (counter % i === 0 && i !== counter) {
      notPrime = true;
    }
  }
  if (notPrime === false) {
    console.log(counter);
  }
}
let arr = [];
for (let i = 0; i < 5; i++) {
  let random = Math.floor(Math.random() * 100);
  if (arr.indexOf(i) == -1) {
    arr.push(random);
  }
}
console.log(arr);
let number =
  "1wer2jeh4h5hr4h5jj56m66m5mm77nnrnen3n4nn6nnn65nn4n4n4n86nrnfndnenen";
let string = [];
for (let i = 0; i < 5; i++) {
  let random = number[Math.floor(Math.random() * number.length)];
  if (string.indexOf(i) == -1) {
    string.push(random);
  }
}
//  console.log(string);
let me = string.toString();
console.log(me.replaceAll(",", ""));
for (let num = 0; num < 101; num++) {
  if (num % 2 === 0) {
    break;
  } else if (num % 3 === 0) {
    break;
  } else if (num % 4 === 0) {
    break;
  } else if (num % 5 === 0) {
    break;
  } else if (num % 6 === 0) {
    break;
  } else if (num % 7 === 0) {
    break;
  } else if (num % 8 === 0) {
    break;
  } else if (num % 9 === 0) {
    break;
  } else if (num % 10 === 0) {
    break;
  } else if (num % 11 === 0) {
    break;
  } else if (num % 12 === 0) {
    break;
  } else {
    console.log(num);
  }
}
