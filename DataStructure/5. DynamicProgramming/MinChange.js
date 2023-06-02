const minChange = (amount, coins) => {
    const answer = _minChange(amount, coins)
    if (answer === Infinity) {
      return -1
    } else {
      return answer
    }
  }
  
  const _minChange = (amount, coins, memo = {}) => {
    // todo
    // Brute force complexity
    // Time: O(c^a)
    // Space: O(a)
    
    // Prefered solution: Memoization
    // Time: O(a*c)
    // Space: O(a)
    if (amount in memo) return memo[amount]
    
    if (amount < 0) return Infinity
    
    if (amount === 0) return 0
    
    let minCoins = Infinity;
    for (let coin of coins) {
      const numCoins = 1 + _minChange(amount - coin, coins, memo)
      minCoins = Math.min(minCoins, numCoins)
    }
    
    memo[amount] = minCoins
    return minCoins
  };
  
  module.exports = {
    minChange,
  };
  