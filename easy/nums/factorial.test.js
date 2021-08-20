const factorial = require('./factorial')

test(`1!`, () => {
  expect(factorial(1)).toBe(1);
});

test(`5!`, () => {
  expect(factorial(5)).toBe(120);
});