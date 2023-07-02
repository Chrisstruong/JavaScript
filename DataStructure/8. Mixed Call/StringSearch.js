const stringSearch = (grid, s) => {
    // todo  
    // n = # rows
    // c = # columns
    // Time: O(3^(rc)
    // Space: O(rc)
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            if (dfs(grid, r, c, s, new Set())) return true
        }
    }

    return false
};

const dfs = (grid, r, c, s, visited) => {
    if (s === '') return true

    const rowInbounds = 0 <= r && r < grid.length
    const colInbounds = 0 <= c && c < grid[0].length

    if (!rowInbounds || !colInbounds) return false

    if (s[0] !== grid[r][c]) return false

    const pos = r + ',' + c
    if (visited.has(pos)) return false
    visited.add(pos)

    const suffix = s.slice(1)
    return dfs(grid, r - 1, c, suffix, visited) ||
        dfs(grid, r + 1, c, suffix, visited) ||
        dfs(grid, r, c - 1, suffix, visited) ||
        dfs(grid, r, c + 1, suffix, visited)
}

// Second solution

//   const stringSearch = (grid, s) => {
//     // todo  
//     // n = # rows
//     // c = # columns
//     // Time: O(3^(rc)
//     // Space: O(rc)
//     for (let r = 0; r < grid.length; r += 1) {
//       for(let c = 0; c < grid[0].length; c += 1){
//         if (dfs(grid, r, c, s)) return true
//       }
//     }

//     return false
//   };

//   const dfs = (grid, r, c, s) => {
//     if (s === '') return true

//     const rowInbounds = 0 <= r && r < grid.length
//     const colInbounds = 0 <= c && c < grid[0].length

//     if (!rowInbounds || !colInbounds) return false

//     if (s[0] !== grid[r][c]) return false

//     const suffix = s.slice(1)
//     const char = grid[r][c]
//     grid[r][c] = '*'
//     const result = dfs(grid, r - 1, c, suffix) ||  
//     dfs(grid, r + 1, c, suffix) || 
//     dfs(grid, r, c - 1, suffix) ||
//     dfs(grid, r, c + 1, suffix)
//     grid[r][c] = char
//     return result
//   }

module.exports = {
    stringSearch,
};
