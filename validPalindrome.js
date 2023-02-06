function isPalindrome(s) {
    const regularExpression = /[\W_]/g;
    const normalizeStr = s.toLowerCase().replace(regularExpression, '');
    console.log(normalizeStr);
    const reverseStr = normalizeStr.split('').reverse().join('');
    // console.log(reverseStr)
    return reverseStr === normalizeStr;
}

console.log(isPalindrome('race car'));