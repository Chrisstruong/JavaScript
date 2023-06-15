const createCombinations = (items, k) => {
    // todo
    // n = length of items
    // k = target size
    // Time: O(n choose k)
    // Space: O(n choose k)
    if (items.length < k) return []
    if (k === 0) return [[]]
    
    const first = items[0]
    
    const partialCombos = createCombinations(items.slice(1), k - 1)
    const combosWithFirst = []
    for (let partialCombo of partialCombos) {
      combosWithFirst.push([ first, ...partialCombo])
    }
    
    const combosWithoutFirst = createCombinations(items.slice(1), k)
    return [ ...combosWithFirst, ...combosWithoutFirst]
  };
  
  module.exports = {
    createCombinations,
  };
  