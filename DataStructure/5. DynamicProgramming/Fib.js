const fib = (n, memo = {}) => {
    // todo
    
    if (n in memo) return memo[n]
    
    if (n === 0) return 0
    
    if (n === 1) return 1
    
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  
    return memo[n]
  };
  
  const obj = {
    name: "alvin",
    occupation: "programmer"
  }
  
  
  
  module.exports = {
    fib,
  };
  