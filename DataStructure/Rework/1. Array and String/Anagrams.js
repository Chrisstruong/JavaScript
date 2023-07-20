// time: O(n+m)
// Space(n)

const anagrams = (s1, s2) => {
    // todo
    // Complexity
    // n = string1 length
    // m = string2 length
    // Time: O(n+m)
    // Space: ~O(n+m)
    const count = {}
    
    for (let char of s1) {
      // To see if the letter is already established or not. If not, create a new one
      if (!(char in count)) {
        count[char] = 0
      }
      count[char] += 1
    }
    
    for (let char of s2) {
      if (!(char in count)) {
        count[char] = 0
      }
      count[char] -= 1
    }
    
    for (let char in count) {
      if (count[char] !== 0) return false
    }
    return true
    
  
    
  
    
    //  modifiedS1 = s1.split('').sort().join('')
    // modifiedS2 = s2.split('').sort().join('')
    // if (modifiedS1 === modifiedS2) return true
    // else return false 
    
  //   complexity:
  //   n = string1 length
  //   m = string2 length
  //   Time: O(n+m)
  //   Space: O(n+m)
  };
  
  console.log(anagrams("restful","fluster"))
  
  module.exports = {
    anagrams,
  };
  