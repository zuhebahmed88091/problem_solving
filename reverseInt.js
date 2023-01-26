function reverse (x) {
    let reverseNum = x.toString().split('').reverse().join('');
        
        if(reverseNum[reverseNum.length-1] === '-') {
            reverseNum = '-' + reverseNum.slice(0, reverseNum.length-1);
            
        }
        if ( parseInt(reverseNum) > Math.pow(2, 31) || parseInt(reverseNum) < Math.pow(-2, 31)){
            return 0;
        }
        else {
            return Number(reverseNum);
        }
}

console.log(reverse(-89756));