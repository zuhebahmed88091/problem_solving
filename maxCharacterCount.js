function max(str) {
    const hashMap = {};
    let max = 0;
    let maxChar = '';

    for(let char of str) {
        if(char in hashMap) {
            hashMap[char] = hashMap[char] + 1;
        }
        else {
            hashMap[char] = 1;
        }
    }
    for(let char in hashMap) {
        console.log(char)
        if(hashMap[char] > max) {
            max = hashMap[char];
            maxChar = char;
        }
    }
    console.log(hashMap)
    return maxChar;
}

console.log(max('appplee'));