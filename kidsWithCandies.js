var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    const finalArray = [];

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            finalArray.push(true);
        } else {
            finalArray.push(false);
        }
    }
    
    return finalArray;
};

console.log(kidsWithCandies([2,3,5,1,3], 3)); // [true,true,true,false,true]