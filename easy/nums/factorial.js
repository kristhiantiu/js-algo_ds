function factorialIterative(num) {
  let output = 1
  for(let i=num; i > 0; --i) {
    output *= i
  }
  return output;
}

function factorial(num) {
  return (num <= 1)
    ? 1
    : num * factorial(num - 1);
}

module.exports = factorial