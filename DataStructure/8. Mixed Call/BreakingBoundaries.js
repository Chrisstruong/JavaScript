const breakingBoundaries = (m, n, k, r, c, memo = {}) => {
    // Memoized Complexity
    // Time: O(mnk)
    // Space: O(mnk)
    const key = `${k}, ${r}, ${c}`
    
    if (key in memo) return memo[key]
    
    const rowInbounds = 0 <= r && r < m
    const colInbounds = 0 <= c && c < n
    
    if (!rowInbounds || ! colInbounds) return 1
    
    if (k === 0) return 0
    
    let totalCount = 0
    const deltas = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    for (let delta of deltas) {
      const [ dRow, dCol] = delta
      totalCount += breakingBoundaries(m, n, k - 1, r + dRow, c + dCol, memo)
    }
    
    memo[key] = totalCount
    return totalCount
  };
  
  module.exports = {
    breakingBoundaries,
  };
  