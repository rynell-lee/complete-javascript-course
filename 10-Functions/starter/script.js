'use strict';

/*
//default params
const bookings = [];
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 10 * numPassenger
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123', 10);
*/

//value vs reference

//primitive values will not be altered if passed into a function
//reference tpyes like obejcts can be altered in the function
//msut be careful when passing in an object to multiple functions
//js does not have pass by reference
/*
const flight = 'xxx1';
const person = {
  name: 'rynell',
  pets: 'dog',
  gf: 'kymmy',
};

const checkGf = function (num, person) {
  num = 'yyy1';
  person.gf = 'booboo';
};

checkGf(flight, person);
console.log(flight);
console.log(person);
*/

//first class and higher order functions
// a function that accepts a fn as an argument is higher order
// callback fn are the arguments
// fn.name returns the name of the function
//addeventlistener is higher order

// document.body.addEventListener('click', function () { //this fn is a cb
//   console.log('stop');
// });

/*
//functions that return functiions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const sayHey = greet('Hey'); // sayHey becomes a new function
sayHey('haru');

// greet('hello')('booboo'); //this works too but looks kinda weird
const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);
greet2('hello')('booboooo')
*/

/*
//call and apply method
const SQ = {
  airline: 'Singapore Airlines',
  iata: 'SQ',
  bookings: [],
  book(num, name) {
    console.log(
      `${name} booked a flight on ${this.iata}${num}, ${this.airline}`
    );
    this.bookings.push({ flight: `${this.iata}${num}`, name });
  },
};
SQ.book(123, 'rynell'); // we cannot assign a method to a new name

//call
const em = {
  airline: 'Emirates',
  iata: 'EM',
  bookings: [],
  planes: 200,
};
const book = SQ.book; //if we do this
book.call(em, 145, 'kymmy'); //we need to use call
console.log(em.bookings);
console.log(SQ.bookings);
//apply
const x = [123, 'haru'];
book.apply(em, x); //basically applying x to the params, not rly used anymore now have spread ...
//bind
const bookEM = book.bind(em); //binds the object to this book function, can bind other arguments too like num
bookEM(444, 'hotdog');
//using bind for dom elements
em.buy = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', em.buy.bind(em)); //here we bind the object to the function so that we let js know that 'this' refers to the object and not the html element

//using bind to create new but similar functions
//the first argument is null as it point to 'this'
//we can do this  for fixed params

*/
/*
//coding challenge 1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(`${this.question}\n${this.options.join('\n')}`);
    if (answer >= 0 && answer < 4 && answer !== '') {
      console.log(answer);
      console.log('correct');
      this.answers[answer]++;
      this.displayResults();
    } else {
      console.log('invalid');
      this.registerNewAnswer();
    }
  },
  displayResults(values) {
    const x = prompt('Display results in array or string format?');
    if (x === 'array') {
      console.log(this.answers);
      console.log(values);
    } else {
      console.log(`Poll results are ${this.answers.join(',')}`);
    }
  },
};

console.log(poll);
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll)); //bind so that we do not link it to 'this'
const td1 = [5, 2, 3];
const display = poll.displayResults;
display.call(poll, td1);
*/

/*
//IIFE, no name ando nly runs once
//Developers primarily use this pattern to ensure variables are only accessible within the scope of the defined function
(function () {
  console.log('only once');
})();
//arrow verison
(() => console.log('also once'))();

//closures
//closure allows inside functions to 'remember' all the variables from its birth function
//inide functions will always have access to the variable enivronment from original the execution context that it was creatt in
//its basically within the scope of where the funciton was created in

const secureBooking = function () {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
};

const b1 = secureBooking();
b1(); //b1 will always have accesed to the parent execution context
b1();
//console.dir(fn) > gives u access to the properties and we can see the closure
*/

//coding 2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  header.addEventListener('click', function () {
    header.style.color = 'blue'; //closure allows u sto get access to variable 'header'
  });
})();
