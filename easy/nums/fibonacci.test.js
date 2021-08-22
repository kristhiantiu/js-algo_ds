const fibonacci = require('./fibonacci')

test('fib(1) is 1', () => {
  expect(fibonacci(1)).toBe(1);
})

test('fib(2) is 1', () => {
  expect(fibonacci(2)).toBe(1);
})

test('fib(3) is 2', () => {
  expect(fibonacci(3)).toBe(2);
})


test('fib(4) is 3', () => {
  expect(fibonacci(4)).toBe(3);
})


test('fib(50) is 12586269025', () => {
  expect(fibonacci(50)).toBe(12586269025);
})


