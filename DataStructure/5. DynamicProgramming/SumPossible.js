const sumPossible = (amount, numbers, memo = {}) => {
    // todo
    // Brute Force Complexity
    // a = amount
    // n = length of numbers
    // Time: O(n^a)
    // Space: O(a)
    // Prefered solution: Memoized Complexity
    // a = amount
    // n = length of numbers
    // Time: O(a*n)
    // Space: O(a)
    
    if (amount in memo) return memo[amount]
    
    if (amount < 0) return false
    
    if (amount === 0) return true
    
    for (let num of numbers) {
      if (sumPossible(amount - num, numbers, memo) === true) {
        memo[amount] = true
        return true
      }
    }
    
    memo[amount] = false
    return false
  };
  
  module.exports = {
    sumPossible,
  };
  