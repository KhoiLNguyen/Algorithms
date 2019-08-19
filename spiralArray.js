function spiralNumbers(n) {
    
  // populate nxn array with 0
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  
  // keep track of positions of rowStart, rowEnd, colStart, colEnd
  let rs = 0
  let re = n-1
  let cs = 0
  let ce = n-1
  let value = 0 // increment value while iterating through the array in spiral
  
  while(rs <= re && cs <= ce) {
      
      // going left -> right, row is fixed, only column moves
      for(let i = cs; i <= ce; i++) {
          value++
          matrix[rs][i] = value
      }
      rs++ // increment rowStart since we filled out all the values from first row
      
      // rs is incremented by 1, now going top -> bot, row moves, column is fixed
      for(let i = rs; i <= re; i++) {
          value++
          matrix[i][ce] = value
      }
      ce-- // increment colEnd since we willed out all the values from the last column
      
      // Check if rs <= re when they are equal it means we are on the last row to fill out values
      if(rs <= re) {
          // right -> left
          for(let i = ce; i >= cs; i--) {
              value++
              matrix[re][i] = value
          }
          re--
      }
      // same for row
      if(cs <= ce) {
          // bot -> top
          for(let i = re; i >= rs; i--) {
              value++
              matrix[i][cs] = value
          }
          cs++
      }
  }
  return matrix 
}