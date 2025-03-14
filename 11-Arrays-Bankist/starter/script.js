'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

const displayMovemets = function (movements) {
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdraw';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovemets(account1.movements);

// creates the usernames by abbreviating the first letter of each name
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);
console.log(accounts);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('---- forEach');
// // now we can use forEach
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

/*
//////////////////////////////////////////////////
console.log('---------- Simple Array Methods ----------');
let arr = ['a', 'b', 'c', 'd'];
//slice method we can change any part of an array without changing the original array
console.log(arr.slice(2, 4));
// minus 1 is always the last element
console.log(arr.slice(-1));
// we can also use it to create a copy of the array, just like using spread operator
console.log(arr.slice());
console.log([...arr]);

// splice works almost the same way but it do changes the original array
console.log(arr.splice(2));

// reverse
arr = ['a', 'b', 'c', 'd'];
let arr2 = arr.reverse();
console.log(arr.reverse());

// concat
const letters = arr.concat(arr2);
console.log(letters);
// same as
console.log(...arr, ...arr2);

// join
console.log(letters.join('-'));

// ---- THE NEW AT METHOD -----
console.log('---- THE NEW AT METHOD -----');
const arr3 = [12, 26, 34];
console.log(arr3[0]);
console.log(arr3.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

//also works on strings
console.log('kewin'.at(0));
*/

// FOREACH WITH MAPS AND SETS
// console.log('---------- forEach with maps and sets ----------');

// //map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${value}, ${key}`);
// });

// //set
// const currenciesUnique = new Set(['USD', 'BRL', 'GBP', 'ETH']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   const juliaCorrected = dogsJulia.slice();
//   juliaCorrected.splice(0, 1);
//   juliaCorrected.splice(-2, 2);
//   console.log(juliaCorrected);

//   const juliaAndKate = juliaCorrected.concat(dogsKate);
//   juliaAndKate.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// // MAP, FILTER, REDUCE
// console.log('---------- Map, filter, reduce ----------');

// const usdToEur = 1.1;
// /*
// const movUSD = movements.map(function (mov) {
//   return mov * usdToEur;
// });
// */
// const movUSD = movements.map(mov => mov * usdToEur);

// console.log(movements);
// console.log(movUSD);

// const movementUSDfor = [];
// for (const mov of movements) movementUSDfor.push(mov * usdToEur);
// console.log(movementUSDfor);

// const movDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`,
// );

// console.log(movDescriptions);


// Challenge 2
// dogAge the dog age in humhumanars using the following formula: if the dog is 2 years old, humanAge 2 dogAge. If the dog is 2 years old, humanAge 16+ dogAge 4.

309 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)

310 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages

311 4. Run the function for both test datasets

312

313 TEST DATA 1: 15, 2, 4, 1, 15, 8, 31

314 TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

315

316 GOOD LUCK