'use strict';

console.log('------- LECTURE 130. DEFAULT PARAMETERS ------');

//we can pass default parameters to a function

const bookings = [];

//simply by putting the default value after the =
const createBoooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  // In ES5 we would do it his way>
  //numPassengers = numPassengers || 1;
  //price = price || 199 * numPassenger;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBoooking('LH123');
createBoooking('LH234', 2, 900);

console.log('------- LECTURE 131. HOW PASSING ARGUMENTS WORKS ------');

const flight = 'LH234';
const jonas = {
  name: 'Jonas',
  passport: 23912839218,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport == 23912839218) {
    //alert('Checked In!');
  } else {
    //alert('Not authorized!');
  }
};

console.log(flight);
console.log(jonas);
checkIn(flight, jonas);

// is the same as doing
const flightNum = flight;
const passenger = jonas;

console.log(flight);
console.log(passenger);

// passing a primitive type to a function like this is just like simply copying the value (like a reference on the memory), so this is why the flightNum doesn't change. On the other hand, the passenger does change because it is likely to directly interact with the object.

console.log(
  '------- LECTURE 132. FUNCTIONS ACCEPTING CALLBACK FUNCTIONS ------',
);

// creating a function that removes all the blank spaces on a str
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// function that returns the first word uppercase
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original str: ${str}`);
  console.log(`Transformed str: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

console.log('------- LECTURE 133. FUNCTIONS RETURNING FUNCTIONS ------');

//const greet = function (greeting) {
//return function (nome) {
//    console.log(`${greeting}, ${nome}`);
//  };
//};

//using arrow frunc - challenge
const greet = greeting => nome => console.log(`${greeting}, ${nome}`);

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Kewin');

greet('Hello')('Kewin');

console.log('------- LECTURE 134. THE CALL AND APPLY METHODS ------');

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function (){} can be:
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(378, 'Anthony Kewin');
lufthansa.book(699, 'Kiwi Wiki');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings' ,
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//does not work:
//book(23, 'Sarah Williams')

book.call(eurowings, 23, 'Sarah Williams')
