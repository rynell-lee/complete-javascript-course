'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(s, m) {
    return [this.starterMenu[s], this.mainMenu[m]]; //return in array
  },

  orderDelivery({ location, starter, main }) {
    console.log(location, this.starterMenu[starter], this.mainMenu[main]);
  },

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
};

const orderNow = {
  starter: 1,
  main: 2,
  location: '410113',
};

// restaurant.orderDelivery(orderNow);

// //destructuring arrays
// let [a, , b] = restaurant.categories;
// console.log(a, b);

// //reassignment with destructuring
// [a, b] = [b, a];
// console.log(a, b);

// //returning mutliple values
// const [starter, main] = restaurant.order(3, 1);
// console.log(starter, main);

// //nested destructuing
// const nested = [2, 3, [4, 5]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //default values

// const [p = 1, q = 1, r = 1] = [8, 10];
// console.log(p, q, r);

// //destructuing objects
// const { name, openingHours } = restaurant; // match the keys in the object
// console.log(name);

// //renaming? objects
// const { name: restName } = restaurant;
// console.log(restName);

// //setting default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables
// let x = 2;
// let y = 3;
// const obj = { x: 40, y: 20 };
// ({ x, y } = obj); //wrap in prantheses
// console.log(x, y);

// //nested objects
// console.log(openingHours);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// //spread operator
// const arr = [4, 5, 6];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

//creating shallow copy of array
const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //join 2 array
// const latestMenu = [...restaurant.starterMenu, ...mainMenuCopy];
// console.log(latestMenu);

//iterables: arrays, strings, maps, sets. NO objects
//... works on strings
//works when passing arguements into a function
// const args = [1, 2, 3];
// function spread(a, b) {
//   console.log(a, b);
// }

// spread(...args);

// //copy objects
// const newResto = { ...restaurant, founder: 'rynell' };
// //... allows us to make a new copy of the restraunt and manipulate it as its own object

// console.log(newResto);

// //rest pattern and parameters

// //...c takes the rest (only 1)
// const [a, b, ...c] = [1, 2, 3, 4, 5];
// console.log(a, b, c);

// //objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //rest functions
// function add(...args) {
//   console.log(args);
// }

// add(2, 3, 4, 5);

//short circuiting
// OR operator returns the first truthy value
// console.log(3 || 0);

//somewhat works like a ternay, it checks if numguest exist else 20 is logged
// const guest = restaurant.numGuest || 20;
// // restaurant.numGuest = 25;
// // console.log(restaurant.numGuest);

// //AND operator, it logs the first falsy value (opp of OR). if both true, it will return the last true
// //comparing if and short-circuit
// if (true) {
//   console.log('yay');
// }

// console.log(true && 'yay'); //returns first falsy if not last truthy

// //nulish coalecent ??
// //nullish values: null and undefined
// const g2 = restaurant.numGuest ?? 10; //if null, return. else 10
// console.log(g2);

// //logical assignemnt operator

// const r1 = {
//   owner: 'o',
//   chef: 'kymmy ',
// };

// r1.owner &&= 'haru';
// console.log(r1);
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*//1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//2 bayern players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'thiago', 'coutinho'];
console.log(players1Final);

//5
const { team1, team2, x: draw } = game.odds; //property: new str name
console.log(draw);

//6
function printGoals(...players) {
  console.log(players.length);
}
printGoals(...game.scored);

//logical
team1 < team2 && console.log('team 1 more liklely'); //returns the first falsy

//for of
console.log(players2);
for (const player of players2) {
  console.log(player);
}

//for of with entries (prints out its index in array format)
for (const player of players2.entries()) {
  console.log(player);
}

//enhanced object literals es6
//1. we can add an object into an object
//2. we dont have to define the 'function' in methods

//optional chaining: if property not found, return undefined
console.log(restaurant.openingHours.fri?.open); //checking if the property exists with ?

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const h = restaurant.openingHours[day]?.open;
  console.log(`On ${day}, resto opens at ${h ?? 'closed'}`); //returns right hand expr if left hand is nullish
}

//optional chaining to find methods
console.log(restaurant.order?.(1, 2) ?? 'not found');
console.log(restaurant.hehe?.(1, 2) ?? 'not found'); //if null returns right hand

//optional chainign works on arrays as well, good to use when finidn objects in arrays maybe?
//with this we can aaovid using if else

//looping objects
const d = Object.keys(restaurant.openingHours); //returns an array of the keys
console.log(d);

const v = Object.values(restaurant.openingHours); //returns array of values
console.log(v);

const e = Object.entries(restaurant.openingHours); //keys are the 'indexes' the rest is in an object
console.log(e);

for (const [key, value] of e) {
  //we can destrucutre value > { open, close}
  console.log(key, value);
}
*/

