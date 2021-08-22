function fibonacciBad(num) { // O(2^N)
  if (num === 2 || num === 1) {
    return 1
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

function fibonacci(num) { // TABULATION O(N)
  if (num <= 2) return 1
  const table = [0, 1, 1]
  for (let i=3; i <= num; ++i) {
    table[i] = table[i-1] + table[i-2];
  }
  return table[num]
}

function fibonacciUsingMemoization(num) { // MEMOIZATION O(N)
  let memory = {
    2: 1,
    1: 1
  }

  function fib(num) { 
    if (num in memory) {
      return memory[num]
    }
    let output = fib(num - 1) + fib(num - 2)

    // save output to memory : memoization
    memory[num] = output
    return output
  }

  return fib(num)
}

module.exports = fibonacci