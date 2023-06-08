const canConcat = (s, words, memo = {} ) => {
    // todo
    // Brute Force Complexity:
    // s = string length
    // n = # words
    // Time: O(n^s)
    // Space: O(s)
    
    // Dynamic Programming w/Dynamic Memoization
    // s = string length
    // n = # words
    // Time: O(ns)
    // Space: O(s)
    
    if (s in memo) return memo[s]
    
    if (s === '') return true
    
    for (let word of words) {
      if (s.startsWith(word) === true) {
        const suffix = s.slice(word.length)
        if (canConcat(suffix, words, memo) === true) {
          memo[s] = true
          return true
        }
      } 
    }
    
    memo[s] = false
    return false
  };
  
  module.exports = {
    canConcat,
  };
  