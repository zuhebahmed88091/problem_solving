function reverseString (arr) {
    let reverseStrArray = [];

    for(let i = arr.length - 1; i >= 0; i--) {
        reverseStrArray.push(arr[i]);
        // console.log(reverseStrArray)
    }
    for( let i = 0; i <= reverseStrArray.length - 1;i++) {
        arr[i] = reverseStrArray[i];
    }
    return arr;
}

console.log(reverseString(["h","e","l","l","o"]));

function reverseStr(s) {
    const reverseStr = s.split('').reverse().join('');
    s = reverseStr;
    return s;
}

console.log(reverseStr("hello"));