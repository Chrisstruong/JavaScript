const isPrime = (n) => {
    // todo
    if (n == 1) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false
    }
    return true
    
  //   time complexity: O(sqrt(n))
  //   space complexity: O(1)
  };
  
  module.exports = {
    isPrime,
  };
  