const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = function(arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product * current);
};

const power = (a, b) => a ** b;

const factorial = function(a) {
    let rval = 1;
    for (let i = 2; i <= a; i++)
        rval = rval * i;
    return rval;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
