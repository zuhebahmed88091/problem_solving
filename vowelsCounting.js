function vowels (str) {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count ++;
        }
    }
    return count;
}

console.log(vowels('Man why man why.come home'));

function vowelsCounting (str) {
    let count = 0;
    let collectedVowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if(collectedVowels.includes(char)) {
            count ++;
        }
    }
    return count;
}

console.log(vowelsCounting('Hey you'))