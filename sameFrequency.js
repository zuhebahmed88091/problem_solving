function sameFrequency(num1, num2){
    const normalizeNum1 = num1.toString();
    const normalizeNum2 = num2.toString();
    const hashMap1 = {};
    const hashMap2 = {};
    console.log(normalizeNum1, normalizeNum2);

    if(normalizeNum1.length !== normalizeNum2.length) {
        return false;
    }

    for(let elm of normalizeNum1) {
        if(elm in hashMap1) {
            hashMap1[elm] = hashMap1[elm] + 1;
        }
        else {
            hashMap1[elm] = 1;
        }
    }
    console.log(hashMap1);
    for(let elm of normalizeNum2) {
        if(elm in hashMap2) {
            hashMap2[elm] = hashMap2[elm] + 1;
        }
        else {
            hashMap2[elm] = 1;
        }
    }
    console.log(hashMap2); 
    for(let elm in hashMap1) {
        if(!elm in hashMap2 || hashMap1[elm] !== hashMap2[elm]){
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(22,222));