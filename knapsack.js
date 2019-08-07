function knapsackLight(value1, weight1, value2, weight2, maxW) {
    
  // if both are weight less than max return both values
  if(weight1 + weight2 <= maxW) {
      return value1 + value2;
  } else if (weight1 <= maxW && weight2 > maxW) { //weight1 <= maxW but weight2 is heavier => value1
      return value1;
  } else if (weight2 <= maxW && weight1 > maxW) { //weight2 <= maxW but weight1 is heavier => value2
      return value2;
  } else if (weight1 > maxW && weight2 > maxW) { // if both are heavier
      return 0;
  } else { // above doesn't work then return whichever is higher in value
      if(value1 > value2) {
          return value1;
      }  else {
          return value2;
      }
  }
}

console.log(knapsackLight(10, 4, 5, 2, 6));
