// Process one - Hashmap
function subArraySum (nums, k) {
    const hashMap = {
        0: 1
    }
    let sum = 0;
    let result = 0;
    for(let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        if([sum - k] in hashMap) {
            result = result + hashMap[sum - k];
            console.log(result);
        }
        if(sum in hashMap) {
            hashMap[sum] = hashMap[sum] + 1;
        }
        else {
            hashMap[sum] = 1;
        }
        console.log(hashMap)

        
    }
    return result;
    // console.log(result);
    // console.log(hashMap);
}

console.log(subArraySum([1], 0));

//Process two - Brute force

function subarraySum (nums, k) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        let base = 0;
        for (let j = i;j < nums.length; j++) {
            base = base + nums[j];
            if (base == k){
                counter++;
            }
        }
    }
    return counter;
}

console.log(subarraySum([1, -1, 1, 1, 1, 1], 3))

