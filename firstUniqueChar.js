function firstUniqChar(s) {
    const hashMap = {};

    for(let char of s) {
        if(char in hashMap) {
            hashMap[char] = hashMap[char] + 1;
        }
        else {
            hashMap[char] = 1;
        }
    }
    for(let i = 0; i < s.length; i++) {
        const want = s[i];
        console.log(want)
        if(hashMap[want] === 1){
            return i;
        }
    }
    return -1;
}

console.log(firstUniqChar('leetcode'));