const fiveSort = (nums) => {
    // todo
    // n = array length
    // Time: O(n), Space O(1)
    let i = 0
    let j = nums.length - 1
    
    while(i <= j){
      if (nums[j] === 5){
        j-=1
      } else if (nums[i] ===5) {
        [nums[i], nums[j] ] = [nums[j], nums[i] ]
        i += 1
      } else {
        i+=1
      }
    }
    return nums
    
  };
  
  
  // [1,2,3,5,3,3,5]
  
  module.exports = {
    fiveSort,
  };
  