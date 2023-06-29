const lexicalOrder = (word1, word2, alphabet) => {
    // todo
    // n = length of shorter word
    // Time: O(n)
    // Space: O(1)
    const maxLength = Math.max(word1.length, word2.length)
    
    for (let i = 0; i < maxLength; i += 1) {
      const char1 = word1[i]
      const char2 = word2[i]
      const value1 = alphabet.indexOf(char1)
      const value2 = alphabet.indexOf(char2)
      if (value1 < value2) {
        return true
      } else if (value2 < value1) {
        return false
      }
    }
    return true
  };
  
  module.exports = {
    lexicalOrder,
  };
  