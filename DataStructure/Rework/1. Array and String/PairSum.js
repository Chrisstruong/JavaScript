const pairSum = (numbers, targetSum) => {
    // todo
    // Hash map solution
    // n = array length
    // Time: O(n)
    // Space: O(n)
    const previousNum = {}
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i]
      const compliment = targetSum - num
      if (compliment in previousNum) return [i, previousNum[compliment]]
      previousNum[num] = i
    }
  
    
    
    
    
    
    
  //   Brute Force solution (nested loop)
  //   Time: O(n^2)
  //   Space: O(n)
  //   const pair = []
    
  //   for (let i = 0; i < numbers.length; i++) {
  //     for (let j = i+1; j < numbers.length; j++) {
  //       if (numbers[i] + numbers[j] === targetSum) {
  //         pair.push(i, j)
  //         return pair
  //       }
  //     }
  //   }
  
  };
  
  
  pairSum([3, 2, 5, 4, 1], 8)
  const object = { "Firstname": "Triet"}
  if ("Firstname" in object) console.log("YES!") 
  else console.log("NO")
  
  
  module.exports = {
    pairSum,
  };
  