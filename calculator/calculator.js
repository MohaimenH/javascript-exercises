const add = (a=0,b=0) => {
  return Number(a) + Number(b);
};

const subtract = (a=0,b=0) => {
	return Number(a) - Number(b);
};

const sum = (arr) => {
  let result = 0;
	for (let x of arr) {
    result += x;
  }
  return result;
};

const multiply = (arr) => {
  let result = 1;
	for (let x of arr) {
    result *= x;
  }
  return result;
};

const power = (a,b) => {
	return a ** b;
};

const factorial = (n) => {
	if (n <= 1) return 1;

  return n * factorial(n-1);
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
