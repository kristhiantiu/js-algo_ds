const twoSums = require('./two-sums')

test('[1, 2, 6, 4], 5 === [0,3]', () => {
  expect(twoSums([1, 2, 6, 4], 5)).toEqual([0, 3])
})


test('[], 5 === null', () => {
  expect(twoSums([], 5)).toBeNull()
})

test('[1], 5 === null', () => {
  expect(twoSums([1], 5)).toBeNull()
})

test('[3, 2, 3], 6 === [0, 2]', () => {
  expect(twoSums([3, 2, 3], 6)).toEqual([0, 2])
})

test('[3, 2, 2], 6 === [0, 2]', () => {
  expect(twoSums([3, 2, 2], 6)).toBeNull()
})

test('[-1,-2,-3,-4,-5], -8 === [2,4]', () => {
  expect(twoSums([-1,-2,-3,-4,-5], -8)).toEqual([2, 4])
})