// Process one - Brute Force - O(n^2)

function twosum (nums, target) {
    for(i = 0; i < nums.length - 1; i++) {
        for(j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twosum([3,2,4], 6));
console.log(twosum([3,3], 6));

// Process two - hashMap -

function twoSum (nums, target) {
    const hashMap = {};
    for (let index = 0; index < nums.length; index++) {
        const want = target - nums[index];
        if (want in hashMap) {
            return [hashMap[want], index];
        }
        else {
            hashMap[nums[index]] = index;
        }
    }
}

console.log(twoSum([3,2,4],6));