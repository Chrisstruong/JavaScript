const positioningPlants = (costs, pos = 0, lastPlant = null, memo = {}) => {
    // Brute Force Complexity
    // n = # positions
    // m = # plant types
    // Time: O(m^n)
    // Space: O(n)
    
    // Memoized Complexity
    // n = # positions
    // m = # plant types
    // Time: O(n*m)
    // Space: O(n*m)
    const key = pos + ',' + lastPlant
    
    if (key in memo) return memo[key]
    
    if (pos === costs.length) return 0
    
    let min = Infinity
    
    for (let plant = 0; plant < costs[pos].length; plant += 1) {
      if (plant !== lastPlant){
        const candidate = costs[pos][plant] + positioningPlants(costs, pos + 1, plant, memo)
        min = Math.min(min, candidate)
      }
    }
    
    memo[key] = min
    return min
  };
  
  module.exports = {
    positioningPlants,
  };
  