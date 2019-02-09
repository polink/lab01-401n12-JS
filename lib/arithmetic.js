'use strict';

let arithmetic = module.exports = {};

arithmetic.add = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {return null;}
    return a + b;
};

arithmetic.subtract = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {return null;}
    return a - b;
};

arithmetic.multiply = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {return null;}
    return a * b;
};

arithmetic.divide = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        if (b !== 0) {
            return a / b;
        } else {
            return 'Error: Attempted to divide by zero.';
        }
    } else {
        return null;
    }
};