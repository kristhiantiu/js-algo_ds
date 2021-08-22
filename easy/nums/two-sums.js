
function twoSumsWrong(nums, target) { // fails on mix of negative and positive numbers
  let answer = null;
  const numHash = (nums || []).reduce((hash, cur, index) => ({
    ...hash,
    [cur]: {
      indices: hash[cur] === undefined ? [index] : [index, ...hash[cur].indices],
      check: cur > 0 ? cur <= target : cur >= target,
  }}), {});
  
  console.log(numHash)
  for (let num in numHash) {
    console.log(num)
    if (numHash[num].check) {
      const validPair = target - num
      if (validPair in numHash) {
        const secondPair = numHash[num].indices.pop()
        const firstPair = numHash[validPair].indices.pop()
        console.log('CHAN', firstPair, secondPair)
        if (firstPair !== undefined && secondPair !== undefined) {
          answer = [Math.min(firstPair, secondPair), Math.max(firstPair, secondPair)]
          break;
        }
      }
    }
  }
  return answer
}

function twoSums(nums, target) { //HASH MAP SOLUTION [3, 2, 3], 6
  let answer = null
  const numsNeededToIndex = {}
  for (let index = 0; index < nums.length; ++index) {
    const curValue = nums[index];
  
    if (curValue in numsNeededToIndex) {
      return [numsNeededToIndex[curValue], index];
    } else {
      const numberToFind = target - curValue;
      numsNeededToIndex[numberToFind] = index
    }
  }
  return answer
}

function twoSumsTwoPoint(nums, target) { //TWO POINT SOLUTION
  let left = 0;
  let right = nums.length === 0 ? 0 : nums.length - 1 ;
  let answer = null
  
  while(right !== 0) {
      if (nums[left] + nums[right] === target) {
          answer = [left, right]
          break;
      } else {
          ++left;
          if (left === right) {
              left = 0
              --right
          }
      }
  }
  return answer
}

module.exports = twoSums