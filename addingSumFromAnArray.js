function simpleArraySum(ar) {
    let sum = 0;

    for(let num of ar) {
        sum += num;
    }
    return sum;

}

console.log(simpleArraySum([5, 10, 20]))