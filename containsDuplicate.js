function containsDuplicate(nums) {
    const hashMap = {};

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in hashMap) {
            hashMap[nums[i]] = hashMap[nums[i]] + 1;
        }
        else {
            hashMap[nums[i]] = 1;
        }
    }
    for(let elm in hashMap) {
        if(hashMap[elm] >= 2) {
            return true;
        }
    }
    return false;
}
console.log(containsDuplicate([2,14,18,22,22]));