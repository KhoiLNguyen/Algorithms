// Given a string, return its encoding defined as follows:

// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.
// Example

// For s = "aabbbc", the output should be
// lineEncoding(s) = "2a3bc".

function lineEncoding(s) {
  // \1 is a backreference which matches exactly what was matched in group 1
  // \1* matches exactly what was matched in group 1, 0 or unlimited time
  // this is the key to solve this problem
  let regex = /([a-z])\1*/g
  
  let result = s.match(regex)
  let resultStr = ''
  
  for(let i = 0; i < result.length; i++) {
     if(result[i].length === 1) {
        resultStr+=result[i]
     } else {
        resultStr=resultStr+result[i].length+result[i].split('')[0]
     }
  }
  return resultStr
}