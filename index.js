'use strict';

const faker = require('faker');
const greet = require('./lib/greet');
const arithmetic = require('./lib/arithmetic');

console.log(greet.sayHi(faker.name.firstName()));

let a = faker.random.number();
let b = faker.random.number();

console.log(`Let's try some addition: ${a} plus ${b} is ${arithmetic.add(a,b)}!`);
console.log(`Let's try some subtraction: ${a} minus ${b} is ${arithmetic.subtraction(a,b)}.`);
console.log(`Time for some multiplication: ${a} times ${b} is ${arithmetic.multiply(a,b)}.`);
console.log(`Now for some division: ${a} divided by ${b} is ${arithmetic.divide(a,b)}`);