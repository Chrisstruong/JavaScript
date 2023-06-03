const countPaths = (grid, r = 0, c = 0, memo = {} ) => {
    // todo
    // Brute Force Recursion
    // r = # rows
    // c = # cols
    // Timne: O(2^(r+c))
    // Space: O( r+c )
    
    // Prefered solution: Dynamic programming w/ Memoization
    // r = # rows
    // c = # cols
    // Time: O( r*c )
    // Space: O( r*c )
    
    const pos = r + ',' + c
    if(pos in memo) return memo[pos]
    
    if (r === grid.length || c === grid[0].length || grid[r][c] === 'X') {
      return 0
    }
    
    if (r === grid.length - 1 && c === grid[0].length - 1) return 1
    
     const downCount = countPaths(grid, r + 1, c, memo)
     const rightCount = countPaths(grid, r, c + 1, memo)
     memo[pos] =  downCount + rightCount
    return memo[pos]
  };
  
  module.exports = {
    countPaths,
  };
  