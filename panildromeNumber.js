function numPalindrome(x) {
    let normalizeNum = x.toString().split('').join('');
    console.log(normalizeNum)
    let reverseNum = x.toString().split('').reverse().join('');
    console.log(reverseNum)
    return reverseNum === normalizeNum
}

console.log(numPalindrome(-11));