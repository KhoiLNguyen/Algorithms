// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

function sudoku(grid) {
  // keep track of unique grid
  let checkGrid = new Set()
  
  // iterating through each 3x3 grid, add all values into checkGrid to check if unique
  // if not return false right away
  for(let i = 0; i < grid.length-2; i+=3) {
      for(let j = 0; j < grid[i].length-2; j+=3) {
          for(let a = i; a < i+3; a++) {
              for(let b = j; b < j+3; b++) {
                  checkGrid.add(grid[a][b])
              }
          }
          if(checkGrid.size < 9) {
              return false
          }
          checkGrid = new Set()
      }
  }
  
  
  // check if each row is unique, same logic
  for(let i = 0; i < grid.length; i++) {
      let checkRow = new Set(grid[i])
      if(checkRow.size < 9) {
          return false
      }
      checkRow = new Set()
  }
  
  // check if each column is unique same logic
  let checkColumn = new Set()
  for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid.length; j++) {
          checkColumn.add(grid[j][i])
      }
      if(checkColumn.size < 9) {
          return false
      }
      checkColumn = new Set()
  }
  
  return true
}