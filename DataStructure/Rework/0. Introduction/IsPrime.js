const isPrime = (n) => {
    // todo
    // n = input number
    // Time: O(square_root(n))
    // Space: O(1)
    if (n === 1) return false
    for (let i = 2; i <= Math.sqrt(n); i++){
      if (n % i === 0) return false
    }
    return true
  };
  
  module.exports = {
    isPrime,
  };
  