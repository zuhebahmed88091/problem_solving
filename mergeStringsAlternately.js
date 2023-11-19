var mergeAlternately = function(word1, word2) {
    word1Split = word1.split("");
    word2Split = word2.split("");
    let final = [];
    const minLength = Math.min(word1Split.length, word2Split.length);

    for (let i = 0; i < minLength; i++) {
        final.push(word1Split[i], word2Split[i]);
    }

    final.push(...word1Split.slice(minLength), ...word2Split.slice(minLength));

    return final.join("");
    
};

console.log(mergeAlternately("ab", "pqr"));