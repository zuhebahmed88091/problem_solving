var romanToInt = function(s) {

    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let finalValue = 0;

    for (let i = 0; i < s.length; i++) {
        let current = roman[s[i]];
        let next = roman[s[i + 1]];

        if (current < next) {
            finalValue += next - current;
            i++;
        } else {
            finalValue += current;
        }
    }

    return finalValue;
    
};

console.log(romanToInt("MCMXCIV"));