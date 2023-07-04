const maxValue = (nums) => {
    // todo
    // Complexity
    // n = length of array
    // Time: O(n)
    // Space: O(1)
    let max = -Infinity
    for (let i of nums) {
      if (i > max) {
        max = i
      }
    }
    return max
  };
  
  module.exports = {
    maxValue,
  };
  