// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

// Given an integer, find its digit degree.

// Example

// For n = 5, the output should be
// digitDegree(n) = 0;
// For n = 100, the output should be
// digitDegree(n) = 1.
// 1 + 0 + 0 = 1.
// For n = 91, the output should be
// digitDegree(n) = 2.
// 9 + 1 = 10 -> 1 + 0 = 1.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 5 ≤ n ≤ 109.

// [output] integer

function digitDegree(n) {
    // Set counter to count how many times we have to split digits
    let counter = 0;
    
    // If only one digit => return 0 right away, no need to split
    if (n <= 9) {
        return 0
    } else {
        // else if more than 1 digit, we split it, then get the sum, until there is only
        // 1 digit left. Keep count when we split
        while(String(n).length > 1) {
            n = String(n).split('').reduce((a,b) => Number(a) + Number(b))
            counter++;
        }
    }
    return counter
}

console.log(digitDegree(123))