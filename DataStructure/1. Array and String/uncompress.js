const uncompress = (s) => {
    // todo
    let number = "0123456789"
    const result = []
    let j = 0
    let i = 0
    while(j < s.length) {
      if (number.includes(s[j])){
        j++
      } else {
        const num = s.slice(i,j)
        for (let count = 0; count < num; count++){
          result.push(s[j])
        }
        j++
        i = j
      }
    }
    return result.join('')
    
  //   push element to the array always have constant time of time complexity
  //   n is the number of groups : ex"2c, 300a, 5f"
  //   M is the maximum number of each group: ex: "2, 300, 5"
  //   Time complexity: O(nM)
  //   Space complexity: O(nM)
  };
  
  module.exports = {
    uncompress,
  };
  