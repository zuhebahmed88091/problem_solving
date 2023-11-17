function countingValleys(steps, path) {
    let count = 0;
    let result = 0;

    for(let char of path){
        console.log(char);
        if(char === 'U'){
            count = count + 1;
        }
        else {
            count = count - 1;
        }
        if(count === 0 && char === 'U'){
            result = result + 1;
        }
    }
    return result;
}

console.log(countingValleys(8,'UDDDUDUU'));