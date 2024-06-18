'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return this.starterMenu[starterIndex], this.mainMenu[mainIndex];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizz: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//additional
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// Class 5 - destructuring objects
const { name, openingHours, categories } = restaurant;
console.log('this is the object destrucutring', name, openingHours, categories);

// renaming them
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// defyning default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// nested objects
const { fri } = openingHours;
console.log(fri);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
});

// comments of the class:
// to destructure an array is a way to easily store its values on a variable

// example array arr
const arr = [2, 3, 4];
// selecting elem. 0 of arr to store on var. const, a
//const a = arr[0];
//const b = arr[1];
//const c = arr[2];

// even though we are destructuring an array, we are not destructing it. the original array keeps unaffected.
const [x, y, z] = arr;
console.log(arr);

// getting it from the restaurant above
// to get the third element on the array I just skip the element in the middle with a collon
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// if in case we wanted to switch main and secondary values, the bad way of doing it would be:
/*
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary)


// but there's a better way to do it:
[main, secondary] = [secondary, main];
console.log(main, secondary);

// storing 2 values of a funtion to a variable
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

// nested array
const nested = [2,4, [5, 6]];
//const [i, j] = nested;
console.log(i,j);
const [i, , [j, k]] = nested
console.log[i, j, k];

// default values
const [p, q, r] = [8, 9];
console.log(p,q,r);

// 5. destructuring objects
const{name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, 
  openingHours: hours, 
  categories: tags
} = restaurant

console.log(restaurantName, hours, tags);

// setting defaults
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//  Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj);
console.log(a, b);

// nested objects
//const {fri: open(a), close(b)};
console.log(fri);
*/

console.log('CLASS 10: THE SPREAD OPERATOR');
// Class 5 - The Spread Operator

// let's say we have this array:
const arr = [7, 8, 9];
// what if we wanted to join this?
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
// bad, isn't it?
// let's use the spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

// new example
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newArr);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu2);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Kewin';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// only work with functions or arrays
// console.log(`${...str} kiwi`); - do not work

const ingredients = [
  prompt("Let's make pasta! ingredient 1?"),
  prompt('ingredient 2?'),
  prompt('ingredient 3?'),
];
console.log(ingredients);

// good use:
// instead of:
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// spread opp also work with objcts
const newRestaurant = { foundedIn: 1978, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// or copy it!
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Nova Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// lecture 7 - rest pattern and parameters
// 1) objects
// spread, because on right side of =
const arr2 = [1, 2, ...[3, 4]];

// restm because on left side of =
const [a2, b2, ...others] = [1, 2, 3, 4, 5];
console.log(a2, b2, others);

// usage example
const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

// any ingredient will be added to pizza. useful for optional items
restaurant.orderPizz('Mushrooms', 'onions', 'olives', 'alfafa');

// lecture  7. rest patterns and rest elements

// 1) DESTRUCTURING

// SPREAD, because on right side of =
const arr3 = [1, 2, ...[3, 4]];
// REST, because on left side of =
const [a1, b1, ...others2] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza2, , risotto2, otherFood2] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza2, risotto2, otherFood2);

// objets
const { sat2, ...weekdays2 } = restaurant.openingHours;
console.log(weekdays2);

// 2) FUNCTIONS
const add2 = function (...numbers2) {
  console.log(add2);
  // since destructuring "compress" it, we will create a simple wau to join the values
  let sum = 0;
  for (let i = 0; i < numbers2.length; i++) sum += numbers2[i];
  console.log(sum);
};

add(2, 3);
add(3, 5, 6, 8);
add(8, 6, 4, 4, 3, 2);

// lecture 8. Short Circuiting (&& and a ||)

console.log('------- OR -------');
// it always stands for the truthy value
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// more practical application
// if numGuests doesn't exist, then numGuests = 10
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

// important: even tough numGuests exist and has a truthy value, if numGuests = 0 it will not be considered a truthy value

console.log('------- AND -------');
// missing code

// lecture 9 - nullish ciakescing operator
restaurant.numGuests3 = 0;
const guests3 = restaurant.numGuests || 10;
console.log(guests3)

// the operator itself
const guestCorrect = restaurant.numGuests3 ?? 10;
console.log(guestCorrect);

// the nullish operator works with the idea of nullish values instead of falsy values (nullish = null or undefined, do not include 0 or '')
