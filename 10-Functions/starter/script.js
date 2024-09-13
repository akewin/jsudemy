'use strict';

console.log('------- LECTURE 129. DEFAULT PARAMETERS ------');

//we can pass default parameters to a function

const bookings = [];

//simply by putting the default value after the =
const createBoooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
){
  // In ES5 we would do it his way>
  //numPassengers = numPassengers || 1;
  //price = price || 199 * numPassenger;
}
