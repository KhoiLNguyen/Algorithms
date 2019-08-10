function minesweeper(matrix) {
  let convertedMine = []; // store actual mine values here
  
  // Looping through all the values of matrix
  for(let i = 0; i < matrix.length; i++) {
      convertedMine.push([]) // push first row of mine here
      for(let j = 0; j < matrix[i].length; j++) {
          convertedMine[i][j] = 0; // set it to 0 first
          
          // Logic here is that at each position we will check for other 8 directions
          // top, top left, top right, bottom, bottom left, bottom right, left and right
          // But we got to deal with the edges there for if value !== undefined meaning, we are at
          // one of the edges position, therefore if checking around it, value = undefined
          // if there is a true or more around the position we are at
          // we increment 1 for each true we find for that position value
          
          //above
          if(matrix[i-1] !== undefined) {
              
              //top 
              if(matrix[i-1][j] === true) {
                  convertedMine[i][j]++
              }
              
               // top left
              if(matrix[i-1][j-1] !== undefined) {
                  if(matrix[i-1][j-1] === true) {
                      convertedMine[i][j]++
                  }
              }

              //top right
              if(matrix[i-1][j+1] !== undefined) {
                  if(matrix[i-1][j+1] === true) {
                      convertedMine[i][j]++
                  }
              }
          }
          
          //below
          if(matrix[i+1] !== undefined) {
              
              //bottom
              if(matrix[i+1][j] === true) {
                  convertedMine[i][j]++
              }
              
              //bottom left
              if(matrix[i+1][j-1] !== undefined) {
                  if(matrix[i+1][j-1] === true) {
                      convertedMine[i][j]++
                  }
              }

              //bottom right
              if(matrix[i+1][j+1] !== undefined) {
                  if(matrix[i+1][j+1] === true) {
                      convertedMine[i][j]++
                  }
              }
          }
          
          //left
          if(matrix[i][j-1] !== undefined) {
              if(matrix[i][j-1] === true) {
                  convertedMine[i][j]++
              }
              
              
          }
          
          //right
          if(matrix[i][j+1] !== undefined) {
              if(matrix[i][j+1] === true) {
                  convertedMine[i][j]++
              }
          }
                     
      }
  }
  return convertedMine;
}

console.log(minesweeper([[true,false,false], 
  [false,true,false], 
  [false,false,false]]))