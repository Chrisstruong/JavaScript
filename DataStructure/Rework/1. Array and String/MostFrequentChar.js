// Complexity
// n = string length
// Time: O(n)
// Space: O(n)

const mostFrequentChar = (s) => {
    // todo
    const count = {}
    let max = 0
    let maxRepeatedChar 
    
    for (let char of s) {
      if (!(char in count)) {
        count[char] = 0
      }
      count[char] += 1
    }
    
    for (let char in count){
      if (count[char] > max) {
        max = count[char]
        maxRepeatedChar = char
      }
    }
    return maxRepeatedChar
  
  
  };
  
  mostFrequentChar('bookeeper')
  
  module.exports = {
    mostFrequentChar,
  };
  