function findDuplicates(nums) {
    const hashMap = {};
    const hashTable = {};
    const numberArray = [];

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0){
            break;
        }
        if(nums[i] in hashMap) {
            hashMap[nums[i]] = hashMap[nums[i]] + 1;
        }
        else {
            hashMap[nums[i]] = 1;
        }
    }
    
    for(let elm in hashMap) {
        if(hashMap[elm] > 1){
            hashTable[elm] = elm;
            console.log(hashTable)
        }
    }
    let arr = (Object.values(hashTable));
    console.log(arr);

    for (let i = 0; i < arr.length; i++){
        numberArray.push(parseInt(arr[i]));
    }
    return numberArray;
}
console.log(findDuplicates([0,4,5,0,3,6]));