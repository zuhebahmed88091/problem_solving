// Process one - Brute force - O(n * m)

function isArraySame(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0;i < arr1.length;i++) {
        let index = arr2.indexOf(arr1[i]);
        console.log(index);
        if(index === -1) {
            return false;
        }
        else {
            arr2.splice(index, 1);
        }
    }
    return true;
}

console.log(isArraySame([1,2,4,5], [1,5,2,6]));

// Process two - HashMap

function isSame (arr1, arr2) {
    const hashMap1 = {};
    const hashMap2 = {};

    if(arr1.length !== arr2.length) {
        return false;
    }

    for(let num of arr1) {
        if(num in hashMap1) {
            hashMap1[num] = hashMap1[num] + 1;
        }
        else {
            hashMap1[num] = 1;
        }
    }
    for(let num of arr2) {
        if(num in hashMap2) {
            hashMap2[num] = hashMap2[num] + 1;
        }
        else {
            hashMap2[num] = 1;
        }
    }
    console.log(hashMap1, hashMap2);

    for(num in hashMap1) {
        if( !num in hashMap2 || hashMap1[num] !== hashMap2[num]) {
            return false;
        }
    }
    return true;
}

console.log(isSame([1,2,4,5,1], [1,1,5,2,4]));