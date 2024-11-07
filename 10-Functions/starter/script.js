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
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;

//does not work:
//book(23, 'Sarah Williams')

// call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary cooper');
console.log(lufthansa);

book.call(swiss, 494, 'Liam');
console.log(swiss);

//apply method
const flightData = [583, 'George'];
book.apply(swiss, flightData);
console.log(swiss);
//same as:
book.call(swiss, ...flightData);

console.log('------- LECTURE 135. BIND METHOD ------');
//book.call(eurowings, 23, 'sarah williams');

const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Kewin');
bookEW23('Kiiwi');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//null is the first argument of bind, in this case works null
const addVAT = addTax.bind(null, 0.23);
// same as addVAT = value => value + value * 0.23

console.log(addVAT(100));

// challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

console.log('------ poll MINIAPP ------');

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favorite p. language?',
  options: ['0: JavaScript', '1: Python', '2: PHP', '3: R'],
  // generating [0, 0, 0, 0]
  answers: new Array(4).fill(0),

  // 1.1
  registrerNewAnswer() {
    // get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`,
      ),
    );
    console.log(answer);

    // register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    console.log(this.answers);
    let askToDisplay = prompt(
      'Do you want to see the results? Inform if in 0 -string or 1 - array',
    );
    if (askToDisplay === '0') {
      this.displayResults('string');
    } else {
      this.displayResults('array');
    }
  },

  // remove the number of the string to display the results
  removeNumOfOptions(string) {
    return string.replace(/[^a-zA-Z]+/g, '');
  },

  // display results
  displayResults(type) {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type == 'string') {
      // lets make it more presenteable.
      // loop trhough the answers array
      for (let i = 0; i < this.answers.length; i++) {
        // log the result of [i] to the console with the name of the option (w/o numbers) and the number of votes
        console.log(
          `${this.removeNumOfOptions(this.options[i])}: ${this.answers[i]}`,
        );
      }
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registrerNewAnswer.bind(poll));

// Didn't made the bonus part because I implemented other feature and it would take some time to remodel it to achieve that

console.log(
  '------- LECTURE 137. Immediately invoked function expressions (IIFE) ------',
);

// basically a func that runs once and never again

// this runs whenever we want
const runOnce = function () {
  console.log('This will never run again! 1 ');
};
console.log(runOnce());
console.log(runOnce());

// IIFE
(function () {
  console.log('This will never run again! 2');
})();

(() => console.log('This will never run again! 3'))();

{
  const isPrivate = console.log('I am privately encapsulated on my scope!');
  var notPrivate = console.log("And I'm not :(");
}

console.log('------- LECTURE 138. Closures ------');

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// a closer is not something tangible. It says about the capacity of access to a variable should not be accessible but it is because it is carried with the parent. In the case above, we can access the variable in the object because it cames with the secureBooking()

console.dir(booker);

console.log('------- LECTURE 139. Closures Example ------');

// EXAMPLE 1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//re-assigning f function
h();
f();

console.dir(f);

// EXAMPLE 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are all now boarding ${n} passengers`);
    console.log(`there are 3 groups, each one with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boardin in ${wait} seconds`);
};

const perGroup = 1000;

boardPassengers(180, 5);
