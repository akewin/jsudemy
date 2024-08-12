// this is a new document :)
"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

  order(starterIndex, mainIndex) {
    return this.starterMenu[starterIndex], this.mainMenu[mainIndex];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizz(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// lecture 114. optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// ES2020 introduced a better way for doing this nestes checking which is called optional chaoning

// only if the property before the question mark exist the code will run the next part

console.log(restaurant.openingHours?.mon);
console.log(restaurant.openingHours?.mon?.open);

// example...

// here we have a for that will go through the weekdays array and if in the openingHours object there is a property with the same name of the weekday, then it will print the opening hours of that day. Else it prints closed. We used ?? instead of || because we are working with undefined
for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day} we open at ${open}`);
}

//methods
console.log(restaurant.order?.(1, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

//arrays
const users = [
  {
    name: "Kewin",
    email: "hello@gmail.com",
  },
];

console.log(users[0]?.name ?? "User array empty");
//----------------------------
//115. looping objects, object keys, values and entries

// property names
const properties = Object.keys(openingHours);
console.log("properties:", properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

//property values
const values = Object.values(openingHours);
console.log(values);

//entire object
const entries = Object.entries(openingHours);
//console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// 17. Sets
console.log("---------SETS----------");

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet);
console.log(new Set("Kewin"));
console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Potato"));

// we can also add, remove, clear and convert sets to arrays. just keep in mind sets are iterables and do not have indexing, we can't order the items inside it

// maps
console.log("-------maps-------");
const rest = new Map();
rest.set("name", "classico italiano");
rest.set(1, "Firenze, Italy");

console.log(rest.set(2, "lisbon, portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open =)")
  .set(false, "we are closed =(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

// we check if the time provided is in the working hours of the restaurant, and it is clever because the result is a boolean, and a boolean will return the message "we are open =(" or not
const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// other things we can do
console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
rest.set([1, 2], 'test');
console.log(rest.size);
//rest.clear();
console.log(rest);
