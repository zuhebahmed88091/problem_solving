function isAnagram(s, t) {
    const normalizeStr1 = s.replace(/[^\w]/g, '').toLowerCase();
    const normalizeStr2 = t.replace(/[^\w]/g, '').toLowerCase();
    const hashMap1 = {};
    const hashMap2 = {};

    // if(normalizeStr1.length !== normalizeStr2.length) {
    //     return false;
    // }
    for(let char of normalizeStr1) {
        if(char in hashMap1){
            hashMap1[char] = hashMap1[char] + 1;
        }
        else {
            hashMap1[char] = 1;
        }
    }
    
    for(let char of normalizeStr2) {
        if(char in hashMap2){
            hashMap2[char] = hashMap2[char] + 1;
        }
        else {
            hashMap2[char] = 1;
        }
    }

    if(Object.keys(hashMap1).length !== Object.keys(hashMap2).length) {
        return false;
    }

    for(let char in hashMap1) {
        if(!char in hashMap2 || hashMap1[char] !== hashMap2[char]) {
            return false;
        }
    }
    return true;


}

console.log(isAnagram('rail safety', 'fairy tales'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('a', 'ab'));