var gcdOfStrings = function(str1, str2) {
    if(str1.length < str2.length) {
        [str1, str2] = [str2, str1];
    }

    if (str1 === str2) {
        return str1;
    }

    if (str1.substring(0, str2.length) !== str2) {
        return "";
    }

    return gcdOfStrings(str1.substring(str2.length), str2);
};

console.log(gcdOfStrings("ABABAB", "ABAB")); // "ABC"