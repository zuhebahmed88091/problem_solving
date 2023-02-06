function groupAnagrams(strs) {
    const hashMap = {};

    for(let elm of strs){
        const sorted = elm.split('').sort().join('');
        console.log(sorted, elm, hashMap)
        if(hashMap[sorted]){
            hashMap[sorted].push(elm);
        }
        else {
            hashMap[sorted] = [elm];
        }
    }
    return Object.values(hashMap);
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));