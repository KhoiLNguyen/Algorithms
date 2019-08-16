// Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

// Example

// For product = 12, the output should be
// digitsProduct(product) = 26;
// For product = 19, the output should be
// digitsProduct(product) = -1.

function digitsProduct(product) {
    
  // Cover the edge cases
  if(product === 1) {
      return 1
  }
  
  if(product === 0) {
      return 10
  }
  
  let numbers = [] // store multiplier that we got so far
  
  // Logic here is that
  // We find the number that can be divisible by the product 9 -> 2, 1 excluded
  // if product % i === 0 means it is divisible
  // then we keep the new product from product / i
  // and push the new i in numbers
  // keep going until we can't find any more i to satisfy the condition i > 1 terminate
  for(let i = 9; i > 1; i--) {
      while(product % i === 0) {
          product = product / i;
          numbers.push(i)
      }
  }

  // if we found all of the multiplier meaning product = 1
  // if product > 1 we couldn't find any
  if(product > 1) {
      return -1
  }
  

  return Number(numbers.reverse().join('')) // since we find the smallest number, the last multiplier will be the smallest => reverse it   
}
