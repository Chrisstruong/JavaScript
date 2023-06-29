const detectDictionary = (dictionary, alphabet) => {
    // todo
    // n = # of words
    // k = max word length
    // Time: O(nk)
    // Space: O(1)
    for (let i = 0; i < dictionary.length - 1; i += 1) {
      const current = dictionary[i]
      const next = dictionary[i + 1]
      if (lexicalOrder(current, next , alphabet) === false) {
        return false
      }
    }
    return true
  };
  
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
    detectDictionary,
  };
  