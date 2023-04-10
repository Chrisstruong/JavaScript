const pairSum = (numbers, targetSum) => {
    // todo

    

    // Brute force (nested loop) solution
    // Time: O(n^2)
    // Space: O(1)
    const pair = []
    
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i+1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === targetSum) {
          pair.push(i, j)
          return pair
        }
      }
    }
  };
  
  module.exports = {
    pairSum,
  };
  

