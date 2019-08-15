// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example

// For n = 152, the output should be
// deleteDigit(n) = 52;
// For n = 1001, the output should be
// deleteDigit(n) = 101.

function deleteDigit(n) {       
  // max to keep track of largest number
  let max = 0;
  
  // convert number to string to remove exactly one digit
  let str = n.toString()
  let length = str.length
  // split digit at each index and then concatenate the other digit
  str.split('').forEach((digit, index) => {
      let temp = '' // temp to hold concatenated digit
      
      // edge cases for index = 0 or last index
      if (index === 0) {
         temp = temp + str.slice(1, length) 
      } else if (index === length-1) {
          temp = temp + str.slice(0, length-1)
      } else {
          temp = temp + str.slice(0, index) + str.slice(index + 1, length)
      }
      if(Number(temp) >= max) {
          max = Number(temp)
      }
  })
  return max
}