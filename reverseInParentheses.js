function reverseInParentheses(inputString) {
    // Strategy here is to find the index of first occurence of )
    // Then find the last occurence of ( going from right to left start from the index of first )
    // Then we extract the string in these parentheses then reverse it with slice, split, reverse, join
    // After that we get a new string, start from the beginning not including the last ( + the reversed string + everything else
    // not include the first ) with slice
    // NOTE: loop will run until we can't not find anymore ) meaning we are done
    
    // Example: f o o ( b a r ) b a z
    //          0 1 2 3 4 5 6 7 8 9 10
    while(inputString.indexOf(')', 0) !== -1) {
        // a = 7 start searching from 0, left to right
        // b = 3 start searching from 7, right to left
        // then we extract and reverse the string inside
        // slice from b+1 = 3+1 = 4 meanning slice from index 4 to index 7 but not include index 7
        // Then we combine the string without the first () that we find
        // inputString = foo + rab + baz = foorabbaz
        // no more ) to find we are done here.
        let a = inputString.indexOf(')', 0)
        let b = inputString.lastIndexOf('(', a);
        let c = inputString.slice(b+1, a).split('').reverse().join('');
        inputString = inputString.slice(0, b) + c + inputString.slice(a+1);
    }
    return inputString;
}

console.log(reverseInParentheses("foo(bar)baz"))