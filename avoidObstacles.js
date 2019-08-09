function avoidObstacles(inputArray) {
  // find the highest number in inputArray
  let highestVal = Math.max(...inputArray);

  // start jumping from 2 because 1 won't work
  // previously had i < max, but there is an edge case when
  // inputArray = [2,3], and distance is 4 but if i < 3 then meaning i will stop iterating through
  // the for loop after 3<3 but we need to get to 4
  // 1e8 just helps cover the edge cases
  for (let i = 2; i < 1e8; i++) {
    let jump = i; // jump acts like an accumulator of the same distance that we have to jump
    // to goes through all the obstacles
    let minimumDistance = jump; // keep track of the minimum distance that we need to jump

    if (minimumDistance > highestVal) {
      return minimumDistance;
    }

    // loop until jump > highestVal
    while (jump < highestVal) {
      // for every jump with the same distance
      // if jump is present in inputArray meanning the jump hits one of the obstacles
      // break out of while loop and increase the distance of the jump to try again
      if (!inputArray.includes(jump)) {
        jump = jump + i;
      } else {
        break;
      }
      // if jump goes smoothly without hitting any of the obstacles at all, meanning
      // the minimumDistance is safe to return
      if (jump > highestVal) {
        return minimumDistance;
      }
    }
  }
}

console.log(avoidObstacles[5,7,6,3,9])