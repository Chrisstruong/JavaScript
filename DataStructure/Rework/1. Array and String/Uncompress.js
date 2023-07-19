// Two pointer Strategy 
const uncompress = (s) => {
    // todo
    
    
  //   push element to the array always have constant time of time complexity
  //   n is the number of groups : ex"2c, 300a, 5f"
  //   M is the maximum number of each group: ex: "2, 300, 5"
  //   Time complexity: O(nM)
  //   Space complexity: O(nM)
    
    let result = []
    const numbers = "0123456789"
    let i = 0
    let j = 0
    while(j < s.length){
      if (numbers.includes(s[j])) {
        j += 1
      } else {
        const num = Number(s.slice(i, j))
        for (let count = 0; count < num; count += 1) {
          result.push(s[j])
        }
        j += 1
        i = j
      }
    }
    
    return result.join('')
  };
  
  module.exports = {
    uncompress,
  };
  