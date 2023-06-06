const arrayStepper = (nums, i = 0, memo = {}) => {
    // todo
    // Dynamic Programiing w/ Memoization
    // n = length of array
    // Time: O(n^2)
    // Space: O(n)
    
    if (i in memo) return memo[i]
    
    if (i >= nums.length - 1) return true
    
    const maxStep = nums[i]
    for (let step = 1; step <= maxStep; step += 1) {
      if (arrayStepper(nums, i + step, memo) === true) {
        memo[i] = true
        return true
      }
    }
    
    memo[i] = false
    return false
    
  };
  
  module.exports = {
    arrayStepper,
  };
  