function vowels(str) {
    let hashMap = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };
    let normalizeStr = str.toLowerCase().split('').join('');
    for(let char of normalizeStr) {
        if(char in hashMap) {
            hashMap[char] = hashMap[char] + 1;
        }
    }
    return hashMap;
}

console.log(vowels('Hello World uuuuu'));