const maxValue = (nums) => {
    // todo
    let max = nums[0]
    for (let num of nums) {
      if (max < num) max = num
    }
    return max
  };
  
  module.exports = {
    maxValue,
  };
  