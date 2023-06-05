const summingSquares = (n, memo = {} ) => {
    // todo
    // Brute Force Complexity
    // Time: O(sqrt(n)^n)
    // Space: O(n)
    
    // Dynamic Programming w/ Memoization
    // Time: O(n*sqrt(n))
    // Space: O(n)
    
    if (n in memo) return memo[n]
    
    if (n === 0) return 0
    
    let minSquares = Infinity
    for (let i = 1; i <= Math.sqrt(n); i += 1) {
      const square = i * i
      const numSquares = 1 + summingSquares(n - square, memo)
      minSquares = Math.min(numSquares, minSquares)
    }
    memo[n] = minSquares
    return minSquares
  };
  
  
  
  module.exports = {
    summingSquares,
  };
  