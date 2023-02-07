function containsNearbyDuplicate(nums, k) {
    const hashMap1 = {};
    const hashMap2 = {};
    
    for (let index = 0; index < nums.length; index++){
        if(nums[index] in hashMap1) {
            hashMap2[nums[index]] = index;
            console.log(hashMap2)
            let want = Math.abs(hashMap1[nums[index]] - hashMap2[nums[index]]);
            console.log(want);
            if(want <= k) {
                return true;
            }
            else {
                hashMap1[nums[index]] = index;
            }
            
        }
        else {
            hashMap1[nums[index]] = index;
        }
        console.log(hashMap1,hashMap2)
    }
    return false;
}

console.log(containsNearbyDuplicate([1,2,3,1], 3));