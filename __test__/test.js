'use strict';

const greet = require('./../lib/greet');
const arithmetic = require('./../lib/arithmetic');
const faker = require('faker');

describe('#greet.test.js', () => {
    const testGreet = greet.sayHi('World');
    const nullGreet = greet.sayHi(null);
    const numGreet = greet.sayHi(faker.random.number());
    test('test for greet.sayHi, should return \'Hello World!\'', () => {
    // ARRANGE
    // ACT
    // ASSERT
        expect(testGreet).toEqual('Hello World!');
    });
    test('make sure that sayHi parameter can\'t take in null', () => {
        expect(nullGreet).toEqual(null);
    });
    test('make sure that sayHi parameter can\'t take in numbers', () => {
        expect(numGreet).toEqual(null);
    });
});

describe('#arithmetic.test.js', () => {
    // test for add
    test('Addition test', () => {
        expect(arithmetic.add(6, 10)).toEqual(16);
    });
    // test for subtract
    test('Subtraction test', () => {
        expect(arithmetic.subtract(6, 10)).toEqual(-4);
    });
    // test for multiply
    test('Multiplication test', () => {
        expect(arithmetic.multiply(6, 10)).toEqual(60);
    });
    // test for divide
    test('Division test', () => {
        expect(arithmetic.divide(10, 5)).toEqual(2);
    });
    // divide by zero test
    test('Divide by zero test', () => {
        expect(arithmetic.divide(6, 0)).toEqual('Error: Attempted to divide by zero.');
    })
});