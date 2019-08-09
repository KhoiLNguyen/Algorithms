function areSimilar(a, b) {
    
    const ad = [];
    const bd = [];
    
    // if each value of array a and b are not equal to each other
    // at their respected index then store value of a in ad, and b in bd, ignore if equal
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) {
            ad.push(a[i])
            bd.push(b[i])
        }
    }
    console.log(ad)
    console.log(bd)
    
    // after that determines if they are similar
    // If all respected values are equal, length of ad and bd === 0 => both a and b are similar
    // If length ad and bd === 2, that means first value of ad could be equal to either one of the 2
    // value in b and same for 2nd value of ad. If it is true, when we check it as string it will be equal
    // if not => false or if length > 2 false
    return ad.length === 0 || ad.length === 2 && ad.join('') === bd.reverse().join('')
    
    
//     This is the same implementation but with filter instead
//     const arrayA = a.filter((val, index) => val !== b[index])
//     const arrayB = b.filter((val, index) => val !== a[index])

//     return arrayA.length === 0 || arrayA.length === 2 && arrayA.join('') === arrayB.reverse().join('')
}

console.log(areSimilar([1,2,3], [2,1,3]))