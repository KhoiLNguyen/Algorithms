// You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

// Return an array of names that will be given to the files.

// Example

// For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
// fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

function fileNaming(names) {

  let correctFileName = [] // store correct file names here
  
  
  // Iterating through each filename if it is not in correctFileName array yet, push it in
  // If it is already in, then let count = 1, and check if filename(1) is in yet? If not push it in
  // if it is present then check for filename(2) until it isn't in there, then push that filename in
  for(let i = 0; i < names.length; i++) {
      if(!correctFileName.includes(names[i])) {
          correctFileName.push(names[i])
      } else {
          let count = 1
          while(correctFileName.includes(`${names[i]}(${count})`)) {
              count++
          }
          correctFileName.push(`${names[i]}(${count})`)
      }
  }
  
  return correctFileName
}