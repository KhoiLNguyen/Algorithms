function sortByHeight(a) {
  // filter out the positive numbers and then sort them
  let posArr = a.filter(number => number !== -1).sort((a,b) => a - b)
  
  let indexVal = 0; // iterate through the values of posArr, save time so we only use 1 loop
  
  for(let i = 0; i < a.length; i++) {
      // keep going until value is not equal to -1
      if(a[i] !== -1) {
          a[i] = posArr[indexVal] // then set that value = to the value in posArr, then increment indexVal
          indexVal++;
      }

  }
  
  return a
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))