/*//codign challenge 2
for (const [x, p] of game.scored.entries()) {
  console.log(`Goal ${x + 1}: ${p}`);
}

// console.log(game.scored);
const oddsArr = Object.values(game.odds);
console.log(oddsArr);
const totalOdd = oddsArr.reduce((a, b) => a + b, 0);
const avgOdd = totalOdd / 3;
console.log(avgOdd);

//formated texts

//count of scores
const scoreSheet = {};
for (const player of game.scored) {
  scoreSheet[player] ? (scoreSheet[player] += 1) : (scoreSheet[player] = 1);
}
console.log(scoreSheet);*/

/*
//sets
//set removes duplicates fomr an array
const aa = [1, 2, 3, 3, 3, 4];
const bb = [...new Set(aa)]; //unique elements in an array (unpackingz)
// console.log(bb);

const aSet = new Set([1, 2, 3, 4, 5, 5, 5, 6, 6]); //unique stored in curly brace {} (we can loop through this)
// console.log(aSet);
console.log(aSet.size); // similar to length
console.log(aSet.has(1)); //check if the set has property
aSet.add(7); //add
// aSet.delete(1); // remove
const splits = new Set('rynell'); // splits up the string
console.log(splits);
*/

/*
//MAPS
const newRest = new Map(); // we can add an array of arrays to fill in the values too
newRest.set('name', 'rynell');
newRest.set('location', 'singapore');
newRest.set('gf', 'kymmy');
newRest.set('dog', 'haru').set('cat', 'bella'); //set method returns the most updated lists, hence we can chain
console.log(newRest.get('dog')); //retrieve data by the key, smart to use boolean sometimes where the conidtion is either t / f
console.log(newRest.has('dog')); // check property
//clear, delete and size works for maps as well
//keys can be declared arrays and even DOM elements
console.log(newRest);

//convert objects to maps
// console.log(Object.entries(restaurant.openingHours)); // this is an array of arrays
const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

//convert map to array
console.log([...newRest.keys()]);
*/

/*
//coding challenge
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const arrEvents = [...new Set(gameEvents.values())];
console.log(arrEvents);

gameEvents.delete(64);
console.log(gameEvents.size); //length of map

for (const [time, event] of gameEvents) {
  time <= 45
    ? console.log(`[FIRST HALF]${time}: ${event}`)
    : console.log(`[SECOND HALF]${time}: ${event}`);
}
*/

/*
//STRINGS
//we can index strings like arrays
//length works on strings too
const str = 'hello i am ello';
console.log(str.indexOf('o'));
console.log(str.lastIndexOf('o')); // last
console.log(str.slice(5)); //starts at index 5
console.log(str.slice(6, 10)); //ends at 9
//string has methods becasue js stores it as an object
//toupper tolower
//.trim() removes whitespaces at both ends
//trimstart and end also available
//.replace()
//replacing with regex > /word/g
//.includes()
//str.startsWith() and str.endsWith()
//.split()
//.join()
//padding
// console.log('hello'.padStart(25, '+')); //padEnd is avail too
//padding wworks for masking numbers or strings (cc)
//.repeat(n) > repeats the str n times
*/

/*
//coding 4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const texts = document.querySelector('textarea').value;
  console.log(texts);

  //seperate line by line
  const newTexts = texts.split('\n');
  console.log(newTexts);

  let n = 0;
  let longestText;
  for (let i = 0; i < newTexts.length; i++) {
    if (newTexts[i].length > n) {
      n = newTexts[i].length;
      longestText = newTexts[i];
    }
  }
  // console.log(longestText);
  let x = 0;
  for (const text of newTexts) {
    x += 1;
    const lowerText = text.toLowerCase().trim();
    const firstWord =
      lowerText[0].toLowerCase() + lowerText.slice(1, lowerText.indexOf('_'));
    const secondWord =
      lowerText[lowerText.indexOf('_') + 1].toUpperCase() +
      lowerText.slice(lowerText.indexOf('_') + 2);
    const cc = firstWord + secondWord;

    //logging results
    console.log(`${cc.padEnd(longestText.length + 3, ' ')}${'✅'.repeat(x)}`);
  }
});
*/

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const dataArr = flights.split('+');
// console.log(dataArr);

for (const data of dataArr) {
  const singleData = data.split(';');
  // console.log(singleData);
  const event = singleData[0].replace(/_/g, ' ').trim();
  // console.log(event);
  const current = singleData[1].slice(0, 3).toUpperCase();
  // console.log(current);
  const destination = singleData[2].slice(0, 3).toUpperCase();
  // console.log(destination);
  const time = singleData[3].replace(':', 'h');
  // console.log(time);

  let sentence = `${event} ${current} ${destination} (${time})`;
  if (sentence.includes('Delayed')) {
    sentence = '🔴 ' + sentence;
  }
  console.log(sentence.padStart(36));
}
